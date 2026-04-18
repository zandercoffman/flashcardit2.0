const prompts = require("prompts")

const normalizeText = (text) => String(text || "")
    .replace(/\r\n/g, "\n")
    .replace(/\r/g, "\n")
    .trim()

const splitLines = (text) => normalizeText(text)
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line.length > 0)

const extractEventTitle = (text) => {
    const lines = splitLines(text)
    const titleParts = []

    for (const line of lines) {
        if (/^(event summary|eligible divisions|team event|new for|sponsorship|dress code)\b/i.test(line)) {
            break
        }

        if (/^hosa\b/i.test(line)) {
            continue
        }

        titleParts.push(line)

        if (titleParts.length >= 3) {
            break
        }
    }

    const title = titleParts.join(" ").replace(/\s+/g, " ").trim()
    return title || "HOSA Event"
}

const normalizeSkillTitle = (title) => String(title || "")
    .replace(/[–—]/g, "-")
    .replace(/\s+/g, " ")
    .trim()

const romanToNumber = (roman) => {
    const map = { I: 1, V: 5, X: 10 }
    const chars = String(roman || "").toUpperCase().split("")
    let total = 0

    for (let i = 0; i < chars.length; i += 1) {
        const current = map[chars[i]] || 0
        const next = map[chars[i + 1]] || 0

        if (current < next) {
            total -= current
        } else {
            total += current
        }
    }

    return total
}

const cleanStepText = (text) => String(text || "")
    .replace(/\s+/g, " ")
    .replace(/\s+\d+\s+\d+\s*$/g, "")
    .replace(/\s+-\s*$/g, "")
    .trim()

const parseSkillBlocks = (sourceText) => {
    const text = normalizeText(sourceText)
    const skillHeaderRegex = /(^|\n)Skill\s+([IVX]+)\s*:?[ \t]*([^\n]*?)(?:\s+Possible\s+Awarded)?\s*(?=\n)/g
    const headers = []

    let match
    while ((match = skillHeaderRegex.exec(text)) !== null) {
        const index = match.index + (match[1] ? match[1].length : 0)
        const roman = String(match[2] || "").trim()
        const rawTitle = String(match[3] || "").trim()
        const title = normalizeSkillTitle(rawTitle)

        if (!title) {
            continue
        }

        headers.push({ index, roman, title })
    }

    const rawBlocks = headers.map((header, idx) => {
        const start = header.index
        const end = idx + 1 < headers.length ? headers[idx + 1].index : text.length
        const blockText = text.slice(start, end).trim()

        return {
            index: header.index,
            skillNumber: header.roman,
            skillTitle: header.title,
            blockText,
        }
    })

    // Prefer the most detailed block for each skill key; the first mention is often the short summary list.
    const bestBySkill = new Map()

    for (const block of rawBlocks) {
        const key = `${block.skillNumber}:${block.skillTitle.toLowerCase()}`
        const existing = bestBySkill.get(key)

        if (!existing || block.blockText.length > existing.blockText.length) {
            bestBySkill.set(key, block)
        }
    }

    return Array.from(bestBySkill.values())
        .sort((a, b) => romanToNumber(a.skillNumber) - romanToNumber(b.skillNumber))
        .map((block) => ({
            skillNumber: block.skillNumber,
            skillTitle: block.skillTitle,
            blockText: block.blockText,
        }))
}

const parseSubskillChunks = (skill) => {
    const lines = splitLines(skill.blockText)
    const logicalLines = []

    for (const rawLine of lines) {
        const line = String(rawLine || "").trim()
        if (!line) continue

        if (/^(section #|team #|judge'?s signature|possible awarded|total points|mastery|partner\b)/i.test(line)) {
            continue
        }

        if (/^skill\s+[ivx]+\s*:/i.test(line)) {
            continue
        }

        // Some pasted rubrics place a numbered item and lettered subitems on the same line.
        const exploded = line
            .replace(/\s+([a-z])\.\s+/gi, "\n$1. ")
            .split("\n")
            .map((part) => part.trim())
            .filter(Boolean)

        let consumedAny = false

        for (const part of exploded) {
            if (/^(\d+\.|[a-z]\.)/i.test(part)) {
                logicalLines.push(part)
                consumedAny = true
                continue
            }

            if (logicalLines.length > 0) {
                logicalLines[logicalLines.length - 1] += ` ${cleanStepText(part)}`
                consumedAny = true
            }
        }

        if (consumedAny) {
            continue
        }

        if (logicalLines.length > 0) {
            logicalLines[logicalLines.length - 1] += ` ${cleanStepText(line)}`
        }
    }

    const sections = []
    let currentSection = null

    for (const line of logicalLines) {
        const sectionMatch = line.match(/^(\d+)\.\s*(.*)$/)
        const subMatch = line.match(/^([a-z])\.\s*(.*)$/i)

        if (sectionMatch) {
            if (currentSection) sections.push(currentSection)
            currentSection = {
                sectionNumber: sectionMatch[1],
                sectionTitle: sectionMatch[2].trim(),
                subitems: [],
            }
            continue
        }

        if (subMatch && currentSection) {
            currentSection.subitems.push({
                subLetter: subMatch[1].toLowerCase(),
                text: cleanStepText(subMatch[2]),
            })
        }
    }

    if (currentSection) {
        sections.push(currentSection)
    }

    const chunks = []

    for (const section of sections) {
        if (section.subitems.length === 0) {
            chunks.push({
                sectionNumber: section.sectionNumber,
                sectionTitle: cleanStepText(section.sectionTitle),
                chunkLabel: `${section.sectionNumber}`,
                lines: [cleanStepText(section.sectionTitle)],
            })
            continue
        }

        for (let i = 0; i < section.subitems.length; i += 4) {
            const group = section.subitems.slice(i, i + 4)
            const startLetter = group[0].subLetter
            const endLetter = group[group.length - 1].subLetter

            chunks.push({
                sectionNumber: section.sectionNumber,
                sectionTitle: cleanStepText(section.sectionTitle),
                chunkLabel: `${section.sectionNumber}${startLetter}-${endLetter}`,
                lines: group.map((item) => `${item.subLetter}. ${item.text}`),
            })
        }
    }

    return chunks
}

const buildSubskillPrompt = (eventTitle, skill, chunk) => {
    const chunkLines = chunk.lines.map((line) => `- ${line}`).join("\n")

    return `Make a HOSA ${eventTitle} flashcard set for Skill ${skill.skillNumber}: ${skill.skillTitle}.

Focus only on these 4 topics:
- Section ${chunk.sectionNumber}: ${chunk.sectionTitle}
${chunkLines}

Use only the rubric content for this exact chunk.

Requirements:
- Create exactly 35 flashcards.
- Return only JavaScript tuple entries in this format: ["term", "definition"],
- Do not include markdown, commentary, numbering, or code fences.
- Do not wrap in an outer array or object.
- Terms must be specific to this subskill chunk and useful for competition performance.
- Definitions must be concise, accurate, and practical.
- Cover all listed lines in this chunk completely before adding extra related terms.
- Include key steps, equipment, safety language, judge cues, communication phrases, timing details, and scoring-critical actions.
- Include at least 3 scenario-based cards with terms starting with "Example:".
- Do not repeat terms or definitions.
- End with a trailing comma and newline.

Skill excerpt:
<<<BEGIN SUBSKILL CHUNK>>>
Skill ${skill.skillNumber}: ${skill.skillTitle}
Section ${chunk.sectionNumber}: ${chunk.sectionTitle}
${chunk.lines.join("\n")}
<<<END SUBSKILL CHUNK>>>
`
}

const copyToClipboard = async (text) => {
    try {
        const clipboardy = await import("clipboardy")
        await Promise.race([
            clipboardy.default.write(text),
            new Promise((_, reject) => setTimeout(() => reject(new Error("Clipboard timeout")), 2000)),
        ])
        return true
    } catch (error) {
        return false
    }
}

const readClipboard = async () => {
    try {
        const clipboardy = await import("clipboardy")
        const text = await Promise.race([
            clipboardy.default.read(),
            new Promise((_, reject) => setTimeout(() => reject(new Error("Clipboard timeout")), 2000)),
        ])
        return normalizeText(text)
    } catch (error) {
        return ""
    }
}

const runSkillMode = async (eventTitle, skills) => {
    if (!Array.isArray(skills) || skills.length === 0) {
        console.error("No skills were parsed from the rubric text in your clipboard.")
        return
    }

    const skillPlans = skills.map((skill) => {
        const chunks = parseSubskillChunks(skill)
        return {
            skill,
            chunks: chunks.length > 0 ? chunks : [{
                sectionNumber: "1",
                sectionTitle: "Full Skill",
                chunkLabel: "full",
                lines: [skill.blockText],
            }],
        }
    })

    let skillIndex = 0
    let chunkIndex = 0
    let lastCopied = ""

    const advanceChunk = () => {
        const currentPlan = skillPlans[skillIndex]
        if (!currentPlan) return

        if (chunkIndex + 1 < currentPlan.chunks.length) {
            chunkIndex += 1
            return
        }

        skillIndex += 1
        chunkIndex = 0
    }

    while (skillIndex < skillPlans.length) {
        const currentPlan = skillPlans[skillIndex]
        const currentSkill = currentPlan.skill
        const currentChunk = currentPlan.chunks[chunkIndex]
        const promptText = buildSubskillPrompt(eventTitle, currentSkill, currentChunk)

        console.clear()

        if (lastCopied) {
            console.log("Last copied prompt:\n")
            console.log(lastCopied)
            console.log("\n")
        }

        console.log(`Event: ${eventTitle}`)
        console.log(`Skill ${skillIndex + 1}/${skillPlans.length}\n`)
        console.log(`Skill ${currentSkill.skillNumber}: ${currentSkill.skillTitle}`)
        console.log(`Chunk ${chunkIndex + 1}/${currentPlan.chunks.length}: ${currentChunk.chunkLabel}`)
        console.log(`Section ${currentChunk.sectionNumber}: ${currentChunk.sectionTitle}`)
        console.log(currentChunk.lines.map((line) => `- ${line}`).join("\n"))
        console.log("")

        const choices = [
            { title: "Copy prompt and next chunk", value: "copy-next" },
            { title: "Copy prompt (stay)", value: "copy-stay" },
            { title: "Skip to next chunk", value: "next" },
            { title: "Skip remaining chunks in this skill", value: "skip-skill" },
            { title: "Quit", value: "quit" },
        ]

        const { action } = await prompts({
            type: "select",
            name: "action",
            message: "Choose action",
            choices,
        })

        if (!action || action === "quit") {
            return
        }

        if (action === "copy-next") {
            const ok = await copyToClipboard(promptText)
            if (ok) {
                lastCopied = promptText
                advanceChunk()
            } else {
                console.error("Failed to copy prompt.")
            }
            continue
        }

        if (action === "copy-stay") {
            const ok = await copyToClipboard(promptText)
            if (ok) {
                lastCopied = promptText
            } else {
                console.error("Failed to copy prompt.")
            }
            continue
        }

        if (action === "next") {
            advanceChunk()
        }

        if (action === "skip-skill") {
            skillIndex += 1
            chunkIndex = 0
        }
    }

    console.log("Completed all parsed skills.")
}

const run = async () => {
    const rubricText = await readClipboard()

    if (!rubricText) {
        console.error("Clipboard is empty. Copy your full HOSA rubric first, then run this script.")
        return
    }

    const eventTitle = extractEventTitle(rubricText)
    const skills = parseSkillBlocks(rubricText)

    await runSkillMode(eventTitle, skills)
}

run()
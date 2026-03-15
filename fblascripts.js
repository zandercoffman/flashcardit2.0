const prompts = require("prompts");

const fblaEventName = "Securities & Investments Objective Test";
const AmountOfTerms = 3
const amountOfFlashcards = 60
const amountOfPresentationFlashcards = 120

const studyguide = `Study Guide: Knowledge Areas and Objectives
A. Investment Fundamentals
1. Define terminology common to securities & investments.
2. Demonstrate knowledge of savings.
3. Identify stages of investing and the relationship between risk and return.
4. Identify sources of financial information to make investment decisions.
B. Investment Wrappers, Taxation, and Trusts
1. Describe individual savings accounts.
2. Demonstrate knowledge of Pensions.
3. Demonstrate knowledge of taxation.
4. Describe and Identify Investment bonds.
C. Investment Product & Funds
1. Identify and explain the different types of loans.
2. Explain the purposes of mortgages.
3. Demonstrate the knowledge and purpose of life assurance.
4. Describe and explain unit trusts.
5. Describe opened ended investment companies.
6. Identify the characteristics of pricing, dealing, and settlement.
7. Identify and explain what Investment trusts are.
8. Demonstrate knowledge of how hedge funds work.
D. Stock Market
1. Explain how stock market benefits investors and companies.
2. Analyze stock tables for investment related information.
3. Describe options for handling accumulated money/earnings.
4. Understand the types of investments.
5. Compare and differentiate between Primary vs secondary markets.
6. Distinguish between Bull, bear, and pig markets.
E. Stock versus Other Investments
1. Demonstrate knowledge of compounding.
2. Explain the purpose of company.
3. Describe ethical behavior in support center.
4. Understand the process of gathering relevant information.
5. Evaluate financial statements.
6. Define terminology common to stock markets and other investments.
F. Mutual Funds
1. Understanding and explaining total return.
2. Describe mutual funds and its involvement with taxes.
3. Identify the process of purchasing mutual funds.
4. Explain benefits with investment in mutual funds.
5. Understand fund costs.
G. Basics of Bonds
1. Demonstrate the knowledge of bond duration.
2. Describe the process of buying bonds.
3. Describe the process of issuing bonds.
4. Identify the roles of collateral.
5. Compare secured and unsecured bonds.
6. Introduction to government bonds.
7. Identify U.S. government agency bonds and savings bonds.
Securities & Investments - Page 5 of 6 – Updated November 2025
© 2026 National Future Business Leaders of America, Inc. All rights reserved. No part of this publication may be reproduced,
distributed, or transmitted in any form without prior written permission.
2025-2026 Competitive Events Guidelines
Securities & Investments
H. Derivatives
1. Demonstrate the knowledge of Futures.
2. Demonstrate the knowledge of Options.
3. Demonstrate the knowledge of SWAPS.
4. Describe the different uses of Derivatives.
I. Financial Services Regulation
1. Explain Financial Services & Markets Act.
2. Identify Financial Crime.
3. Explain insider dealing and market abuse.
4. Describe the Data Protection Act 1998.
5. Identify types of Breaches, complaints, and compensation.`

const getPrompt = (text) => {
    return `
You are generating FBLA ${fblaEventName} study flashcards.

Create exactly ${amountOfFlashcards} flashcards using only the topics below:
${text}

Requirements:
- Return only comma-separated tuple entries in JavaScript array literal format.
- Return exactly ${amountOfFlashcards} tuple entries total.
- Each entry must be a 2-element array in this format: ["term", "definition"].
- Terms must be specific, not vague category labels.
- Definitions must be concise, accurate, and study-friendly.
- In addition to the ${amountOfFlashcards} cards, add 6 cards that must be challenge-style flashcards that are scenario-based application examples.
- For challenge flashcards, start the term with "Example:" and make the definition practical.
- Do not repeat terms or definitions.
- Cover the provided topics as evenly as possible.
- Do not include markdown, commentary, code fences, or extra text.
- Do not wrap entries in an outer array or object.
- Separate entries with commas so they can be pasted directly into an existing vocab array.
- At the end of the list, add one comma and then a newline, but do not add a closing bracket or semicolon.
- Output everything on one line.

Example format:
["Market Segmentation","Dividing a broad market into smaller groups with shared characteristics"],["Brand Loyalty","A consumer's consistent preference for one brand over competitors"],
    `
}

const readClipboard = async () => {
    try {
        const clipboardy = await import("clipboardy")
        const content = await Promise.race([
            clipboardy.default.read(),
            new Promise((_, reject) => setTimeout(() => reject(new Error("Clipboard timeout")), 2000)),
        ])
        return typeof content === "string" ? content : ""
    } catch (error) {
        return ""
    }
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

const splitLines = (text) => {
    return text
        .split(/\r?\n/)
        .map((line) => line.trim())
        .filter((line) => line.length > 0)
}

const buildNumberedItems = (text) => {
    const lines = splitLines(text)
    const items = []
    let current = ""

    for (const line of lines) {
        if (/^\d+\./.test(line)) {
            if (current) items.push(current)
            current = line
        } else if (current) {
            current += " " + line
        }
    }

    if (current) items.push(current)
    return items
}

const unique = (items) => {
    const out = []
    const seen = new Set()

    for (const item of items) {
        const normalized = item.replace(/\s+/g, " ").trim()
        const key = normalized.toLowerCase()
        if (!normalized || seen.has(key)) continue
        seen.add(key)
        out.push(normalized)
    }

    return out
}

const findBlockBetween = (text, startLabel, endLabel) => {
    const start = text.indexOf(startLabel)
    if (start === -1) return ""

    const afterStart = text.slice(start)
    const endOffset = afterStart.indexOf(endLabel)
    if (endOffset === -1) return afterStart

    return afterStart.slice(0, endOffset)
}

const findRatingSheetBlock = (text) => {
    const source = typeof text === "string" ? text : ""
    const start = source.search(/Rating Sheet/i)

    if (start === -1) {
        return findBlockBetween(source, "Presentation Rating Sheet", "Staff Only: Penalty Points")
    }

    const afterStart = source.slice(start)
    const endOffset = afterStart.indexOf("Staff Only: Penalty Points")
    if (endOffset === -1) return afterStart

    return afterStart.slice(0, endOffset)
}

const extractEventName = (text) => {
    const lines = splitLines(text)

    for (let i = 0; i < lines.length - 1; i += 1) {
        if (!/Competitive Events Guidelines/i.test(lines[i])) continue

        for (let j = i + 1; j < Math.min(i + 6, lines.length); j += 1) {
            const candidate = lines[j]
            if (!candidate) continue
            if (/^\d{4}-\d{4}/.test(candidate)) continue
            if (/^Page\s+\d+/i.test(candidate)) continue
            if (/©/.test(candidate)) continue
            if (/National|State|District|Region|Section/i.test(candidate)) continue
            return candidate
        }
    }

    return "FBLA Competitive Event"
}

const extractEventSpecificInformation = (text) => {
    const marker = "Event Specific Information:"
    const blocks = []
    let startAt = 0

    while (true) {
        const start = text.indexOf(marker, startAt)
        if (start === -1) break

        const remainder = text.slice(start)
        const endings = [
            remainder.indexOf("Final Presentation Details"),
            remainder.indexOf("Scoring"),
            remainder.indexOf("Broadcast Journalism - Page"),
            remainder.indexOf("Presentation Rating Sheet"),
        ].filter((idx) => idx > marker.length)

        const end = endings.length ? Math.min(...endings) : remainder.length
        blocks.push(remainder.slice(0, end))
        startAt = start + marker.length
    }

    const lines = blocks
        .flatMap((block) => splitLines(block))
        .filter((line) => line.startsWith("•") || /^o\s+/i.test(line))
        .map((line) => line.replace(/^o\s+/i, "- "))

    return unique(lines)
}

const extractRoleplayFocusInformation = (text) => {
    const lines = text.split(/\r?\n/).map((line) => line.trim())
    const headingRegex = /^(Timing Structure|Role Play Prompt|Notecard Use|Materials|Interaction with Judges|Audience|Confidentiality|Electronic Devices|Penalty Points|Eligibility Requirements|Advancement to Finals|Event Participation Limits|Identification at Check-in|Late Arrivals|Event Schedule Notes|Event Administration|Required Competition Items)$/i
    const items = []
    let currentHeading = ""

    for (const line of lines) {
        if (!line) continue

        if (headingRegex.test(line)) {
            currentHeading = line
            continue
        }

        if (line.startsWith("•") || /^o\s+/i.test(line)) {
            const cleanedLine = line.replace(/^o\s+/i, "- ")
            if (currentHeading) {
                items.push(`${currentHeading}: ${cleanedLine}`)
            } else {
                items.push(cleanedLine)
            }
        }
    }

    return unique(items)
}

const extractExpectationItems = (text, eventName = "") => {
    const ratingBlock = findBlockBetween(
        text,
        "Presentation Rating Sheet",
        "Staff Only: Penalty Points"
    )

    if (!ratingBlock) return []

    const lines = splitLines(ratingBlock)
    const starters = /^(Present|Showcase|Demonstrates|Describe|Explain|Statements|Consistently|Adherence|Identifies|Displays|Communicates)\b/
    const excluded = new Set([
        "Expectation Item Not",
        "Demonstrated Below Expectations Meets Expectations Exceeds Expectations",
        "Earned",
        "Points",
        "Presentation",
        "Broadcast Journalism",
        "Presentation Delivery",
        "Presentation Protocols",
    ])

    const items = []

    for (let i = 0; i < lines.length; i += 1) {
        const line = lines[i]
        if (excluded.has(line)) continue
        if (/^\d/.test(line)) continue
        if (/points?$/i.test(line)) continue
        if (/^©|^202\d-|^Name\(s\):|^School:|^Judge Signature:|^Comments:/.test(line)) continue
        if (/Competitor\(s\)|Execution Aligned with Guidelines|Did Not Follow Guidelines/i.test(line)) continue
        if (eventName && line.toLowerCase() === eventName.toLowerCase()) continue

        const next = lines[i + 1] || ""

        if (starters.test(line)) {
            items.push(line)
            continue
        }

        if (starters.test(next) && /^[A-Z]/.test(line) && line.length <= 80) {
            items.push(line)
        }
    }

    return unique(items)
}

const parsePresentationGuide = (text) => {
    const source = typeof text === "string" ? text : ""
    const eventName = extractEventName(source)
    const ratingBlock = findRatingSheetBlock(source)

    return {
        eventName,
        expectationItems: extractExpectationItems(ratingBlock, eventName),
        eventSpecificInformation: extractEventSpecificInformation(source),
        rubricSection: ratingBlock,
    }
}

const parseRoleplayGuide = (text) => {
    const source = typeof text === "string" ? text : ""
    const eventName = extractEventName(source)
    const ratingBlock = findRatingSheetBlock(source)

    return {
        eventName,
        expectationItems: extractExpectationItems(ratingBlock, eventName),
        rubricSection: ratingBlock,
    }
}

const cleanRubricSection = (text, eventName = "") => {
    const lines = splitLines(text)
    const cleaned = lines.filter((line) => {
        if (/^©|^202\d-|^.+\s-\sPage\s\d+\sof\s\d+/i.test(line)) return false
        if (/^Name\(s\):|^School:|^Judge Signature:|^Date:|^Comments:/i.test(line)) return false
        if (eventName && line.toLowerCase() === eventName.toLowerCase()) return false
        return true
    })

    return unique(cleaned)
}

const getPresentationGuidePrompt = (parsed) => {
    const eventItemsText = parsed.eventSpecificInformation.length
        ? parsed.eventSpecificInformation.map((item) => `- ${item}`).join("\n")
        : "- (No event-specific items found)"

    const expectationItemsText = parsed.expectationItems.length
        ? parsed.expectationItems.map((item) => `- ${item}`).join("\n")
        : "- (No expectation items found)"

    const rubricLines = cleanRubricSection(parsed.rubricSection || "", parsed.eventName || "")
    const rubricText = rubricLines.length
        ? rubricLines.map((line) => `- ${line}`).join("\n")
        : "- (No rubric text found)"

    return `
You are generating FBLA ${parsed.eventName || "Competitive Event"} presentation study flashcards.

Create exactly ${amountOfPresentationFlashcards} flashcards using only the extracted information below.

Event-Specific Information:
${eventItemsText}

Expectation Items:
${expectationItemsText}

Rubric Details:
${rubricText}

Requirements:
- Return only comma-separated tuple entries in JavaScript array literal format.
- Return exactly ${amountOfPresentationFlashcards} tuple entries total.
- Each entry must be a 2-element array in this format: ["term", "definition"].
- Terms must be specific, not vague category labels.
- Definitions must be concise, accurate, and study-friendly.
- Include key rule-based cards about timing, allowed tech, restricted items, penalties, and eligibility.
- Include at least 24 challenge-style flashcards that are scenario-based application examples.
- For challenge flashcards, start the term with "Example:" and make the definition practical.
- Prioritize rubric-heavy topics and high-point criteria with proportionally more cards.
- Do not repeat terms or definitions.
- Do not include markdown, commentary, code fences, or extra text.
- Do not wrap entries in an outer array or object.
- Separate entries with commas so they can be pasted directly into an existing vocab array.
- At the end of the list, add one comma and then a newline, but do not add a closing bracket or semicolon.
- Output everything on one line.

Example format:
["Market Segmentation","Dividing a broad market into smaller groups with shared characteristics"],["Brand Loyalty","A consumer's consistent preference for one brand over competitors"],
    `
}

const getRoleplayGuidePrompt = (parsed) => {
    const eventName = parsed.eventName && parsed.eventName !== "FBLA Competitive Event"
        ? parsed.eventName
        : fblaEventName

    const rubricLines = cleanRubricSection(parsed.rubricSection || "", parsed.eventName || "")
    const rubricText = rubricLines.length
        ? rubricLines.map((line) => `- ${line}`).join("\n")
        : "- (No rubric text found)"

    return `
You are generating FBLA ${eventName || "Role Play Event"} role play study flashcards.

Create exactly ${amountOfPresentationFlashcards} flashcards using only the extracted information below.

Rubric Details:
${rubricText}

Requirements:
- Return only comma-separated tuple entries in JavaScript array literal format.
- Return exactly ${amountOfPresentationFlashcards} tuple entries total.
- Each entry must be a 2-element array in this format: ["term", "definition"].
- Terms must be specific, not vague category labels.
- Definitions must be concise, accurate, and study-friendly.
- Focus on rubric performance and practical role-play execution strategies.
- Weight the flashcards approximately 85% rubric criteria and 15% general role-play success tips.
- Include at least 36 challenge-style role-play scenario cards.
- For challenge flashcards, start the term with "Example:" and make the definition a practical best-response strategy.
- Include general role-play success tips (opening, empathy, problem framing, solution structure, conflict resolution, and closure).
- Do not repeat terms or definitions.
- Do not include markdown, commentary, code fences, or extra text.
- Do not wrap entries in an outer array or object.
- Separate entries with commas so they can be pasted directly into an existing vocab array.
- At the end of the list, add one comma and then a newline, but do not add a closing bracket or semicolon.
- Output everything on one line.

Example format:
["Active Listening","Repeating and clarifying a customer concern before offering a solution"],["Example: Late Shipment Escalation","Acknowledge frustration, verify order details, offer a concrete resolution timeline, and confirm satisfaction before closing"],
    `
}

const runPresentationGuideMode = async () => {
    const { sourceType } = await prompts({
        type: "select",
        name: "sourceType",
        message: "PresentationGuide input source",
        choices: [
            { title: "Use clipboard text", value: "clipboard" },
            { title: "Paste text manually", value: "manual" },
            { title: "Quit", value: "quit" },
        ],
    })

    if (!sourceType || sourceType === "quit") {
        return
    }

    let inputText = ""

    if (sourceType === "clipboard") {
        inputText = await readClipboard()
    } else {
        const { manualInput } = await prompts({
            type: "text",
            name: "manualInput",
            message: "Paste guideline text",
        })
        inputText = manualInput || ""
    }

    if (!inputText.trim()) {
        console.error("No input text was provided.")
        return
    }

    const parsed = parsePresentationGuide(inputText)
    const promptText = getPresentationGuidePrompt(parsed)
    const copiedPrompt = await copyToClipboard(promptText)

    console.clear()
    console.log("=== PresentationGuide: Expectation Items ===")
    if (parsed.expectationItems.length === 0) {
        console.log("(none found)")
    } else {
        parsed.expectationItems.forEach((item, index) => {
            console.log(`${index + 1}. ${item}`)
        })
    }

    console.log("\n=== PresentationGuide: Event Specific Information ===")
    if (parsed.eventSpecificInformation.length === 0) {
        console.log("(none found)")
    } else {
        parsed.eventSpecificInformation.forEach((item, index) => {
            console.log(`${index + 1}. ${item}`)
        })
    }

    console.log("\n=== PresentationGuide: Custom ChatGPT Prompt ===")
    if (copiedPrompt) {
        console.log("Prompt generated and copied to clipboard.")
    } else {
        console.log("Prompt generated, but clipboard copy failed.")
    }
    console.log("\nPrompt preview:\n")
    console.log(promptText)
}

const runRoleplayMode = async () => {
    const { sourceType } = await prompts({
        type: "select",
        name: "sourceType",
        message: "RoleplayMode input source",
        choices: [
            { title: "Use clipboard text", value: "clipboard" },
            { title: "Paste text manually", value: "manual" },
            { title: "Quit", value: "quit" },
        ],
    })

    if (!sourceType || sourceType === "quit") {
        return
    }

    let inputText = ""

    if (sourceType === "clipboard") {
        inputText = await readClipboard()
    } else {
        const { manualInput } = await prompts({
            type: "text",
            name: "manualInput",
            message: "Paste guideline text",
        })
        inputText = manualInput || ""
    }

    if (!inputText.trim()) {
        console.error("No input text was provided.")
        return
    }

    const parsed = parseRoleplayGuide(inputText)
    const promptText = getRoleplayGuidePrompt(parsed)
    const copiedPrompt = await copyToClipboard(promptText)

    console.clear()
    console.log("=== RoleplayMode: Expectation Items ===")
    if (parsed.expectationItems.length === 0) {
        console.log("(none found)")
    } else {
        parsed.expectationItems.forEach((item, index) => {
            console.log(`${index + 1}. ${item}`)
        })
    }

    const rubricLines = cleanRubricSection(parsed.rubricSection || "", parsed.eventName || "")
    console.log("\n=== RoleplayMode: Rubric Lines ===")
    console.log(rubricLines.length)

    console.log("\n=== RoleplayMode: Custom ChatGPT Prompt ===")
    if (copiedPrompt) {
        console.log("Prompt generated and copied to clipboard.")
    } else {
        console.log("Prompt generated, but clipboard copy failed.")
    }
    console.log("\nPrompt preview:\n")
    console.log(promptText)
}

const runFlashcardMode = async () => {
    const { sourceType } = await prompts({
        type: "select",
        name: "sourceType",
        message: "Flashcard input source",
        choices: [
            { title: "Use clipboard text", value: "clipboard" },
            { title: "Paste text manually", value: "manual" },
            { title: "Use built-in study guide", value: "builtin" },
            { title: "Quit", value: "quit" },
        ],
    })

    if (!sourceType || sourceType === "quit") {
        return
    }

    let inputText = ""

    if (sourceType === "clipboard") {
        inputText = await readClipboard()
    } else if (sourceType === "manual") {
        const { manualInput } = await prompts({
            type: "text",
            name: "manualInput",
            message: "Paste study guide text",
        })
        inputText = manualInput || ""
    } else {
        inputText = studyguide
    }

    if (!inputText.trim()) {
        console.error("No input text was provided.")
        return
    }

    let curIndex = 0;
    let split = buildNumberedItems(inputText);
    let lastCopied = "";

    if (!Array.isArray(split) || split.length === 0) {
        console.error("No study guide items were found.")
        return
    }

    while (curIndex < split.length) {
        const remaining = split.length - curIndex
        const stepSize = Math.min(AmountOfTerms, remaining)

        console.clear()
        if (lastCopied) {
            console.log("Last copied:\n" + lastCopied + "\n")
        }
        const preview = split.slice(curIndex, curIndex + stepSize).filter(Boolean)
        console.log(`Next lines ${curIndex}-${curIndex + preview.length - 1}/${split.length}:\n` + preview.join("\n") + "\n")

        const { action } = await prompts({
            type: "select",
            name: "action",
            message: "Choose action",
            choices: [
                { title: "Copy", value: "c" },
                { title: "Skip", value: "s" },
                { title: "Quit", value: "q" },
            ],
        })

        if (!action || action === "q") {
            return
        }

        if (action === "c") {
            const promptText = getPrompt(preview.join("\n"))
            const copied = await copyToClipboard(promptText)
            if (copied) {
                lastCopied = promptText
            } else {
                console.error("Failed to copy prompt to clipboard.")
            }
        }

        curIndex += action === "s" ? 1 : stepSize
    }
}

const run = async () => {
    const { mode } = await prompts({
        type: "select",
        name: "mode",
        message: "Choose mode",
        choices: [
            { title: "Flashcards", value: "flashcards" },
            { title: "PresentationGuide", value: "presentation-guide" },
            { title: "RoleplayMode", value: "roleplay-mode" },
            { title: "Quit", value: "quit" },
        ],
    })

    if (!mode || mode === "quit") {
        return
    }

    if (mode === "presentation-guide") {
        await runPresentationGuideMode()
        return
    }

    if (mode === "roleplay-mode") {
        await runRoleplayMode()
        return
    }

    await runFlashcardMode()
}

run()

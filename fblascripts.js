const prompts = require("prompts");

const presentationTitles = [ "Broadcast Journalism Presentation", "Business Ethics Presentation", "Business Plan Presentation", "Career Portfolio Presentation", "Coding & Programming Presentation", "Data Analysis Presentation", "Digital Animation Presentation", "Digital Video Production Presentation", "Event Planning Presentation", "Financial Planning Presentation", "Financial Statement Analysis Presentation", "Future Business Educator Presentation", "Future Business Leader Presentation", "Graphic Design Presentation", "Impromptu Speaking Presentation", "Job Interview Presentation", "Mobile Application Development Presentation", "Public Service Announcement Presentation", "Public Speaking Presentation", "Sales Presentation", "Social Media Strategies Presentation", "Supply Chain Management Presentation", "Visual Design Presentation", "Website Coding & Development Presentation", "Website Design Presentation" ];
const objectiveTestTitles = [ "Accounting Objective Test", "Advanced Accounting Objective Test", "Advertising Objective Test", "Agribusiness Objective Test", "Business Communication Objective Test", "Business Law Objective Test", "Computer Problem Solving Objective Test", "Cybersecurity Objective Test", "Data Science & AI Objective Test", "Economics Objective Test", "Healthcare Administration Objective Test", "Human Resource Management Objective Test", "Insurance & Risk Management Objective Test", "Journalism Objective Test", "Networking Infrastructures Objective Test", "Organizational Leadership Objective Test", "Personal Finance Objective Test", "Project Management Objective Test", "Public Administration & Management Objective Test", "Real Estate Objective Test", "Retail Management Objective Test", "Securities & Investments Objective Test" ]



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

const getBasicPresentationPrompt = (title) => {
  return `
You are generating FBLA ${title} study flashcards for competitive presentation preparation.

Create AT LEAST 250 flashcards (no maximum limit — more is encouraged if useful). Aim for breadth and depth across all categories.

==== CORE FORMAT REQUIREMENTS ====
- Return ONLY comma-separated tuple entries in JavaScript array literal format.
- Each entry must be a 2-element array: ["term", "definition"]
- Do NOT include markdown, commentary, labels, code fences, or wrapper arrays.
- Output should be parseable directly into a JavaScript array.
- Each flashcard ends with a comma and line break.

==== CONTENT STRUCTURE & CATEGORIES ====
Create flashcards distributed across these interconnected areas:

1. PRESENTATION ARCHITECTURE (20-30 cards)
   - Opening techniques (hook strategies, attention capture, problem setup)
   - Structure frameworks (3-act structure, pyramid principle, story arcs)
   - Transition strategies (bridging sections, building momentum, narrative flow)
   - Closing techniques (calls-to-action, impact statements, judge impression)
   - Time management within sections

2. SLIDE DESIGN & VISUAL PRESENTATION (25-35 cards)
   - Typography hierarchy (font choices, sizing, readability at distance)
   - Color psychology and contrast (background/foreground ratios, accessibility)
   - Layout principles (rule of thirds, whitespace, visual balance)
   - Consistency standards (logo placement, color palettes, design systems)
   - Chart/graph best practices (data visualization, avoiding clutter)
   - Image selection and optimization (relevance, resolution, licensing)

3. PUBLIC SPEAKING EXECUTION (30-40 cards)
   - Voice modulation (pace variation, emphasis, volume control, pausing)
   - Projection and vocal clarity (enunciation, breathing, microphone technique)
   - Pacing strategies (avoiding rushing, strategic slow-downs, pacing peaks)
   - Delivery confidence (eye contact patterns, hand gestures, movement)
   - Energy management (opening energy, maintaining momentum, closing intensity)

4. BODY LANGUAGE & PRESENCE (20-30 cards)
   - Posture and positioning (standing authority, symmetry, stage positioning)
   - Hand and arm gestures (purposeful movement, gesture types, gesture placement)
   - Facial expressions (authenticity, smile timing, expression variety)
   - Movement patterns (walking direction, stance shifts, physical transitions)
   - Proxemics (distance from screen, interaction zones, judge engagement distance)

5. CONTENT STRATEGY (30-40 cards)
   - Story integration (narrative hooks, case studies, personal anecdotes)
   - Data presentation (statistics usage, proof points, evidence ordering)
   - Problem-solution framework (challenge framing, solution positioning, value proposition)
   - Evidence hierarchy (primary vs. supporting points, emphasis allocation)
   - Relevance messaging (connecting features to judge priorities)

6. AUDIENCE ENGAGEMENT & PSYCHOLOGY (25-35 cards)
   - Judge expectations (scoring rubric alignment, competitive context awareness)
   - Attention dynamics (recapturing attention, cognitive load management)
   - Persuasion principles (credibility building, social proof, reciprocity)
   - Objection anticipation (addressing concerns proactively)
   - Q&A mastery (question types, response frameworks, judge handling)

7. PROFESSIONALISM & COMPETITIVE CONTEXT (15-25 cards)
   - Dress code execution (region-appropriate professional appearance)
   - Etiquette standards (judge interaction, timing respect, rule compliance)
   - Technical professionalism (AV troubleshooting, backup plans, equipment checks)
   - Competitive psychology (handling pressure, confidence projection, resilience)

8. COMMON MISTAKES & PITFALLS (20-30 cards)
   - Design errors (crowded slides, inconsistent branding, poor contrast)
   - Delivery failures (filler words, monotone delivery, lost pacing)
   - Content mistakes (irrelevant details, unsupported claims, weak data)
   - Timing violations (running over, rushing through key points)
   - Recovery techniques (handling mistakes, adapting mid-presentation)

9. ADVANCED & COMPETITIVE TECHNIQUES (20-30 cards)
   - Judge impression management (anticipating scoring criteria, strategic emphasis)
   - Differentiation strategies (standing out from competitors memorably)
   - Storytelling depth (creating emotional resonance, narrative sophistication)
   - Advanced persuasion (rhetorical patterns, strategic vulnerability, aspirational positioning)
   - Competition-specific strategies (regional/national level nuances)

10. PREPARATION & PRACTICE METHODS (15-25 cards)
    - Rehearsal strategies (deliberate practice, timed rehearsals, feedback loops)
    - Memorization techniques (scripting vs. extemporaneous, key phrase anchoring)
    - Stress management (pre-presentation routines, confidence building)
    - Feedback integration (peer review, self-recording analysis)

==== SKILL LEVEL DISTRIBUTION ====
Ensure representation across difficulty levels:
- BEGINNER (30%): Foundational principles, basic techniques, essential concepts
- INTERMEDIATE (45%): Applied strategies, nuanced execution, competitive advantages
- ADVANCED (25%): Expert-level optimization, advanced psychology, championship-level refinement

==== QUALITY STANDARDS ====
Each flashcard must meet these criteria:

TERM QUALITY:
- 3–8 words maximum (concise, scannable, specific)
- Should be a concrete concept, technique, or principle—not vague
- Avoid generic labels; use specific, actionable language
- Use parallel structure when possible (e.g., "Noun + Adjective" pattern)

DEFINITION QUALITY:
- 1–2 sentences maximum (concise yet complete)
- Actionable: "How do I use this?" should be answerable
- Specific: Reference concrete techniques, numbers, or examples (not vague advice)
- Practical: Include a "why" or "what effect" element
- Avoid repetition: No definition should duplicate another's core concept

CONTENT QUALITY:
- Each flashcard represents UNIQUE information—no near-duplicates
- No generic motivational statements ("Be confident," "Try your best")
- Every flashcard should be applicable to FBLA competitive judging standards
- Prioritize competition-relevant knowledge over general speaking advice
- Include nuances competitors actually debate (e.g., hand gesture timing, color contrast ratios)

==== FORMATTING & EXAMPLES ====
Correct format (all on one line per entry, comma-separated):
["Opening Statistical Hook", "Lead with a surprising statistic that directly challenges judges' assumptions about your topic's importance."],["Color Contrast Minimum", "Ensure text and background have at least 4.5:1 contrast ratio for readability from 20+ feet away."],["Strategic Pause Pattern", "Pause for 2-3 seconds after key claims to let judges absorb impact rather than rushing to next point."],

EXAMPLE CARDS (reference quality):
["Rule of Thirds Grid", "Position key visual elements at intersection points of an imaginary 3x3 grid to create natural visual balance."],
["Vocal Emphasis Technique", "Drop pitch slightly and increase volume on key competitive advantages to signal importance to judges."],
["Example: Technical Recovery", "If AV fails, pause confidently, reference backup slides on paper, and continue with authority to minimize judge perception of chaos."],
["Recency Bias Strategy", "End presentation with your strongest competitive differentiator to ensure judges' final impression favors your entry."],

Now generate all flashcards for FBLA ${title}. Output ONLY the flashcard tuples, one per line, comma-separated.
`
}

const getBasicObjectiveTestPrompt = (title, batchNumber = 4) => {
    return `
You are generating a portion of a realistic FBLA ${title} Objective Test.

This is batch ${batchNumber} of 4. Each batch must contain EXACTLY 25 unique multiple-choice questions.
Across all 4 batches, there will be 100 total questions with no duplicates.

==== OUTPUT FORMAT (STRICT) ====
Return ONLY a single JavaScript object matching this TypeScript interface:

{
    title: string,
    questions: [
        {
            id: string,
            question: string,
            options: string[],
            correctAnswerIndex: number,
            explanation: string,
            difficulty: "easy" | "medium" | "hard",
            category?: string
        }
    ]
}

- Do NOT include markdown, comments, or extra text.
- Output must be directly parseable JSON/JavaScript.
- The "title" must be "FBLA ${title} Practice Test - Batch ${batchNumber}".
- Generate exactly 25 questions.

==== FIELD RULES ====
- id: must be globally unique across batches
  - Use format: "q${batchNumber}_1" → "q${batchNumber}_25"
- question: clear, professional multiple-choice question
- options: exactly 4 answer choices (NO "A.", "B.", etc.)
- correctAnswerIndex: number from 0–3 matching the correct option
- explanation: 1–2 sentence explanation
- difficulty distribution per batch:
  - 6 easy
  - 13 medium
  - 6 hard
- category (optional but encouraged): short topic label

==== CONTENT REQUIREMENTS ====
- Use realistic FBLA ${title} topics and standards
- Cover a wide range of subtopics across batches
- Include:
  - Definitions and fundamentals
  - Applied business scenarios
  - Decision-making and analysis
  - Laws, regulations, and ethics (if applicable)
  - Calculations or metrics (if applicable)
- Include at least 8 scenario-based questions starting with "Example:"

==== QUALITY RULES ====
- No duplicate or near-duplicate questions within this batch OR across batches
- Make distractors realistic and competitive
- Mix straightforward and tricky wording
- Keep questions aligned with FBLA exam style

==== IMPORTANT ====
This batch must introduce NEW questions that would not overlap with other batches.
Assume other batches will cover different angles of the same topic.

Now generate batch ${batchNumber}.
Output ONLY the JavaScript object.
    `
}

const slugifyResourceId = (title) => {
    return String(title || "")
        .toLowerCase()
        .replace(/&/g, " and ")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "")
}

const getFBLAResourceObjectTemplate = (fblaEventName) => {
    return `
You are generating high-quality FBLA study resources for the event: ${fblaEventName}.

You MUST use external knowledge and real-world sources. Do NOT invent or guess links.
Only include real, accurate, and relevant resources that actually exist.

Your task is to create a fully populated JavaScript object entry that fits into an FBLAResources array.

==== OUTPUT FORMAT (STRICT) ====
Return ONLY the object inside the array (do NOT include the export wrapper).

Format exactly like this:
resources: {
        title: "${fblaEventName} Resources",
        links: [
            {
                title: "Resource title",
                url: "https://..."
            }
        ],
        aiPrompts: [
            {
                title: "Prompt title",
                prompt: "Prompt text"
            }
        ]
    }

==== REQUIREMENTS ====

ID:
- Convert "${fblaEventName}" into kebab-case (example: "Accounting Objective Test" → "accounting-objective-test")

LINKS (RESEARCH REQUIRED):
- Include 20 high-quality, REAL resources from external knowledge and do research
- In addition to the 20 links, include more links from QUizlet that directly talk about ${fblaEventName} topics (but do NOT include generic Quizlet homepages), and also include the search query to include "fbla" in the search to ensure relevance
- DO NOT fabricate URLs
- Prioritize:
  - Trusted educational sites (Investopedia, Khan Academy, Coursera, etc.)
  - Official organizations (government, standards boards, etc.)
  - Well-known learning platforms
- Links must go to relevant content pages (not generic homepages unless necessary)
- Each link must have a clear, specific, accurate title

AI PROMPTS:
- Prompts must be highly useful for studying and practice
- Include:
  1. One full-length multiple-choice practice test (20–50 questions)
  2. One adaptive or weakness-based coaching prompt
- Prompts must reference real FBLA-style topics for "${fblaEventName}"
- Make prompts detailed enough to produce high-quality outputs

CONTENT QUALITY:
- Make everything specific to "${fblaEventName}"
- Cover a wide range of relevant topics within the event
- Avoid vague or generic wording

STRICT RULES:
- Do NOT include markdown, explanations, or extra text
- Do NOT wrap in an array or export statement
- Do NOT include code fences
- Output must be valid JavaScript object syntax
- End the object with a comma

If you are unsure about a resource, do NOT include it.

Example style:

        title: "Example Event Resources",
        links: [
            {
                title: "Example Source",
                url: "https://example.com"
            }
        ],
        aiPrompts: [
            {
                title: "Practice test",
                prompt: "Create a 30-question..."
            }
        ]

    `
}

const runFBLAResourceObjectBuilderMode = async () => {
    const { title } = await prompts({
        type: "text",
        name: "title",
        message: "Enter FBLA event title",
        validate: (value) => (String(value || "").trim() ? true : "Title is required"),
    })

    if (!title) {
        return
    }

    const objectTemplate = getFBLAResourceObjectTemplate(title)
    const copied = await copyToClipboard(objectTemplate)

    console.clear()
    console.log("=== FBLA Resource Object Builder ===")
    if (copied) {
        console.log("Resource object copied to clipboard.\n")
    } else {
        console.log("Resource object generated, but clipboard copy failed.\n")
    }
    console.log(objectTemplate)
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

const runPresentationTitlesPromptMode = async () => {
    if (!Array.isArray(presentationTitles) || presentationTitles.length === 0) {
        console.error("No presentation titles found.")
        return
    }

    let curIndex = 0
    let lastCopied = ""

    while (curIndex < presentationTitles.length) {
        const title = presentationTitles[curIndex]
        const promptText = getBasicPresentationPrompt(title)

        console.clear()
        if (lastCopied) {
            console.log("Last copied:\n" + lastCopied + "\n")
        }

        console.log(`Title ${curIndex + 1}/${presentationTitles.length}: ${title}\n`)

        const { action } = await prompts({
            type: "select",
            name: "action",
            message: "Choose action",
            choices: [
                { title: "Copy basic prompt", value: "c" },
                { title: "Skip", value: "s" },
                { title: "Quit", value: "q" },
            ],
        })

        if (!action || action === "q") {
            return
        }

        if (action === "c") {
            const copied = await copyToClipboard(promptText)
            if (copied) {
                lastCopied = promptText
            } else {
                console.error("Failed to copy prompt to clipboard.")
            }
        }

        curIndex += 1
    }
}

const runObjectiveTestTitlesPromptMode = async () => {
    if (!Array.isArray(objectiveTestTitles) || objectiveTestTitles.length === 0) {
        console.error("No objective test titles found.")
        return
    }

    let curIndex = 0
    let lastCopied = ""

    while (curIndex < objectiveTestTitles.length) {
        const title = objectiveTestTitles[curIndex]
        const promptText = getBasicObjectiveTestPrompt(title)

        console.clear()
        if (lastCopied) {
            console.log("Last copied:\n" + lastCopied + "\n")
        }

        console.log(`Title ${curIndex + 1}/${objectiveTestTitles.length}: ${title}\n`)

        const { action } = await prompts({
            type: "select",
            name: "action",
            message: "Choose action",
            choices: [
                { title: "Copy objective test prompt", value: "c" },
                { title: "Skip", value: "s" },
                { title: "Quit", value: "q" },
            ],
        })

        if (!action || action === "q") {
            return
        }

        if (action === "c") {
            const copied = await copyToClipboard(promptText)
            if (copied) {
                lastCopied = promptText
            } else {
                console.error("Failed to copy prompt to clipboard.")
            }
        }

        curIndex += 1
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
            { title: "PresentationTitlesPrompts", value: "presentation-titles-prompts" },
            { title: "ObjectiveTestTitlesPrompts", value: "objective-test-titles-prompts" },
            { title: "FBLAResourceObjectBuilder", value: "fbla-resource-object-builder" },
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

    if (mode === "presentation-titles-prompts") {
        await runPresentationTitlesPromptMode()
        return
    }

    if (mode === "objective-test-titles-prompts") {
        await runObjectiveTestTitlesPromptMode()
        return
    }

    if (mode === "fbla-resource-object-builder") {
        await runFBLAResourceObjectBuilderMode()
        return
    }

    await runFlashcardMode()
}

run()

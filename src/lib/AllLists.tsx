import { Briefcase, Goal, Languages } from "lucide-react";
import { ComponentType, SVGProps } from "react";
import { CustomMessageForFlashcardSet } from "./AllSets";
import { Button } from "@/components/ui/button";

const HosaLogoIcon = (props: SVGProps<SVGSVGElement>) => {
    return (
        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <circle cx="32" cy="32" r="30" fill="currentColor" opacity="0.12" />
            <circle cx="32" cy="32" r="24" stroke="currentColor" strokeWidth="2.5" />
            <path
                d="M20 22L32 16L44 22V31C44 40.2 38.8 46.9 32 50C25.2 46.9 20 40.2 20 31V22Z"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinejoin="round"
            />
            <text
                x="32"
                y="34"
                textAnchor="middle"
                fill="currentColor"
                fontSize="9"
                fontWeight="700"
                fontFamily="ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif"
                letterSpacing="0.8"
            >
                HOSA
            </text>
        </svg>
    )
}

export interface List {
    id: string;
    title: string;
    description: string;
    icon: ComponentType<SVGProps<SVGSVGElement>>;
    shortNamePerSet: string;
    sets: string[] // Array of set IDs
}

export const AllLists: List[] = [
    {
        id: "fbla",
        title: "FBLA Roleplay + Presentation + Objective Tests Study Guide",
        description: "A comprehensive study guide for FBLA competitions, including roleplay scenarios, presentation tips, and objective test questions inspired by the given study guide on the rubric. Disclaimer: This content is unofficial and is not endorsed, sponsored, or affiliated with FBLA. Any limited use of copyrighted references is claimed under fair use for educational and noncommercial practice. These sets were created using AI.",
        icon: Briefcase,
        shortNamePerSet: "FBLA",
        sets: [
            "accounting-objective-test",
            "advanced-accounting-objective-test",
            "advertising-objective-test",
            "agribusiness-objective-test",
            "banking-and-financial-systems-role-play",
            "broadcast-journalism-presentation",
            "business-communication-objective-test",
            "business-ethics-presentation",
            "business-law-objective-test",
            "business-management-role-play",
            "business-plan-presentation",
            "career-portfolio-presentation",
            "coding-and-programming-presentation",
            "community-service-project",
            "computer-applications",
            "computer-game-and-simulation-programming",
            "computer-problem-solving-objective-test",
            "customer-service-role-play",
            "cybersecurity-objective-test",
            "data-analysis-presentation",
            "data-science-and-ai-objective-test",
            "digital-animation-presentation",
            "digital-video-production-presentation",
            "economics-objective-test",
            "entrepreneurship-role-play",
            "event-planning-presentation",
            "financial-planning-presentation",
            "financial-statement-analysis-presentation",
            "future-business-educator-presentation",
            "future-business-leader-presentation",
            "graphic-design-presentation",
            "healthcare-administration-objective-test",
            "hospitality-and-event-management-role-play",
            "human-resource-management-objective-test",
            "impromptu-speaking-presentation",
            "insurance-and-risk-management-objective-test",
            "international-business-role-play",
            "job-interview-presentation",
            "journalism-objective-test",
            "management-information-systems-role-play",
            "marketing-role-play",
            "mobile-application-development-presentation",
            "network-design-role-play",
            "networking-infrastructures-objective-test",
            "organizational-leadership-objective-test",
            "parliamentary-procedure-role-play",
            "personal-finance-objective-test",
            "project-management-objective-test",
            "public-administration-and-management-objective-test",
            "public-service-announcement-presentation",
            "public-speaking-presentation",
            "real-estate-objective-test",
            "retail-management-objective-test",
            "sales-presentation",
            "securities-and-investments-objective-test",
            "social-media-strategies-presentation",
            "sports-and-entertainment-management-role-play",
            "supply-chain-management-presentation",
            "technology-support-and-services-role-play",
            "visual-design-presentation",
            "website-coding-and-development-presentation",
            "website-design-presentation",
        ]
    },
    {
        id: "ap-esp",
        title: "AP Spanish Language and Culture",
        description: "A comprehensive study guide for AP Spanish Language and Culture practice. Disclaimer: This content is unofficial and is not endorsed, sponsored, or affiliated with the College Board or the AP Program. These AP sets are practice-format materials only and are designed to simulate what the real AP exam can feel like for study purposes; they do not provide official AP exam credit or outcomes. Any limited use of referenced exam-style structure is claimed under fair use for educational and noncommercial practice. These sets were created using AI.",
        icon: Languages,
        shortNamePerSet: "AP Spanish",
        sets: [
            "ap-esp-multiple-choice",
            "ap-esp-multiple-choice-with-audio",
            "ap-esp-free-response-written-essay",
            "ap-esp-free-response-written-email",
            "ap-esp-presentational-speaking",
            "ap-esp-interpersonal-speaking"
        ]
    },
    {
        id: "hosa",
        title: "HOSA Roleplay + Presentation + Objective Tests Study Guide",
        description: "A comprehensive study guide for HOSA competitions, including roleplay scenarios, presentation tips, and objective test questions inspired by the given study guide on the rubric. Disclaimer: This content is unofficial and is not endorsed, sponsored, or affiliated with HOSA. Any limited use of copyrighted references is claimed under fair use for educational and noncommercial practice. These sets were created using AI.",
        icon: HosaLogoIcon,
        shortNamePerSet: "HOSA",
        sets: [
            "hosa-emergency-medical-technician"
        ]
    }
]

export const getListSetIds = (listId: string): string[] => {
    return AllLists.find((list) => list.id === listId)?.sets ?? []
}

export const isSetInList = (listId: string, setId: string): boolean => {
    return AllLists.find((list) => list.id === listId)?.sets.includes(setId) ?? false
}

export const isSetInAnyList = (setId: string): boolean => {
    return AllLists.some((list) => list.sets.includes(setId))
}

export const getShortNameForSet = (listId: string): string => {
    return AllLists.find((list) => list.id === listId)?.shortNamePerSet ?? ""
}

export const getShortNameFromSetFromId = (setId: string): string => {
    const list = isSetInAnyList(setId) ? AllLists.find((list) => list.sets.includes(setId)) : undefined
    return list ? list.shortNamePerSet : ""
}


export const AllCustomMessagesForFlashcardSets: CustomMessageForFlashcardSet[] = [
    {
        setId: "ap-esp-free-response-written-essay",
        message: () => {
            return <p className="bg-[#fbae25] w-[42vw] flex flex-row items-center justify-center text-white font-semibold shadow-xl p-4 px-auto rounded-4xl text-center mx-auto" >
                ¿Estás buscando la prueba del ensayo escrito? ¡Ven aquí!
                <Button className="ml-2 rounded-full text-white light:text-black" variant={"secondary"} ><Goal/>Vamonos</Button>
            </p>
        }
    },
    {
        setId: "ap-esp-free-response-written-email",
        message: () => {
            return <p className="bg-[#fbae25] w-[42vw] flex flex-row items-center justify-center text-white font-semibold shadow-xl p-4 px-auto rounded-4xl text-center mx-auto" >
                ¿Estás buscando la prueba del correo escrito? ¡Ven aquí!
                <Button className="ml-2 rounded-full text-white light:text-black" variant={"secondary"} ><Goal/>Vamonos</Button>
            </p>
        }
    }
]
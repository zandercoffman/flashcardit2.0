import { ArrowBigLeft, Briefcase, Goal, Languages, LucideIcon } from "lucide-react";
import { CustomMessageForFlashcardSet } from "./AllSets";
import { Button } from "@/components/ui/button";

export interface List {
    id: string;
    title: string;
    description: string;
    icon: LucideIcon;
    shortNamePerSet: string;
    sets: string[] // Array of set IDs
}

export const AllLists: List[] = [
    {
        id: "fbla",
        title: "FBLA Roleplay + Presentation + Objective Tests Study Guide",
        description: "A comprehensive study guide for FBLA competitions, including roleplay scenarios, presentation tips, and objective test questions inspired by the given study guide on the rubric.",
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
        description: "A comprehensive study guide for the AP Spanish Language and Culture exam, covering all the key topics and skills needed to succeed on the test.",
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
                <Button className="ml-2 rounded-full text-black" variant={"secondary"} ><Goal/>Vamonos</Button>
            </p>
        }
    }
]
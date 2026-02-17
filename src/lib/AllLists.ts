import { Briefcase, LucideIcon, PiggyBank } from "lucide-react";

export interface List {
    id: string;
    title: string;
    description: string;
    icon: LucideIcon;
    sets: {
        id: string;
        extraInfo?: string;
    }[] // Array of set IDs
}

export const AllLists: List[] = [
    {
        id: "fbla",
        title: "FBLA Roleplay + Presentation + Objective Tests Study Guide",
        description: "A comprehensive study guide for FBLA competitions, including roleplay scenarios, presentation tips, and objective test questions inspired by the given study guide on the rubric.",
        icon: Briefcase,
        sets: [
            { id: "accounting-objective-test" },
            { id: "advanced-accounting-objective-test" },
            { id: "advertising-objective-test" },
            { id: "agribusiness-objective-test" },
            { id: "banking-and-financial-systems-role-play" },
            { id: "broadcast-journalism-presentation" },
            { id: "business-communication-objective-test" },
            { id: "business-ethics-presentation" },
            { id: "business-law-objective-test" },
            { id: "business-management-role-play" },
            { id: "business-plan-presentation" },
            { id: "career-portfolio-presentation" },
            { id: "coding-and-programming-presentation" },
            { id: "community-service-project" },
            { id: "computer-applications" },
            { id: "computer-game-and-simulation-programming" },
            { id: "computer-problem-solving-objective-test" },
            { id: "customer-service-role-play" },
            { id: "cybersecurity-objective-test" },
            { id: "data-analysis-presentation" },
            { id: "data-science-and-ai-objective-test" },
            { id: "digital-animation-presentation" },
            { id: "digital-video-production-presentation" },
            { id: "economics-objective-test" },
            { id: "entrepreneurship-role-play" },
            { id: "event-planning-presentation" },
            { id: "financial-planning-presentation" },
            { id: "financial-statement-analysis-presentation" },
            { id: "future-business-educator-presentation" },
            { id: "future-business-leader-presentation" },
            { id: "graphic-design-presentation" },
            { id: "healthcare-administration-objective-test" },
            { id: "hospitality-and-event-management-role-play" },
            { id: "human-resource-management-objective-test" },
            { id: "impromptu-speaking-presentation" },
            { id: "insurance-and-risk-management-objective-test" },
            { id: "international-business-role-play" },
            { id: "job-interview-presentation" },
            { id: "journalism-objective-test" },
            { id: "management-information-systems-role-play" },
            { id: "marketing-role-play" },
            { id: "mobile-application-development-presentation" },
            { id: "network-design-role-play" },
            { id: "networking-infrastructures-objective-test" },
            { id: "organizational-leadership-objective-test" },
            { id: "parliamentary-procedure-role-play" },
            { id: "personal-finance-objective-test" },
            { id: "project-management-objective-test" },
            { id: "public-administration-and-management-objective-test" },
            { id: "public-service-announcement-presentation" },
            { id: "public-speaking-presentation" },
            { id: "real-estate-objective-test" },
            { id: "retail-management-objective-test" },
            { id: "sales-presentation" },
            { id: "securities-and-investments-objective-test" },
            { id: "social-media-strategies-presentation" },
            { id: "sports-and-entertainment-management-role-play" },
            { id: "supply-chain-management-presentation" },
            { id: "technology-support-and-services-role-play" },
            { id: "visual-design-presentation" },
            { id: "website-coding-and-development-presentation" },
            { id: "website-design-presentation" },
        ]
    }
]

export const getListSetIds = (listId: string): string[] => {
    return AllLists.find((list) => list.id === listId)?.sets.map((set) => set.id) ?? []
}

export const isSetInList = (listId: string, setId: string): boolean => {
    return AllLists.find((list) => list.id === listId)?.sets.some((set) => set.id === setId) ?? false
}


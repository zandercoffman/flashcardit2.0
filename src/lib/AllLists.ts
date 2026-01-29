import { Briefcase, LucideIcon, PiggyBank } from "lucide-react";

export interface List {
    id: string;
    title: string;
    description: string;
    icon: LucideIcon;
    sets: {
        id: string;
        icon: LucideIcon;
    }[] // Array of set IDs
}

export const AllLists: List[] = [
    {
        id: "fbla",
        title: "FBLA Roleplay + Presentation + Objective Tests Study Guide",
        description: "A comprehensive study guide for FBLA competitions, including roleplay scenarios, presentation tips, and objective test questions.",
        icon: Briefcase,
        sets: [
            { id: "ap-esp-tenses-1", icon: PiggyBank }
        ],
    }
]


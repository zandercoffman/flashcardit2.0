import { LucideIceCreamCone } from "lucide-react";
import { ComponentType } from "react";
import { APESPModes } from "./APESP/APESP";

export interface CustomMode {
    title: string;
    id: string;
    miniShowcaseColor: string;
    miniShowcaseText: string;
    miniShowcaseTextColor: string;
    miniShowcaseIcon: typeof LucideIceCreamCone;
    component: ComponentType;
}

export const AllCustomModes: CustomMode[] = [
    ...APESPModes
]
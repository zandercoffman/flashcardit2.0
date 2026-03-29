"use client"

import {
    ListChecks,
    Headphones,
    Mail,
    FileText,
    MessageCircle,
    Mic
} from "lucide-react";
import { CustomMode } from "../interface";
import APESPArgEssay from "./APESPArgEssay";
import APESPEssay from "./APESPEmail";

function MultipleChoiceModeComponent() {
    return <div>AP Spanish Language and Culture Multiple Choice</div>;
}

function MultipleChoiceWithAudioModeComponent() {
    return <div>AP Spanish Language and Culture Multiple Choice with Audio</div>;
}

function InterpersonalSpeakingModeComponent() {
    return <div>AP Spanish Language and Culture Interpersonal Speaking</div>;
}

function PresentationalSpeakingModeComponent() {
    return <div>AP Spanish Language and Culture Presentational Speaking</div>;
}

export const APESPModes: CustomMode[] = [
    {
        title: "AP Spanish Language and Culture Multiple Choice",
        id: "ap-esp-multiple-choice",
        miniShowcaseColor: "#fbae25",
        miniShowcaseText: "Multiple Choice",
        miniShowcaseTextColor: "text-white",
        miniShowcaseIcon: ListChecks,
        component: MultipleChoiceModeComponent
    },
    {
        title: "AP Spanish Language and Culture Multiple Choice with Audio",
        id: "ap-esp-multiple-choice-with-audio",
        miniShowcaseColor: "#fbae25",
        miniShowcaseText: "Multiple Choice with Audio",
        miniShowcaseTextColor: "text-white",
        miniShowcaseIcon: Headphones,
        component: MultipleChoiceWithAudioModeComponent
    },
    {
        title: "AP Spanish Language and Culture Free Response Written Email",
        id: "ap-esp-free-response-written-email",
        miniShowcaseColor: "#fbae25",
        miniShowcaseText: "Written Email",
        miniShowcaseTextColor: "text-white",
        miniShowcaseIcon: Mail,
        component: APESPEssay
    },
    {
        title: "AP Spanish Language and Culture Free Response Written Essay",
        id: "ap-esp-free-response-written-essay",
        miniShowcaseColor: "#fbae25",
        miniShowcaseText: "Written Essay",
        miniShowcaseTextColor: "text-white",
        miniShowcaseIcon: FileText,
        component: APESPArgEssay
    },
    {
        title: "AP Spanish Language and Culture Interpersonal Speaking",
        id: "ap-esp-interpersonal-speaking",
        miniShowcaseColor: "#fbae25",
        miniShowcaseText: "Interpersonal Speaking",
        miniShowcaseTextColor: "text-white",
        miniShowcaseIcon: MessageCircle,
        component: InterpersonalSpeakingModeComponent
    },
    {
        title: "AP Spanish Language and Culture Presentational Speaking",
        id: "ap-esp-presentational-speaking",
        miniShowcaseColor: "#fbae25",
        miniShowcaseText: "Presentational Speaking",
        miniShowcaseTextColor: "text-white",
        miniShowcaseIcon: Mic,
        component: PresentationalSpeakingModeComponent
    }
];
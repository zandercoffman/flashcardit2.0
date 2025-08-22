// TTSSettings.tsx
import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Toggle } from "@/components/ui/toggle";
import { Settings2, Volume2, VolumeX, Megaphone } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { ComboboxDemo } from "./combobox";

interface TTSSettingsProps {
    ttsEnabledKey: string;
    firstVoiceKey: string;
    secondVoiceKey: string;
}

export function TTSSettings({ ttsEnabledKey, firstVoiceKey, secondVoiceKey }: TTSSettingsProps) {
    const [useTTS, setUseTTS] = useState<boolean>(false);
    const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);

    useEffect(() => {
        // Load TTS enabled from localStorage on mount
        const storedTTS = localStorage.getItem(ttsEnabledKey);
        if (storedTTS !== null) {
            setUseTTS(JSON.parse(storedTTS));
        }

        // Load voices from speechSynthesis
        const loadVoices = () => {
            const synthVoices = window.speechSynthesis.getVoices();
            setVoices(synthVoices);
        };

        if (typeof window !== "undefined") {
            if (speechSynthesis.onvoiceschanged !== undefined) {
                speechSynthesis.onvoiceschanged = loadVoices;
            }
            loadVoices();
        }
    }, [ttsEnabledKey]);

    useEffect(() => {
        // Store TTS enabled state in localStorage on change
        sessionStorage.setItem(ttsEnabledKey, JSON.stringify(useTTS));
    }, [useTTS, ttsEnabledKey]);

    return (
        <div className="flex flex-row gap-2 justify-between items-center rounded-lg border p-3 shadow-sm">
            <div className="flex flex-col gap-10 w-full">
                <div className="flex flex-row gap-2 w-full justify-between ">
                    <span className="flex flex-row gap-4 justify-center items-center text-md">
                        {useTTS ? <Volume2 /> : <VolumeX />}
                        Text To Speech SI
                    </span>
                    <Switch
                        checked={useTTS}
                        onClick={(e) => e.stopPropagation()}
                        onCheckedChange={(checked) => setUseTTS(checked)}
                    />
                </div>

                <div className="flex flex-row gap-3 w-full justify-between items-center">
                    <div className="flex flex-col gap-2 items-center">
                        <Megaphone className="size-10" />
                        <span>First Voice</span>
                        <ComboboxDemo localS={firstVoiceKey} voices={voices} />
                    </div>

                    <div className="flex flex-col gap-2 items-center">
                        <Megaphone className="size-10" />
                        <span>Second Voice</span>
                        <ComboboxDemo localS={secondVoiceKey} voices={voices} />
                    </div>
                </div>
            </div>
        </div>
    );
}

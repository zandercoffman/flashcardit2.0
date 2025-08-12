export interface Language {
    language: string; // Display name of the language
    code: string;     // Locale code like "en-US"
  }
  
  export const languages: Language[] = [
    { language: "English (United States)", code: "en-US" },
    { language: "English (United Kingdom)", code: "en-GB" },
    { language: "Spanish (Spain)", code: "es-ES" },
    { language: "Spanish (United States)", code: "es-US" },
    { language: "French", code: "fr-FR" },
    { language: "German", code: "de-DE" },
    { language: "Hindi", code: "hi-IN" },
    { language: "Indonesian", code: "id-ID" },
    { language: "Italian", code: "it-IT" },
    { language: "Japanese", code: "ja-JP" },
    { language: "Korean", code: "ko-KR" },
    { language: "Dutch", code: "nl-NL" },
    { language: "Polish", code: "pl-PL" },
    { language: "Portuguese (Brazil)", code: "pt-BR" },
    { language: "Russian", code: "ru-RU" },
    { language: "Chinese (Mainland)", code: "zh-CN" },
    { language: "Cantonese (Hong Kong)", code: "zh-HK" },
    { language: "Mandarin (Taiwan)", code: "zh-TW" }
  ];
  
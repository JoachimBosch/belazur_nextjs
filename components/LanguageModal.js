"use client"

import { useEffect, useContext, useState } from "react";
import MyContext from "@/app/context-provider";

export default function LanguageModal() {
    const { language, setLanguage, text } = useContext(MyContext);
    const [showLanguageModal, setShowLanguageModal] = useState(false);

    useEffect(() => {
        const hasSelectedLanguage = localStorage.getItem("selectedLanguage");
        if (
            !document.cookie.includes("cookieConsent=true") &&
            !hasSelectedLanguage
        ) {
            setShowLanguageModal(true);
        }
    }, []);

    if (!showLanguageModal) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-md z-[10000]">
            <div className="languageModal">
                <h1 className="mb-0 mx-2 text-belazurblue">
                    {text[language].navbarLanguage}
                </h1>
                <div className="flex justify-evenly pt-4 language-links">
                    <button
                        onClick={() => {
                            setLanguage("french");
                            localStorage.setItem("selectedLanguage", "french");
                        }}
                    >
                        <img
                            src="/media/img/fr.png"
                            alt="Français"
                            title="Français"
                            className="h-12"
                        />
                    </button>
                    <button
                        onClick={() => {
                            setLanguage("english");
                            localStorage.setItem("selectedLanguage", "english");
                        }}
                    >
                        <img
                            src="/media/img/en.png"
                            alt="English"
                            title="English"
                            className="h-12"
                        />
                    </button>
                    <button
                        onClick={() => {
                            setLanguage("dutch");
                            localStorage.setItem("selectedLanguage", "dutch");
                        }}
                    >
                        <img
                            src="/media/img/nl.png"
                            alt="Nederlands"
                            title="Nederlands"
                            className="h-12"
                        />
                    </button>
                </div>
                <button
                    className="button-language text-belazurblue bg-white font-semibold"
                    onClick={() => {
                        setShowLanguageModal(false);
                    }}
                >
                    {text[language].continue}
                </button>
            </div>
        </div>
    );
}

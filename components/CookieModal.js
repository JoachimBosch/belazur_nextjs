"use client"

import { useState, useEffect, useContext } from "react";
import MyContext from "@/app/context-provider";

export default function CookieBanner() {
    const [showBanner, setShowBanner] = useState(false);
    const [allowAnalytics, setAllowAnalytics] = useState(false);
    const { language, text } = useContext(MyContext);

    useEffect(() => {
        if (!document.cookie.includes("cookieConsent=true")) {
            setShowBanner(true);
        } else {
            if (document.cookie.includes("analyticsConsent=true")) {
                loadGoogleAnalytics();
            }
        }
    }, []);

    const loadGoogleAnalytics = () => {
        if (!window.gtag) {
            const script = document.createElement("script");
            script.async = true;
            script.src = `https://www.googletagmanager.com/gtag/js?id=G-C4JFHJNGH4`;
            document.head.appendChild(script);

            script.onload = () => {
                window.dataLayer = window.dataLayer || [];
                function gtag() {
                    window.dataLayer.push(arguments);
                }
                window.gtag = gtag;
                gtag("js", new Date());
                gtag("config", "G-C4JFHJNGH4", { anonymize_ip: true });
            };
        }
    };

    const handleAcceptAll = () => {
        document.cookie =
            "cookieConsent=true; path=/; max-age=" + 60 * 60 * 24 * 365;
        document.cookie =
            "analyticsConsent=true; path=/; max-age=" + 60 * 60 * 24 * 365;
        loadGoogleAnalytics();
        setShowBanner(false);
    };

    const handleAccept = () => {
        document.cookie =
            "cookieConsent=true; path=/; max-age=" + 60 * 60 * 24 * 365;
        if (allowAnalytics) {
            document.cookie =
                "analyticsConsent=true; path=/; max-age=" + 60 * 60 * 24 * 365;
            loadGoogleAnalytics();
        } else {
            removeGoogleAnalyticsCookies();
        }
        setShowBanner(false);
    };

    const handleDecline = () => {
        removeGoogleAnalyticsCookies();
        setShowBanner(false);
    };

    const removeGoogleAnalyticsCookies = () => {
        document.cookie =
            "_ga=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
        document.cookie =
            "_gid=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
        document.cookie =
            "_gat=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    };

    if (!showBanner) return null;

    return (
        <div className="cookieModal text-belazurblue">
            <h3 className="text-lg font-semibold">
                {text[language].respectPrivacy} 🍪
            </h3>
            <p className="text-sm py-4">{text[language].cookies}</p>

            <div className="flex items-center justify-between py-2">
                <span className="text-sm">
                    {text[language].functionalCookies}
                </span>
                <div className="relative">
                    <input
                        type="checkbox"
                        checked
                        className="sr-only"
                        disabled
                    />
                    <div className="block w-10 h-6 cookieChecked rounded-full cursor-not-allowed"></div>
                    <div className="dot absolute right-1 top-1 w-4 h-4 bg-white rounded-full transition"></div>
                </div>
            </div>
            <div className="flex items-center justify-between py-2">
                <span className="text-sm">{text[language].allowAnalytics}</span>
                <label className="relative inline-flex items-center cursor-pointer">
                    <input
                        type="checkbox"
                        className="sr-only peer"
                        checked={allowAnalytics}
                        onChange={() => setAllowAnalytics(!allowAnalytics)}
                    />
                    <div className={`w-10 h-6 bg-gray-300 rounded-full ${
                            allowAnalytics ? "cookieChecked" : ""
                        }`}></div>
                    <div
                        className={`dot absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition ${
                            allowAnalytics ? "translate-x-4" : ""
                        }`}
                    ></div>
                </label>
            </div>
            <div className="flex justify-center gap-4 mt-4">
                <button
                    onClick={handleAcceptAll}
                    className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
                >
                    {text[language].acceptAll}
                </button>
                <button
                    onClick={handleAccept}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                    {text[language].accept}
                </button>
                <button
                    onClick={handleDecline}
                    className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition"
                >
                    {text[language].decline}
                </button>
            </div>
        </div>
    );
}

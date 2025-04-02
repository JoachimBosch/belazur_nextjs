"use client"

import Link from "next/link";
import { useContext } from "react";
import MyContext from "@/app/context-provider";

export default function MailUs() {
    const { language, text } = useContext(MyContext);
    return (
        <>
            <div className="text-center">
                <Link href="/contact">
                    <button className="button-home bg-white text-belazurblue hover:bg-belazurblue hover:text-white font-semibold hover:text-white rounded">
                        {text[language].mailUs}
                    </button>
                </Link>
            </div>
        </>
    );
}

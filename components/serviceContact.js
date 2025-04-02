"use client"

import Link from "next/link";
import { useContext } from "react";
import MyContext from "@/app/context-provider";

export default function ServiceContact() {
    const { language, text } = useContext(MyContext);
    return (
        <>
            <div className="text-center">
                <Link href="/contact">
                    <button class="button-services rounded">
                        {text[language].mailUs}
                    </button>
                </Link>
            </div>
        </>
    );
}

"use client"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useContext } from "react";
import MyContext from "@/app/context-provider";

export default function GetInTouch() {
    const { language, text } = useContext(MyContext);

    return (
        <>
            <div className="text-center">
                <Link href="tel:+33626838554">
                    <button class="button-home bg-white text-belazurblue font-semibold hover:text-belazurblue py-2 px-4 border-none border-blue-500 hover:border-transparent rounded">
                        <FontAwesomeIcon icon={faPhone} />{" "}
                        {text[language].getInTouch}
                    </button>
                </Link>
            </div>
        </>
    );
}

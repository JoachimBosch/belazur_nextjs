"use client"

import { useContext } from "react";
import MyContext from "@/app/context-provider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackward } from "@fortawesome/free-solid-svg-icons";

export default function ServiceButton() {
    const { setPage, language, text } = useContext(MyContext);

    return (
        <div
            className="text-center py-6 mb-16
        "
        >
            <button
                onClick={() => {
                    setPage("allServices");
                }}
            >
                <FontAwesomeIcon icon={faBackward} /> &nbsp;{" "}
                {text[language].serviceButton}
            </button>
        </div>
    );
}

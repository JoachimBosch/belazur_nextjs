"use client";

import { useContext } from "react";
import MyContext from "@/app/context-provider";

export default function WhyUs() {
    const { language, text } = useContext(MyContext);
    return (
        <>
            <div className="whyUs py-8 gap-8 d-block text-belazurblue">
                <div
                    className="mx-auto grid lg:grid-cols-3 gap-8 px-4"
                    style={{ maxWidth: "1600px" }}
                >
                    <div className="whyUsSmall ps-8 pe-4 pb-10">
                        <h1 className="py-10">{text[language].whyUsHeader1}</h1>
                        <p className="text-justify">
                            {text[language].whyUsText1}
                        </p>
                    </div>
                    <div className="whyUsSmall px-4 pb-10">
                        <h1 className="py-10">{text[language].whyUsHeader2}</h1>
                        <p className="text-justify">
                            {text[language].whyUsText2}
                        </p>
                    </div>
                    <div className="whyUsSmall ps-8 pe-4 pb-10">
                        <h1 className="py-10">{text[language].whyUsHeader3}</h1>
                        <p className="text-justify">
                            {text[language].whyUsText3}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

"use client";
import { useContext } from "react";
import MyContext from "@/app/context-provider";
import multipage from "../../../../public/multipage.png";
import ServiceContact from "../../../../components/serviceContact";
import ListItem from "../../../../components/ListItem";
import Image from "next/image";

export default function Website() {
    const { language, text } = useContext(MyContext);

    return (
        <>
            <div className="services serviceIntro mx-auto px-4">
                <div className="flex flex-col items-center text-center">
                    <h1 className="mb-4">{text[language].websiteHeader}</h1>
                    <h2 className="mb-8">{text[language].websitePrice}</h2>
                    <p>
                        {text[language].websiteIntro1}
                        <br />
                        {text[language].websiteIntro2}
                        <br />
                        {text[language].websiteIntro3}
                    </p>
                </div>
                <div
                    className="flex flex-wrap justify-center"
                    style={{ height: "auto" }}
                >
                    <div className="card border flex flex-col place-content-evenly">
                        <p className="text-justify text-belazurblue">
                            {text[language].websiteBox1}
                        </p>
                    </div>
                    <div className="serviceImage">
                        <Image src={multipage} alt="Multi-Page Website image" />
                    </div>
                </div>
                <ServiceContact />
                <div
                    className="perfectBenefits gap-28 mx-auto"
                    style={{ maxWidth: "900px" }}
                >
                    <div className="benefits p-4 mb-12 text-left text-belazurblue ">
                        <h2>{text[language].websitePerfect}</h2>
                        <div className="ps-8">
                            <div className="w-full">
                                <ul className="space-y-3">
                                    <ListItem
                                        text={
                                            text[language].websitePerfectFor[0]
                                        }
                                    />
                                    <ListItem
                                        text={
                                            text[language].websitePerfectFor[1]
                                        }
                                    />
                                    <ListItem
                                        text={
                                            text[language].websitePerfectFor[2]
                                        }
                                    />
                                    <ListItem
                                        text={
                                            text[language].websitePerfectFor[3]
                                        }
                                    />
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="benefits p-4 mb-12 text-left text-belazurblue">
                        <h2>{text[language].websiteBenefitsHeader}</h2>
                        <div className="ps-8">
                            <div className="w-full">
                                <ul className="space-y-3">
                                    <ListItem
                                        text={text[language].websiteBenefits[0]}
                                    />
                                    <ListItem
                                        text={text[language].websiteBenefits[1]}
                                    />
                                    <ListItem
                                        text={text[language].websiteBenefits[2]}
                                    />
                                    <ListItem
                                        text={text[language].websiteBenefits[3]}
                                    />
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

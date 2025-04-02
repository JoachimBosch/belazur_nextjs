"use client";
import { useContext } from "react";
import MyContext from "@/app/context-provider";
import onepager from "../../../../public/onepager.png";
import ServiceContact from "../../../../components/serviceContact";
import ListItem from "../../../../components/ListItem";
import Image from "next/image";

export default function Vitrine() {
    const { language, text } = useContext(MyContext);

    return (
        <>
            <div className="services serviceIntro mx-auto px-4">
                <div className="flex flex-col items-center text-center">
                    <h1 className="mb-4">{text[language].vitrineHeader}</h1>
                    <h2 className="mb-8">{text[language].vitrinePrice}</h2>
                    <p>
                        {text[language].vitrineIntro1}
                        <br />
                        {text[language].vitrineIntro2}
                        <br />
                        {text[language].vitrineIntro3}
                        <br />
                        {text[language].vitrineIntro4}
                    </p>
                </div>
                <div className="text-center"></div>
                <div
                    className="flex flex-wrap justify-center"
                    style={{ height: "auto" }}
                >
                    <div className="card border flex flex-col place-content-evenly">
                        <p className="text-justify text-belazurblue">
                            {text[language].vitrineBox1}
                        </p>
                    </div>
                    <div className="serviceImage">
                        <Image src={onepager} alt="One-Page Website image" />
                    </div>
                </div>
                <ServiceContact />
                <div
                    className="perfectBenefits gap-28 mx-auto"
                    style={{ maxWidth: "900px" }}
                >
                    <div className="benefits p-4 mb-12 text-left text-belazurblue ">
                        <h2>{text[language].vitrinePerfect}</h2>
                        <div className="ps-8">
                            <div className="w-full">
                                <ul className="space-y-3">
                                    <ListItem
                                        text={
                                            text[language].vitrinePerfectFor[0]
                                        }
                                    />
                                    <ListItem
                                        text={
                                            text[language].vitrinePerfectFor[1]
                                        }
                                    />
                                    <ListItem
                                        text={
                                            text[language].vitrinePerfectFor[2]
                                        }
                                    />
                                    <ListItem
                                        text={
                                            text[language].vitrinePerfectFor[3]
                                        }
                                    />
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="benefits p-4 mb-12 text-left text-belazurblue">
                        <h2>{text[language].vitrineBenefitsHeader}</h2>
                        <div className="ps-8">
                            <div className="w-full">
                                <ul className="space-y-3">
                                    <ListItem
                                        text={text[language].vitrineBenefits[0]}
                                    />
                                    <ListItem
                                        text={text[language].vitrineBenefits[1]}
                                    />
                                    <ListItem
                                        text={text[language].vitrineBenefits[2]}
                                    />
                                    <ListItem
                                        text={text[language].vitrineBenefits[3]}
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

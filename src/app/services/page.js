"use client";
import { useContext } from "react";
import MyContext from "../context-provider";
import onepager from "../../../public/onepager.png";
import multipage from "../../../public/multipage.png";
import webshop from "../../../public/webshop.png";
import Link from "next/link";
import ListItem from "../../../components/ListItem";
import Image from "next/image";

export default function AllServices() {
    const { language, text } = useContext(MyContext);

    return (
        <>
            <div className="services serviceIntro">
                <div
                    className="text-center mx-auto mb-12"
                    style={{ maxWidth: "1280px" }}
                >
                    <h1 className="text-center">
                        {text[language].allServicesSubHeader}
                    </h1>
                    <p className="ps-8 pe-8 pb-8">
                        {text[language].allServicesText}
                    </p>
                </div>
                <div className="flex flex-wrap justify-center gap-12 pb-20">
                    <div className="pricing">
                        <button className="allServicesButton">
                            <Link
                                href="/services/single"
                                onClick={() => {
                                    window.scroll(0, 0);
                                }}
                            >
                                <p className="serviceHeader">
                                    {text[language].onePage}
                                </p>
                                <Image
                                    src={onepager}
                                    alt="One-Page Website image"
                                />
                                <div className="flex flex-col justify-center">
                                    <p style={{ fontSize: "12px" }}>
                                        <sub>
                                            {
                                                text[language]
                                                    .vitrinePriceShortIntro
                                            }
                                        </sub>
                                    </p>
                                    <h1>{text[language].vitrinePriceShort}</h1>
                                </div>

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
                            </Link>
                        </button>
                    </div>
                    <div className="pricing">
                        <button className="allServicesButton">
                            <Link
                                href="/services/multi"
                                onClick={() => {
                                    window.scroll(0, 0);
                                }}
                            >
                                <p className="serviceHeader">
                                    {text[language].multiPage}
                                </p>
                                <Image
                                    src={multipage}
                                    alt="Multi-Page Website image"
                                />
                                <div className="flex flex-col justify-center">
                                    <p style={{ fontSize: "12px" }}>
                                        <sub>
                                            {
                                                text[language]
                                                    .websitePriceShortIntro
                                            }
                                        </sub>
                                    </p>
                                    <h1>{text[language].websitePriceShort}</h1>
                                </div>

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
                            </Link>
                        </button>
                    </div>
                    <div className="pricing">
                        <button className="allServicesButton">
                            <Link
                                href="/services/ecommerce"
                                onClick={() => {
                                    window.scroll(0, 0);
                                }}
                            >
                                <p className="serviceHeader">
                                    {text[language].ecommerce}
                                </p>
                                <Image
                                    src={webshop}
                                    alt="E-commerce Website image"
                                />
                                <div className="flex flex-col justify-center">
                                    <p style={{ fontSize: "12px" }}>
                                        <sub>&nbsp;</sub>
                                    </p>
                                    <h1>
                                        {text[language].ecommercePriceShort}
                                    </h1>
                                </div>

                                <ul className="space-y-3 text-left">
                                    <ListItem
                                        text={
                                            text[language].ecommerceBenefits[0]
                                        }
                                    />
                                    <ListItem
                                        text={
                                            text[language].ecommerceBenefits[1]
                                        }
                                    />
                                    <ListItem
                                        text={
                                            text[language].ecommerceBenefits[2]
                                        }
                                    />
                                    <ListItem
                                        text={
                                            text[language].ecommerceBenefits[3]
                                        }
                                    />
                                </ul>
                            </Link>
                        </button>
                    </div>
                </div>

                <div className="text-center pb-4" style={{ fontSize: "10px" }}>
                    <p>{text[language].taxWarning}</p>
                </div>
            </div>
        </>
    );
}

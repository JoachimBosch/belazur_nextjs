"use client";
import React from "react";
import Link from "next/link";
import { useContext } from "react";
import MyContext from "../context-provider";
import Typewriter from "typewriter-effect";
import Image from "next/image";
import Lisa from "../../../public/Lisa.jpeg";
import Joachim from "../../../public/Joachim.jpeg";

export default function About() {
    const { language, text } = useContext(MyContext);

    return (
        <>
            <div className="intro mx-auto pt-16 px-4 md:px-8">
                <div className="text-center mb-8">
                    <h1>
                        <Typewriter
                            options={{
                                strings: `${text[language].aboutUsHeader}`,
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </h1>
                </div>

                <div className="py-0 md:py-8 mx-auto max-w-7xl">
                    <h2 className="text-center text-xl md:text-3xl font-bold">
                        Lisa Lowagie
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                        <div className="flex justify-center">
                            <Link
                                href="https://github.com/lisalowagie"
                                target="_blank"
                            >
                                <Image
                                    className="aboutProfilePic m-auto"
                                    src={Lisa}
                                    alt="Picture of Lisa Lowagie"
                                    width={300}
                                    height={300}
                                />
                            </Link>
                        </div>
                        <div className="flex md:text-left mt-4 mb-4 aboutUs border-none md:border-2">
                            <p className="text-justify sm:text-lg">
                                {text[language].aboutLisa}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="py-8 mx-auto max-w-7xl mb-10">
                    <h2 className="text-center text-xl md:text-3xl font-bold mb-6">
                        Joachim Bosch
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center mb-12">
                        <div>
                            <Link
                                href="https://github.com/joachimBosch/"
                                target="_blank"
                            >
                                <Image
                                    className="aboutProfilePic m-auto"
                                    src={Joachim}
                                    alt="Picture of Joachim Bosch"
                                    width={300}
                                    height={300}
                                />
                            </Link>
                        </div>
                        <div className="flex md:text-left mt-4 mb-4 aboutUs border-none md:border-2">
                            <p className="text-justify sm:text-lg">
                                {text[language].aboutJoachim}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

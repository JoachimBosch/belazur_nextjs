"use client";
import Link from "next/link";

export default function Footer() {
    return (
        <>
            <div className="footer">
                <div className="reference text-center">
                    <p>Bel&apos;Azur Coding © 2025</p>
                    <div>
                        <Link
                            className="hover:underline"
                            href="/mentions-legales"
                            onClick={() => {
                                document.body.scrollTop = 0;
                            }}
                        >
                            Termes et Conditions
                        </Link>
                        &nbsp;-&nbsp;
                        <Link
                            className="hover:underline"
                            href="/privacy-policy"
                            onClick={() => {
                                document.body.scrollTop = 0;
                            }}
                        >
                            Politique de Confidentialité
                        </Link>
                        &nbsp;-&nbsp;
                        <Link
                            className="hover:underline"
                            href="/cookie-policy"
                            onClick={() => {
                                document.body.scrollTop = 0;
                            }}
                        >
                            Politique de Cookies
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

import "./globals.css";
import { MyProvider } from "./context-provider";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import LanguageModal from "../../components/LanguageModal";
import CookieBanner from "../../components/CookieModal";

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <MyProvider>
                    <Navbar />
                    <LanguageModal />
                    <CookieBanner />
                    <main>{children}</main>
                    <Footer />
                </MyProvider>
            </body>
        </html>
    );
}
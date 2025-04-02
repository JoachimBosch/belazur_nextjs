import "./globals.css";
import { MyProvider } from "./context-provider";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <MyProvider>
                    <Navbar />
                    <main>{children}</main>
                    <Footer />
                </MyProvider>
            </body>
        </html>
    );
}
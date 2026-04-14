import { DM_Serif_Display, Manrope } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import GlowBackground from "@/components/GlowBackground";

const display = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display"
});

const body = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-body"
});

export const metadata = {
  title: "TheDigifac | Engineering-Led Low-Code and AI Transformation",
  description:
    "TheDigifac helps global enterprises deliver applications in weeks, modernize legacy systems with low-code and AI, and scale governed digital ecosystems.",
  metadataBase: new URL("https://www.thedigifac.com")
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${body.variable} bg-canvas font-body text-ink antialiased`}>
        <GlowBackground />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}

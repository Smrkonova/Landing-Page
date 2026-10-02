import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ContactCTA from "@/components/layout/ContactCTA";
import GlobalAudio from "@/components/layout/GlobalAudio";
import DesktopScaler from "@/components/DesktopScaler";
import SmoothScroll from "@/components/SmoothScroll";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "Web Design Company in Bangalore | Web Development Company | Smrkonova",
  description: "Smrkonova Softech Solutions helps Bangalore businesses grow with web design, website development, UI/UX, branding, SEO, and digital marketing services.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <SmoothScroll>
          <DesktopScaler>
            <GlobalAudio />
            <Header />
            <main className="w-full max-w-full overflow-x-clip flex-grow">{children}</main>
            <ContactCTA />
            <Footer />
          </DesktopScaler>
        </SmoothScroll>
      </body>
    </html>
  );
}

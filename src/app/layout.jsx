import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/animations/CustomCursor";
import SmoothScrolling from "@/components/animations/SmoothScrolling";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "Web Design Company in Bangalore | Web Development Company | Smrkonova",
  description: "Smrkonova Softech Solutions helps Bangalore businesses grow with web design, website development, UI/UX, branding, SEO, and digital marketing services.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SmoothScrolling>
          <CustomCursor />
          <Header />
          <main>{children}</main>
          <Footer />
        </SmoothScrolling>
      </body>
    </html>
  );
}

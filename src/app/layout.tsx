import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ContactCTA from "@/components/layout/ContactCTA";
import GlobalAudio from "@/components/layout/GlobalAudio";
import DesktopScaler from "@/components/DesktopScaler";
import SmoothScroll from "@/components/SmoothScroll";
import WhatsAppButton from "@/components/common/WhatsAppButton";
import { PostHogProvider } from "./providers";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "Web Design Company in Bangalore | Web Development Company | Smrkonova",
  description: "Smrkonova Softech Solutions helps Bangalore businesses grow with web design, website development, UI/UX, branding, SEO, and digital marketing services.",
};

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || "GTM-MPDD8LTC";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <head>
        {/* Google Tag Manager */}
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${GTM_ID}');
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <PostHogProvider>
          <SmoothScroll>
            <DesktopScaler>
              <GlobalAudio />
              <Header />
              <main className="w-full max-w-full overflow-x-clip flex-grow">{children}</main>
              <ContactCTA />
              <Footer />
              <WhatsAppButton phoneNumber="+919740662046" />
            </DesktopScaler>
          </SmoothScroll>
        </PostHogProvider>
      </body>
    </html>
  );
}

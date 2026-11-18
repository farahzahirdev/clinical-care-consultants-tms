import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBar from "@/components/MobileBar";
import ScrollFx from "@/components/ScrollFx";
import { PHONE_NUMBER, SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: `TMS Therapy in Inverness & Palatine, IL | ${SITE_NAME}`,
  description: `Non-invasive TMS therapy for depression from experienced, licensed clinicians in Inverness, IL. Serving Palatine, Schaumburg, Hoffman Estates, and Barrington. Find out if you qualify or call ${PHONE_NUMBER}.`,
  icons: {
    icon: [
      { url: "/images/favicon.png", type: "image/png", sizes: "256x256" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: "/favicon.ico",
    apple: "/images/favicon.png",
  },
  keywords: [
    "TMS therapy Inverness IL",
    "TMS Palatine",
    "TMS Schaumburg",
    "treatment-resistant depression Illinois",
    "Clinical Care Consultants",
  ],
  openGraph: {
    title: `TMS Therapy for Depression | ${SITE_NAME}`,
    description:
      "A non-invasive option when medication and therapy haven't been enough. Counselors Who Care, in Inverness, IL.",
    locale: "en_US",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <a href="#top" className="skip-link">
          Skip to content
        </a>
        <ScrollFx />
        <Header />
        <main>{children}</main>
        <Footer />
        <MobileBar />
        <Script src="https://go.4tms.com/js/form_embed.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}

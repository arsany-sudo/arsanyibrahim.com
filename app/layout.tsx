import type { Metadata, Viewport } from "next";
import { Inter, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { masterGraph } from "@/lib/schema";
import { PERSON, SITE } from "@/lib/site";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: SITE.title,
    template: "%s — Arsany Ibrahim",
  },
  description: SITE.description,
  authors: [{ name: PERSON.fullName, url: `${SITE.url}/about` }],
  creator: PERSON.fullName,
  publisher: PERSON.fullName,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "profile",
    title: SITE.title,
    description: SITE.ogDescription,
    url: `${SITE.url}/`,
    siteName: SITE.name,
    locale: "en_US",
    images: [
      {
        url: SITE.ogImage,
        width: 1200,
        height: 630,
        alt: PERSON.headshot.caption,
      },
    ],
    firstName: PERSON.givenName,
    lastName: PERSON.familyName,
    username: "arsanyibrahim",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.title,
    description: SITE.twitterDescription,
    images: [SITE.ogImage],
    creator: SITE.twitterHandle,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: {
    google: SITE.verification.google,
    other: {
      "msvalidate.01": SITE.verification.bing,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <head>
        <JsonLd id="schema-master-graph" data={masterGraph()} />
      </head>
      <body className="min-h-full flex flex-col">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { ContactSection } from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Arsany Ibrahim, strategist and operator in Los Angeles. Email and a message form. Press, podcast and project inquiries welcome.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact | Arsany Ibrahim",
    description: "Email and message form for Arsany Ibrahim.",
    url: "/contact",
    type: "website",
  },
};

export default function ContactPage() {
  return <ContactSection />;
}

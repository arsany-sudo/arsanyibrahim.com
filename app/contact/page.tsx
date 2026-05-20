import type { Metadata } from "next";
import { ContactSection } from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Arsany Ibrahim. Email, phone, and a message form. Press, podcast, and project inquiries welcome.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact — Arsany Ibrahim",
    description:
      "Email, phone, and message form for Arsany Ibrahim.",
    url: "/contact",
    type: "website",
  },
};

export default function ContactPage() {
  return <ContactSection />;
}

import { Hero } from "@/components/sections/Hero";
import { AboutSection } from "@/components/sections/AboutSection";
import { Companies } from "@/components/sections/Companies";
import { WritingSection } from "@/components/sections/WritingSection";
import { SpeakingPress } from "@/components/sections/SpeakingPress";
import { FaqSection } from "@/components/sections/FaqSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutSection />
      <Companies />
      <WritingSection />
      <SpeakingPress />
      <FaqSection />
      <ContactSection />
    </>
  );
}

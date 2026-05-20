import { FadeIn } from "@/components/FadeIn";
import { JsonLd } from "@/components/JsonLd";
import { faqGraph } from "@/lib/schema";
import { FAQ } from "@/lib/site";

export function FaqSection() {
  return (
    <section
      id="faq"
      className="section border-t border-[color:var(--color-border)]"
      aria-label="Frequently asked questions"
    >
      <JsonLd id="schema-faq" data={faqGraph()} />
      <div className="container-content">
        <FadeIn>
          <p className="eyebrow mb-4">FAQ</p>
        </FadeIn>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-12 gap-x-12 gap-y-12">
          {FAQ.map((item, i) => (
            <FadeIn
              key={item.q}
              delay={i * 0.04}
              className="md:col-span-12 grid grid-cols-1 md:grid-cols-12 gap-x-12"
            >
              <h2 className="display text-2xl md:text-3xl tracking-tight md:col-span-5">
                {item.q}
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-[color:var(--color-text)]/90 md:col-span-7">
                {item.a}
              </p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

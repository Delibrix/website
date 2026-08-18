import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const principles = [
  "Build for measurable outcomes, not vanity features.",
  "Combine product thinking with engineering depth.",
  "Design systems that scale with clarity and discipline.",
  "Use AI responsibly to enhance human decision-making.",
];

export default function AboutPage() {
  return (
    <div className="page-shell">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-35" />
      <SiteHeader />
      <main className="section-shell py-16 md:py-20">
        <p className="eyebrow">About DELiBRiX</p>
        <h1 className="mt-4 max-w-3xl text-5xl font-semibold leading-tight md:text-6xl">
          We are building a technology company where software execution and AI innovation compound over time.
        </h1>

        <section className="mt-10 grid gap-5 md:grid-cols-[1.1fr_0.9fr]">
          <article className="card-surface p-8">
            <h2 className="text-3xl font-semibold">Our mission</h2>
            <p className="mt-3 text-sm leading-7 text-muted">
              DELiBRiX exists to create intelligent software products and services that solve real-world problems and deliver practical business value.
            </p>
            <blockquote className="mt-8 border-l-2 border-ink/80 pl-4 text-xl font-medium leading-relaxed">
              Building intelligent solutions. Delivering impact.
            </blockquote>
          </article>
          <article className="card-surface p-8">
            <h2 className="text-3xl font-semibold">How we work</h2>
            <ul className="mt-4 space-y-4 text-sm text-muted">
              {principles.map((principle) => (
                <li key={principle} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-signal" />
                  <span>{principle}</span>
                </li>
              ))}
            </ul>
          </article>
        </section>

        <section className="mt-12 card-surface p-8 md:p-10">
          <p className="eyebrow">Long-term direction</p>
          <h2 className="mt-4 max-w-4xl text-3xl font-semibold leading-tight md:text-5xl">
            DELiBRiX is evolving from a high-performance services organization into a multi-product software company fueled by client insight, engineering capability, and continuous experimentation.
          </h2>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

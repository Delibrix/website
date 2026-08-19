import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { FadeIn } from "@/components/motion";

const principles = [
  "Build for measurable outcomes, not vanity features.",
  "Combine product thinking with engineering depth.",
  "Design systems that scale with clarity and discipline.",
  "Use AI responsibly to enhance human decision-making.",
];

export default function AboutPage() {
  return (
    <div className="page-shell">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(45,212,191,0.07)_0%,transparent_70%)]" />
      <div className="bg-dots pointer-events-none absolute inset-0 opacity-40" />
      <SiteHeader />
      <main className="section-shell pb-24 pt-32 md:pt-40">
        <FadeIn>
          <p className="eyebrow">About DELiBRiX</p>
          <h1 className="mt-5 max-w-3xl text-5xl font-semibold leading-tight text-white md:text-6xl">
            We are building a technology company where software execution and AI innovation compound over time.
          </h1>
        </FadeIn>

        <div className="mt-12 grid gap-4 md:grid-cols-[1.1fr_0.9fr]">
          <FadeIn>
            <article className="card-surface h-full p-8">
              <h2 className="text-2xl font-semibold text-white">Our mission</h2>
              <p className="mt-3 text-sm leading-7 text-[var(--muted-2)]">
                DELiBRiX exists to create intelligent software products and services that solve real-world problems and deliver practical business value.
              </p>
              <blockquote className="mt-8 border-l-2 border-[var(--accent)] pl-5 text-lg font-medium leading-relaxed text-white">
                Building intelligent solutions. Delivering impact.
              </blockquote>
            </article>
          </FadeIn>
          <FadeIn delay={0.1}>
            <article className="card-surface h-full p-8">
              <h2 className="text-2xl font-semibold text-white">How we work</h2>
              <ul className="mt-4 space-y-4">
                {principles.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-sm text-[var(--muted-2)]">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--accent)]" />
                    {p}
                  </li>
                ))}
              </ul>
            </article>
          </FadeIn>
        </div>

        <FadeIn className="mt-4">
          <article className="card-surface relative overflow-hidden p-8 md:p-10">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(45,212,191,0.07),transparent_60%)]" />
            <p className="eyebrow">Long-term direction</p>
            <h2 className="mt-4 max-w-4xl text-2xl font-semibold leading-snug text-white md:text-4xl">
              DELiBRiX is evolving from a high-performance services organization into a multi-product software company fueled by client insight, engineering capability, and continuous experimentation.
            </h2>
          </article>
        </FadeIn>
      </main>
      <SiteFooter />
    </div>
  );
}

import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { FadeIn, Stagger, StaggerItem } from "@/components/motion";

const pillars = [
  {
    num: "01",
    title: "Product Engineering",
    text: "Design and launch AI-powered software products with clear market fit and strong delivery cadence.",
  },
  {
    num: "02",
    title: "Digital Modernization",
    text: "Rebuild legacy platforms into secure, cloud-native systems ready for automation and scale.",
  },
  {
    num: "03",
    title: "Applied Intelligence",
    text: "Embed AI into business workflows to improve speed, decision quality, and measurable outcomes.",
  },
];

const sectors = ["Manufacturing", "Healthcare", "SaaS", "Logistics", "Retail", "Fintech"];

const process = [
  { num: "01", title: "Discover", text: "Align on outcomes, constraints, and measurable value before implementation begins." },
  { num: "02", title: "Design", text: "Translate business goals into robust architecture, delivery milestones, and AI integration paths." },
  { num: "03", title: "Deliver", text: "Ship dependable software with continuous iteration, observability, and impact tracking." },
];

export default function Home() {
  return (
    <div className="page-shell">
      {/* Background glows */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(45,212,191,0.08)_0%,transparent_70%)]" />
      <div className="pointer-events-none absolute -right-32 top-80 h-96 w-96 rounded-full bg-[var(--signal-dim)] blur-[100px]" />
      <div className="bg-dots pointer-events-none absolute inset-0 opacity-40" />

      <SiteHeader />

      <main className="section-shell pb-24 pt-28 md:pt-36">

        {/* Hero */}
        <section className="grid gap-10 pb-16 md:grid-cols-[1.2fr_0.8fr] md:pb-24">
          <FadeIn>
            <p className="eyebrow">DELiBRiX · AI-first technology company</p>
            <h1 className="mt-5 text-5xl font-semibold leading-[1.02] tracking-tight text-white sm:text-6xl md:text-7xl">
              Building intelligent solutions.{" "}
              <span className="text-[var(--accent)]">Delivering impact.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--muted-2)]">
              We build AI-powered products and modern software systems that create measurable business outcomes for ambitious organizations.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link className="btn-primary" href="/contact">Start a project</Link>
              <Link className="btn-ghost" href="/services">Explore services</Link>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <aside className="card-surface h-full p-7 md:p-8">
              <p className="eyebrow">Vision</p>
              <blockquote className="mt-4 text-xl font-medium leading-snug text-white md:text-2xl">
                Grow from startup velocity into a multi-product software company where client expertise and innovation continuously launch new businesses.
              </blockquote>
              <p className="mt-6 text-sm leading-7 text-[var(--muted)]">
                Early-stage and focused on execution quality. Each engagement is built to create dependable outcomes and strong long-term partnerships.
              </p>
            </aside>
          </FadeIn>
        </section>

        {/* What we do */}
        <FadeIn>
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <h2 className="section-title">What we do</h2>
            <Link href="/services" className="text-sm text-[var(--muted-2)] transition hover:text-[var(--accent)]">
              Full capability map →
            </Link>
          </div>
        </FadeIn>
        <Stagger className="grid gap-4 md:grid-cols-3" stagger={0.1}>
          {pillars.map((p) => (
            <StaggerItem key={p.title}>
              <article className="card-surface h-full p-7">
                <p className="text-xs font-semibold tracking-[0.15em] text-[var(--accent)]">{p.num}</p>
                <h3 className="mt-4 text-xl font-semibold tracking-tight text-white">{p.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--muted-2)]">{p.text}</p>
              </article>
            </StaggerItem>
          ))}
        </Stagger>

        {/* Sectors */}
        <FadeIn className="py-16">
          <h2 className="section-title">Sectors we support</h2>
          <p className="mt-4 max-w-xl text-[var(--muted-2)]">
            Growth-stage and enterprise teams where speed, reliability, and intelligent automation are strategic priorities.
          </p>
          <div className="mt-6 flex flex-wrap gap-2.5">
            {sectors.map((s) => <span key={s} className="chip">{s}</span>)}
          </div>
        </FadeIn>

        {/* How we execute */}
        <FadeIn>
          <div className="mb-8">
            <h2 className="section-title">How we execute</h2>
            <p className="mt-3 max-w-xl text-sm text-[var(--muted-2)]">
              A disciplined model focused on strategic clarity, resilient engineering, and measurable delivery.
            </p>
          </div>
        </FadeIn>
        <div className="grid gap-4 md:grid-cols-2">
          <FadeIn>
            <article className="card-surface h-full p-8">
              <div className="space-y-8">
                {process.map((item) => (
                  <div key={item.title} className="process-step">
                    <div className="process-dot">{item.num}</div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                      <p className="mt-1.5 text-sm leading-7 text-[var(--muted-2)]">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </article>
          </FadeIn>
          <FadeIn delay={0.1}>
            <article className="card-surface flex h-full flex-col justify-between p-8">
              <div>
                <p className="eyebrow">Execution principles</p>
                <h3 className="mt-4 text-2xl font-semibold tracking-tight text-white">Outcome-oriented by design</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--muted-2)]">
                  We prioritize practical delivery discipline from day one, combining transparent communication with strong engineering standards.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-3">
                {["Transparent", "Iterative", "Dependable", "Impactful"].map((tag) => (
                  <div key={tag} className="flex items-center gap-2 text-sm text-[var(--muted-2)]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                    {tag}
                  </div>
                ))}
              </div>
            </article>
          </FadeIn>
        </div>

        {/* CTA */}
        <FadeIn className="mt-16">
          <div className="card-surface relative overflow-hidden p-8 md:p-12">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(45,212,191,0.1),transparent_60%)]" />
            <p className="eyebrow">Build with DELiBRiX</p>
            <h2 className="mt-4 max-w-2xl text-3xl font-semibold text-white md:text-4xl">
              Build intelligent products, modernize your systems, and deploy practical AI with a team focused on outcomes.
            </h2>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link className="btn-primary" href="/contact">Talk to our team</Link>
              <Link className="btn-ghost" href="/products">See product direction</Link>
            </div>
          </div>
        </FadeIn>
      </main>

      <SiteFooter />
    </div>
  );
}

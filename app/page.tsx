import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const pillars = [
  {
    title: "Product Engineering",
    text: "Design and launch AI-powered software products with clear market fit and strong delivery cadence.",
  },
  {
    title: "Digital Modernization",
    text: "Rebuild legacy platforms into secure, cloud-native systems ready for automation and scale.",
  },
  {
    title: "Applied Intelligence",
    text: "Embed AI into business workflows to improve speed, decision quality, and measurable outcomes.",
  },
];

const sectors = ["Manufacturing", "Healthcare", "SaaS", "Logistics", "Retail", "Fintech"];

const insights = [
  {
    title: "From Services to Product Flywheel",
    text: "How delivery capabilities can systematically generate high-value software products.",
  },
  {
    title: "AI Roadmaps That Actually Ship",
    text: "A practical framework for moving from ideas to deployed intelligent systems.",
  },
  {
    title: "Modernization Without Downtime",
    text: "Patterns for evolving core systems while keeping mission-critical operations stable.",
  },
];

const operatingModel = [
  {
    title: "Discover",
    text: "Align on outcomes, constraints, and measurable value before implementation begins.",
  },
  {
    title: "Design",
    text: "Translate business goals into robust architecture, delivery milestones, and AI integration paths.",
  },
  {
    title: "Deliver",
    text: "Ship dependable software with continuous iteration, observability, and impact tracking.",
  },
];

const delayClasses = ["delay-1", "delay-2", "delay-3"];

export default function Home() {
  return (
    <div className="page-shell">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-35" />
      <div className="pointer-events-none absolute -left-32 top-24 h-80 w-80 rounded-full bg-accent/25 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 top-[34rem] h-96 w-96 rounded-full bg-signal/20 blur-3xl" />

      <SiteHeader />

      <main className="section-shell pb-20">
        <section className="reveal grid gap-8 py-16 md:grid-cols-[1.15fr_0.85fr] md:py-24">
          <div className="space-y-8">
            <p className="eyebrow">DELiBRiX | AI-first technology company</p>
            <h1 className="hero-motto max-w-4xl text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-7xl">
              <span className="hero-line">Building intelligent solutions.</span>
              <span className="hero-line hero-line-accent">Delivering impact.</span>
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-muted md:text-xl">
              We build AI-powered products and modern software systems that
              create measurable business outcomes for ambitious organizations.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link className="btn-primary" href="/contact">
                Start a project
              </Link>
              <Link className="btn-ghost" href="/services">
                Explore services
              </Link>
            </div>
          </div>
          <aside className="reveal delay-1 card-surface p-7 md:p-9">
            <p className="eyebrow">Long-term vision</p>
            <blockquote className="mt-4 text-2xl font-medium leading-tight md:text-3xl">
              Grow from startup velocity into a multi-product software company,
              where client expertise and innovation continuously launch new
              businesses.
            </blockquote>
            <p className="mt-7 max-w-xl text-sm leading-7 text-muted">
              We are early-stage and focused on execution quality. Each
              engagement is built to create dependable outcomes and strong
              long-term partnerships.
            </p>
          </aside>
        </section>

        <section className="reveal delay-1 py-8">
          <div className="mb-7 flex flex-wrap items-end justify-between gap-4">
            <h2 className="section-title">What we do</h2>
            <Link href="/services" className="text-sm text-muted transition hover:text-ink">
              View full capability map
            </Link>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {pillars.map((pillar, index) => (
              <article key={pillar.title} className={`card-surface p-7 reveal ${delayClasses[index]}`}>
                <p className="eyebrow">0{index + 1}</p>
                <h3 className="mt-4 text-2xl font-semibold tracking-tight">{pillar.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{pillar.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="reveal delay-2 py-10">
          <h2 className="section-title">Sectors we support</h2>
          <p className="mt-4 max-w-2xl text-muted">
            We partner with growth-stage and enterprise teams where speed,
            reliability, and intelligent automation are strategic priorities.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {sectors.map((sector) => (
              <span key={sector} className="chip">
                {sector}
              </span>
            ))}
          </div>
        </section>

        <section className="reveal delay-2 py-10">
          <div className="mb-7 flex flex-wrap items-end justify-between gap-4">
            <h2 className="section-title">How we execute</h2>
            <p className="max-w-xl text-sm text-muted">
              A disciplined model focused on strategic clarity, resilient engineering, and measurable delivery.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-[1.15fr_0.85fr]">
            <article className="card-surface p-8">
              <div className="space-y-7">
                {operatingModel.map((item, index) => (
                  <div key={item.title} className="process-step">
                    <div className="process-dot">0{index + 1}</div>
                    <div>
                      <h3 className="text-2xl font-semibold tracking-tight">{item.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-muted">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </article>

            <article className="card-surface p-8">
              <p className="eyebrow">Execution principles</p>
              <h3 className="mt-4 text-3xl font-semibold tracking-tight">Outcome-oriented by design</h3>
              <p className="mt-3 text-sm leading-7 text-muted">
                We prioritize practical delivery discipline from day one,
                combining transparent communication with strong engineering
                standards.
              </p>
              <ul className="mt-7 space-y-3 text-sm text-muted">
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-signal" />
                  Clear milestones and shared visibility across delivery.
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-signal" />
                  Architecture choices designed for maintainability and scale.
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-signal" />
                  Continuous improvement loops driven by feedback and learning.
                </li>
              </ul>
            </article>
          </div>
        </section>

        <section className="reveal delay-3 py-10">
          <div className="mb-7 flex flex-wrap items-end justify-between gap-4">
            <h2 className="section-title">Insights</h2>
            <Link href="/about" className="text-sm text-muted transition hover:text-ink">
              About DELiBRiX
            </Link>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {insights.map((insight) => (
              <article key={insight.title} className="card-surface p-7">
                <h3 className="text-xl font-semibold tracking-tight">{insight.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{insight.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="reveal delay-3 card-surface bg-gradient-to-r from-accent/20 via-white/0 to-signal/20 p-8 md:p-10">
          <p className="eyebrow">Build with DELiBRiX</p>
          <h2 className="mt-3 max-w-3xl text-3xl font-semibold leading-tight md:text-4xl">
            Build intelligent products, modernize your core systems, and deploy
            practical AI with a team focused on outcomes.
          </h2>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link className="btn-primary" href="/contact">
              Talk to our team
            </Link>
            <Link className="btn-ghost" href="/products">
              See product direction
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

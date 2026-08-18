import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const productTracks = [
  {
    title: "Vertical AI Tools",
    text: "Industry-specific intelligence products focused on decision support, process execution, and operational visibility.",
  },
  {
    title: "Workflow Platforms",
    text: "Composable products that orchestrate teams, systems, and data flows with automation at the core.",
  },
  {
    title: "Data Intelligence Layers",
    text: "Reusable product components for analytics, prediction, and optimization across business functions.",
  },
];

const delayClasses = ["delay-1", "delay-2", "delay-3"];

export default function ProductsPage() {
  return (
    <div className="page-shell">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-35" />
      <SiteHeader />
      <main className="section-shell py-16 md:py-20">
        <p className="eyebrow">Products</p>
        <h1 className="mt-4 max-w-3xl text-5xl font-semibold leading-tight md:text-6xl">
          Product-first growth powered by delivery insight and AI innovation.
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-muted">
          DELiBRiX is building toward a multi-product future where real client challenges become scalable software businesses.
        </p>

        <section className="mt-12 grid gap-5 md:grid-cols-3">
          {productTracks.map((track, index) => (
            <article key={track.title} className={`card-surface reveal p-7 ${delayClasses[index]}`}>
              <p className="eyebrow">Track 0{index + 1}</p>
              <h2 className="mt-4 text-2xl font-semibold tracking-tight">{track.title}</h2>
              <p className="mt-3 text-sm leading-7 text-muted">{track.text}</p>
            </article>
          ))}
        </section>

        <section className="mt-12 grid gap-5 md:grid-cols-2">
          <article className="card-surface p-8">
            <h3 className="text-2xl font-semibold">Our product thesis</h3>
            <p className="mt-3 text-sm leading-7 text-muted">
              Reusable capabilities from services delivery can evolve into standalone products when paired with disciplined validation and focused execution.
            </p>
          </article>
          <article className="card-surface p-8">
            <h3 className="text-2xl font-semibold">How we validate</h3>
            <p className="mt-3 text-sm leading-7 text-muted">
              We test demand quickly with design partners, measurable outcomes, and clear success criteria before scaling product investments.
            </p>
          </article>
        </section>

        <section className="card-surface mt-12 bg-gradient-to-r from-accent/20 via-white/0 to-signal/20 p-8 md:p-10">
          <h2 className="text-3xl font-semibold md:text-4xl">Co-create the next DELiBRiX product.</h2>
          <p className="mt-3 max-w-2xl text-muted">
            If you have a recurring business problem with high leverage potential, let&apos;s explore a product partnership.
          </p>
          <Link href="/contact" className="btn-primary mt-7">
            Explore product partnership
          </Link>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

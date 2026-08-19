import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { FadeIn, Stagger, StaggerItem } from "@/components/motion";

const tracks = [
  { num: "01", title: "Vertical AI Tools", text: "Industry-specific intelligence products focused on decision support, process execution, and operational visibility." },
  { num: "02", title: "Workflow Platforms", text: "Composable products that orchestrate teams, systems, and data flows with automation at the core." },
  { num: "03", title: "Data Intelligence Layers", text: "Reusable product components for analytics, prediction, and optimization across business functions." },
];

export default function ProductsPage() {
  return (
    <div className="page-shell">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(245,158,11,0.06)_0%,transparent_70%)]" />
      <div className="bg-dots pointer-events-none absolute inset-0 opacity-40" />
      <SiteHeader />
      <main className="section-shell pb-24 pt-32 md:pt-40">
        <FadeIn>
          <p className="eyebrow">Products</p>
          <h1 className="mt-5 max-w-3xl text-5xl font-semibold leading-tight text-white md:text-6xl">
            Product-first growth powered by delivery insight and AI innovation.
          </h1>
          <p className="mt-5 max-w-xl text-lg text-[var(--muted-2)]">
            Building toward a multi-product future where real client challenges become scalable software businesses.
          </p>
        </FadeIn>

        <Stagger className="mt-12 grid gap-4 md:grid-cols-3" stagger={0.1} delay={0.1}>
          {tracks.map((t) => (
            <StaggerItem key={t.title}>
              <article className="card-surface h-full p-7">
                <p className="text-xs font-semibold tracking-[0.15em] text-[var(--signal)]">{t.num}</p>
                <h2 className="mt-4 text-xl font-semibold tracking-tight text-white">{t.title}</h2>
                <p className="mt-3 text-sm leading-7 text-[var(--muted-2)]">{t.text}</p>
              </article>
            </StaggerItem>
          ))}
        </Stagger>

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <FadeIn>
            <article className="card-surface h-full p-8">
              <h3 className="text-xl font-semibold text-white">Our product thesis</h3>
              <p className="mt-3 text-sm leading-7 text-[var(--muted-2)]">
                Reusable capabilities from services delivery can evolve into standalone products when paired with disciplined validation and focused execution.
              </p>
            </article>
          </FadeIn>
          <FadeIn delay={0.1}>
            <article className="card-surface h-full p-8">
              <h3 className="text-xl font-semibold text-white">How we validate</h3>
              <p className="mt-3 text-sm leading-7 text-[var(--muted-2)]">
                We test demand quickly with design partners, measurable outcomes, and clear success criteria before scaling product investments.
              </p>
            </article>
          </FadeIn>
        </div>

        <FadeIn className="mt-12">
          <div className="card-surface relative overflow-hidden p-8 md:p-10">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(245,158,11,0.08),transparent_60%)]" />
            <h2 className="text-2xl font-semibold text-white md:text-3xl">Co-create the next DELiBRiX product.</h2>
            <p className="mt-3 max-w-xl text-[var(--muted-2)]">
              If you have a recurring business problem with high leverage potential, let&apos;s explore a product partnership.
            </p>
            <Link href="/contact" className="btn-primary mt-7">Explore product partnership</Link>
          </div>
        </FadeIn>
      </main>
      <SiteFooter />
    </div>
  );
}

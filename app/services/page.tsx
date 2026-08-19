import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { FadeIn, Stagger, StaggerItem } from "@/components/motion";

const services = [
  { num: "01", title: "AI Product Development", text: "From discovery to deployment, we build AI-enabled software products engineered for growth and reliability." },
  { num: "02", title: "Platform Modernization", text: "We transform brittle systems into robust cloud-native platforms with better performance and maintainability." },
  { num: "03", title: "Automation Programs", text: "We design and implement workflow automation programs that reduce manual effort and improve execution quality." },
  { num: "04", title: "Delivery Acceleration", text: "Our teams embed with yours to improve engineering velocity, architecture quality, and release confidence." },
];

export default function ServicesPage() {
  return (
    <div className="page-shell">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(45,212,191,0.07)_0%,transparent_70%)]" />
      <div className="bg-dots pointer-events-none absolute inset-0 opacity-40" />
      <SiteHeader />
      <main className="section-shell pb-24 pt-32 md:pt-40">
        <FadeIn>
          <p className="eyebrow">Services</p>
          <h1 className="mt-5 max-w-3xl text-5xl font-semibold leading-tight text-white md:text-6xl">
            Build, modernize, and automate with delivery teams that ship.
          </h1>
          <p className="mt-5 max-w-xl text-lg text-[var(--muted-2)]">
            DELiBRiX partners with organizations that need high-quality software outcomes and practical AI integration.
          </p>
        </FadeIn>

        <Stagger className="mt-12 grid gap-4 md:grid-cols-2" stagger={0.1} delay={0.1}>
          {services.map((s) => (
            <StaggerItem key={s.title}>
              <article className="card-surface h-full p-8">
                <p className="text-xs font-semibold tracking-[0.15em] text-[var(--accent)]">{s.num}</p>
                <h2 className="mt-4 text-2xl font-semibold tracking-tight text-white">{s.title}</h2>
                <p className="mt-3 text-sm leading-7 text-[var(--muted-2)]">{s.text}</p>
              </article>
            </StaggerItem>
          ))}
        </Stagger>

        <FadeIn className="mt-12">
          <div className="card-surface relative overflow-hidden p-8 md:p-10">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(45,212,191,0.1),transparent_60%)]" />
            <h2 className="text-2xl font-semibold text-white md:text-3xl">Need a tailored engagement model?</h2>
            <p className="mt-3 max-w-xl text-[var(--muted-2)]">
              We offer project-based builds, dedicated teams, and transformation programs aligned to your goals.
            </p>
            <Link href="/contact" className="btn-primary mt-7">Discuss your roadmap</Link>
          </div>
        </FadeIn>
      </main>
      <SiteFooter />
    </div>
  );
}

import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const services = [
  {
    title: "AI Product Development",
    text: "From discovery to deployment, we build AI-enabled software products engineered for growth and reliability.",
  },
  {
    title: "Platform Modernization",
    text: "We transform brittle systems into robust cloud-native platforms with better performance and maintainability.",
  },
  {
    title: "Automation Programs",
    text: "We design and implement workflow automation programs that reduce manual effort and improve execution quality.",
  },
  {
    title: "Delivery Acceleration",
    text: "Our teams embed with yours to improve engineering velocity, architecture quality, and release confidence.",
  },
];

const delayClasses = ["delay-1", "delay-2", "delay-3", "delay-1"];

export default function ServicesPage() {
  return (
    <div className="page-shell">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-35" />
      <SiteHeader />
      <main className="section-shell py-16 md:py-20">
        <p className="eyebrow">Services</p>
        <h1 className="mt-4 max-w-3xl text-5xl font-semibold leading-tight md:text-6xl">
          Build, modernize, and automate with delivery teams that ship.
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-muted">
          DELiBRiX partners with organizations that need high-quality software outcomes and practical AI integration.
        </p>

        <section className="mt-12 grid gap-5 md:grid-cols-2">
          {services.map((service, index) => (
            <article key={service.title} className={`card-surface p-8 reveal ${delayClasses[index]}`}>
              <p className="eyebrow">Capability 0{index + 1}</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight">{service.title}</h2>
              <p className="mt-3 text-sm leading-7 text-muted">{service.text}</p>
            </article>
          ))}
        </section>

        <section className="card-surface mt-12 bg-gradient-to-r from-accent/20 via-white/0 to-signal/20 p-8 md:p-10">
          <h2 className="text-3xl font-semibold md:text-4xl">Need a tailored engagement model?</h2>
          <p className="mt-3 max-w-2xl text-muted">
            We offer project-based builds, dedicated teams, and transformation programs aligned to your goals.
          </p>
          <Link href="/contact" className="btn-primary mt-7">
            Discuss your roadmap
          </Link>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ContactForm } from "@/components/contact-form";

export default function ContactPage() {
  return (
    <div className="page-shell">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-35" />
      <SiteHeader />
      <main className="section-shell py-16 md:py-20">
        <p className="eyebrow">Contact</p>
        <h1 className="mt-4 max-w-3xl text-5xl font-semibold leading-tight md:text-6xl">
          Let&apos;s build something meaningful together.
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-muted">
          Tell us your product or transformation goals and we&apos;ll propose a practical, high-impact path forward.
        </p>

        <section className="mt-12 grid gap-5 md:grid-cols-[0.85fr_1.15fr]">
          <article className="card-surface p-8">
            <h2 className="text-2xl font-semibold">How to engage</h2>
            <p className="mt-3 text-sm leading-7 text-muted">
              Start with a discovery conversation focused on outcomes, timeline, and constraints.
            </p>
            <div className="mt-6 space-y-3 text-sm">
              <p><span className="font-medium">Email:</span> contact@delibrix.com</p>
              <p><span className="font-medium">Focus:</span> Products, modernization, AI automation</p>
              <p><span className="font-medium">Model:</span> Project, dedicated team, strategic partnership</p>
            </div>
          </article>

          <article className="card-surface p-8">
            <h2 className="text-2xl font-semibold">Send your brief</h2>
            <ContactForm />
          </article>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

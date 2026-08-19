import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { FadeIn } from "@/components/motion";
import { ContactForm } from "@/components/contact-form";

export default function ContactPage() {
  return (
    <div className="page-shell">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(45,212,191,0.07)_0%,transparent_70%)]" />
      <div className="bg-dots pointer-events-none absolute inset-0 opacity-40" />
      <SiteHeader />
      <main className="section-shell pb-24 pt-32 md:pt-40">
        <FadeIn>
          <p className="eyebrow">Contact</p>
          <h1 className="mt-5 max-w-2xl text-5xl font-semibold leading-tight text-white md:text-6xl">
            Let&apos;s build something meaningful together.
          </h1>
          <p className="mt-5 max-w-xl text-lg text-[var(--muted-2)]">
            Tell us your product or transformation goals and we&apos;ll propose a practical, high-impact path forward.
          </p>
        </FadeIn>

        <div className="mt-12 grid gap-4 md:grid-cols-[0.85fr_1.15fr]">
          <FadeIn>
            <article className="card-surface h-full p-8">
              <h2 className="text-xl font-semibold text-white">How to engage</h2>
              <p className="mt-3 text-sm leading-7 text-[var(--muted-2)]">
                Start with a discovery conversation focused on outcomes, timeline, and constraints.
              </p>
              <div className="mt-8 space-y-4 text-sm">
                <div>
                  <p className="text-xs uppercase tracking-wider text-[var(--muted)]">Email</p>
                  <p className="mt-1 text-[var(--muted-2)]">contact@delibrix.com</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-[var(--muted)]">Focus areas</p>
                  <p className="mt-1 text-[var(--muted-2)]">Products · Modernization · AI automation</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-[var(--muted)]">Engagement model</p>
                  <p className="mt-1 text-[var(--muted-2)]">Project · Dedicated team · Strategic partnership</p>
                </div>
              </div>
            </article>
          </FadeIn>

          <FadeIn delay={0.1}>
            <article className="card-surface h-full p-8">
              <h2 className="text-xl font-semibold text-white">Send your brief</h2>
              <ContactForm />
            </article>
          </FadeIn>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

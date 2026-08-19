import Image from "next/image";
import Link from "next/link";

const links = [
  { href: "/services", label: "Services" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function SiteFooter() {
  return (
    <footer className="relative z-10 mt-20 border-t border-white/[0.07]">
      <div className="section-shell py-12">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <Link href="/" className="inline-flex items-center gap-2.5" aria-label="DELiBRiX home">
              <Image
                src="/logo-bgless.png"
                alt="DELiBRiX"
                width={228}
                height={64}
                className="h-8 w-auto md:h-9"
              />
              <span className="text-base font-semibold tracking-[0.12em] text-white">DELiBRiX</span>
            </Link>
            <p className="mt-3 max-w-xs text-sm leading-6 text-[var(--muted)]">
              Building intelligent solutions. Delivering impact.
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-[var(--muted)] transition hover:text-[var(--accent)]"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-white/[0.06] pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-[var(--muted)]">© {new Date().getFullYear()} DELiBRiX. All rights reserved.</p>
          <p className="text-xs text-[var(--muted)]">contact@delibrix.com</p>
        </div>
      </div>
    </footer>
  );
}

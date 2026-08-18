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
    <footer className="relative z-10 mt-16 border-t border-edge/70 py-10">
      <div className="section-shell flex flex-col gap-7 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <Link href="/" className="inline-flex items-center" aria-label="DELiBRiX home">
            <Image
              src="/logo-bgless.png"
              alt="DELiBRiX"
              width={228}
              height={64}
              className="h-10 w-auto md:h-12"
            />
          </Link>
          <p className="mt-2 max-w-md text-sm text-muted">
            AI-first software products and services built for measurable impact.
          </p>
        </div>
        <nav className="flex flex-wrap gap-5 text-sm text-muted">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-ink">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}

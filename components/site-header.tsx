import Image from "next/image";
import Link from "next/link";

const navItems = [
  { href: "/services", label: "Services" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="relative z-10 border-b border-edge/70 backdrop-blur-sm">
      <div className="section-shell py-5">
        <div className="flex items-center justify-between">
          <Link href="/" className="inline-flex items-center gap-3" aria-label="DELiBRiX home">
            <Image
              src="/logo-bgless.png"
              alt="DELiBRiX logo"
              width={260}
              height={72}
              priority
              className="h-14 w-auto md:h-16"
            />
            <span className="text-xl font-semibold tracking-[0.14em] text-ink md:text-2xl">
              DELiBRiX
            </span>
          </Link>
          <nav className="hidden items-center gap-7 md:flex">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="nav-link text-sm text-muted">
                {item.label}
              </Link>
            ))}
          </nav>
          <Link href="/contact" className="btn-primary hidden md:inline-flex">
            Let&apos;s talk
          </Link>
        </div>

        <nav className="mt-4 flex flex-wrap gap-x-5 gap-y-2 border-t border-edge/60 pt-3 text-sm text-muted md:hidden">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-ink">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

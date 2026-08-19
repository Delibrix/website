"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const navItems = [
  { href: "/services", label: "Services" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/[0.08] bg-[#080c12]/90 backdrop-blur-xl shadow-[0_1px_40px_rgba(0,0,0,0.6)]"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="section-shell">
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="inline-flex items-center gap-3" aria-label="DELiBRiX home">
            <Image
              src="/logo-bgless.png"
              alt="DELiBRiX logo"
              width={260}
              height={72}
              priority
              className="h-10 w-auto  md:h-11"
            />
            <span className="text-lg font-semibold tracking-[0.14em] text-white md:text-xl">
              DELiBRiX
            </span>
          </Link>

          <nav className="hidden items-center gap-7 md:flex">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="nav-link">
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link href="/contact" className="btn-primary hidden py-2 px-5 text-sm md:inline-flex">
              Let&apos;s talk
            </Link>
            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 rounded-lg border border-white/10 bg-white/5 md:hidden"
              aria-label="Toggle menu"
            >
              <span className={`block h-px w-5 bg-white transition-all ${mobileOpen ? "translate-y-[3px] rotate-45" : ""}`} />
              <span className={`block h-px w-5 bg-white transition-all ${mobileOpen ? "-translate-y-[3px] -rotate-45" : ""}`} />
            </button>
          </div>
        </div>

        {mobileOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col gap-1 border-t border-white/[0.08] pb-4 pt-3 md:hidden"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm text-[var(--muted-2)] transition hover:bg-white/5 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
            <Link href="/contact" onClick={() => setMobileOpen(false)} className="btn-primary mt-2 text-sm">
              Let&apos;s talk
            </Link>
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
}

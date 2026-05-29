"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const LINKS = [
  { href: "#features", label: "Features" },
  { href: "#dashboard", label: "Dashboard" },
  { href: "#pricing", label: "Pricing" },
  { href: "#testimonials", label: "Reviews" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#features");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[1000] border-b transition-[background,border-color,box-shadow] duration-[400ms] ${
        scrolled
          ? "border-line bg-white/90 shadow-soft backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-[68px] max-w-[1200px] items-center justify-between px-6">
        {/* Logo */}
        <a
          href="#home"
          className="flex shrink-0 items-center gap-2 text-xl font-bold tracking-tight text-navy"
        >
          <Image
            src="/images/logo.png"
            alt="Kairos logo"
            width={34}
            height={34}
            className="h-[34px] w-[34px] object-contain"
          />
          Kairos
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 md:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`rounded-[10px] px-4 py-2 text-sm font-medium transition-colors hover:bg-blue/[0.06] hover:text-ink ${
                  active === link.href
                    ? "bg-blue/[0.08] text-blue"
                    : "text-secondary"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="hidden shrink-0 items-center gap-3 md:flex">
          <a
            href="#"
            className="rounded-full bg-white px-6 py-[0.6rem] text-sm font-semibold text-navy shadow-[0_6px_18px_-6px_rgba(13,27,62,0.25),0_0_0_1px_rgba(13,27,62,0.04)] transition-transform hover:-translate-y-0.5"
          >
            Download App
          </a>
        </div>

        {/* Hamburger */}
        <button
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((o) => !o)}
          className="flex flex-col gap-[5px] p-2 md:hidden"
        >
          <span
            className={`block h-0.5 w-[22px] rounded bg-ink transition-all ${
              menuOpen ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-[22px] rounded bg-ink transition-all ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-[22px] rounded bg-ink transition-all ${
              menuOpen ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="flex flex-col gap-2 border-t border-line bg-white px-6 py-4 md:hidden">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="rounded-[10px] px-4 py-3 text-base font-medium text-secondary hover:bg-blue/[0.06] hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}

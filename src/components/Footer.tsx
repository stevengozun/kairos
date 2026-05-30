import Image from "next/image";
import { Container } from "./ui";

const COLUMNS = [
  {
    title: "Product",
    links: ["Features", "Pricing", "Dashboard", "Mobile App", "Integrations"],
  },
  {
    title: "Company",
    links: ["About Us", "Careers", "Press Kit", "Blog", "Contact"],
  },
  {
    title: "Resources",
    links: ["Documentation", "Help Centre", "Community", "API Reference", "Status Page"],
  },
  {
    title: "Security",
    links: ["Privacy Policy", "Terms of Service", "Cookie Policy", "Security", "Compliance"],
  },
];

const SOCIALS = [
  { label: "Twitter", d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" },
  { label: "Instagram", d: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" },
  { label: "LinkedIn", d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" },
  { label: "YouTube", d: "M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z" },
];

export default function Footer() {
  return (
    <footer className="bg-navy pb-8 pt-16 text-white">
      <Container>
        <div className="mb-12 grid gap-10 max-[1024px]:grid-cols-3 max-[640px]:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div className="max-[1024px]:col-span-full">
            <a href="#home" className="mb-4 flex items-center gap-2 text-xl font-bold text-white">
              <Image src="/images/logo.png" alt="Kairos logo" width={34} height={34} className="h-[34px] w-[34px] object-contain" />
              Kairos
            </a>
            <p className="mb-6 max-w-[220px] text-sm leading-relaxed text-white/50">
              Your all-in-one partner for smarter money management and steady
              wealth growth.
            </p>
            <div className="flex gap-3">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="group flex h-9 w-9 items-center justify-center rounded-[10px] border border-white/10 bg-white/[0.08] transition-[background,transform] hover:-translate-y-0.5 hover:border-blue hover:bg-blue"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-white/70 group-hover:fill-white">
                    <path d={s.d} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {COLUMNS.map((col) => (
            <nav key={col.title} aria-label={`${col.title} links`}>
              <div className="mb-5 text-xs font-semibold uppercase tracking-[0.1em] text-white/40">
                {col.title}
              </div>
              <ul className="flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-white/60 transition-colors hover:text-white">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex items-center justify-between border-t border-white/[0.08] pt-8 max-[640px]:flex-col max-[640px]:gap-4 max-[640px]:text-center">
          <p className="text-xs text-white/35">© 2026 Kairos, Inc. All rights reserved.</p>
          <div className="flex gap-6 max-[640px]:flex-wrap max-[640px]:justify-center max-[640px]:gap-3">
            {["Privacy", "Terms", "Cookies", "Sitemap"].map((l) => (
              <a key={l} href="#" className="text-xs text-white/35 transition-colors hover:text-white/70">
                {l}
              </a>
            ))}
          </div>
        </div>

        {/* Watermark */}
        <div
          aria-hidden
          className="mt-8 select-none text-center text-[clamp(4rem,12vw,9rem)] font-extrabold leading-none tracking-tight text-white/[0.04]"
        >
          Kairos
        </div>
      </Container>
    </footer>
  );
}

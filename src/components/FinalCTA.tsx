import Image from "next/image";
import Reveal from "./Reveal";
import AnimatedText from "./AnimatedText";
import { Container, SectionLabel } from "./ui";

export default function FinalCTA() {
  return (
    <section
      id="cta"
      aria-label="Call to action"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#EEF4FB_0%,#E8F0FD_60%,#EEF4FB_100%)] pt-24 text-center"
    >
      {/* Animated blobs */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute left-1/2 top-[-100px] h-[500px] w-[500px] -translate-x-1/2 animate-pulse-blob rounded-full bg-[radial-gradient(circle,rgba(59,110,248,0.16)_0%,transparent_70%)] blur-[80px]" />
        <div className="absolute bottom-[200px] left-[10%] h-[350px] w-[350px] animate-pulse-blob-slow rounded-full bg-[radial-gradient(circle,rgba(167,139,250,0.18)_0%,transparent_70%)] blur-[80px]" />
        <div className="absolute bottom-[180px] right-[8%] h-[280px] w-[280px] animate-pulse-blob rounded-full bg-[radial-gradient(circle,rgba(59,110,248,0.12)_0%,transparent_70%)] blur-[80px] [animation-delay:2s]" />
      </div>

      <Container>
        <div className="relative z-[1]">
          <Reveal>
            <SectionLabel>Get Started Today</SectionLabel>
          </Reveal>
          <AnimatedText
            as="h2"
            delay={0.1}
            className="mx-auto mb-8 max-w-[640px] text-[clamp(2rem,4.5vw,3.25rem)] font-extrabold leading-[1.1] tracking-tight text-navy"
            text={"Step Into Full Control of\nYour Financial Future"}
          />
          <Reveal delay={2} className="mb-16 flex items-center justify-center gap-4 max-[480px]:flex-col">
            <a
              href="#"
              className="rounded-full border border-navy bg-navy px-[2.4rem] py-[0.95rem] text-base font-semibold text-white transition-all hover:-translate-y-0.5 hover:border-navy-light hover:bg-navy-light hover:shadow-[0_12px_30px_rgba(13,27,62,0.28)] max-[480px]:w-full"
            >
              Download App
            </a>
            <a
              href="#"
              className="rounded-full border border-navy/[0.08] bg-white px-[2.4rem] py-[0.95rem] text-base font-semibold text-navy shadow-soft transition-all hover:-translate-y-0.5 hover:text-blue hover:shadow-card max-[480px]:w-full"
            >
              Get Started
            </a>
          </Reveal>

          {/* Phone + floating cards */}
          <Reveal delay={3} className="relative flex justify-center">
            {/* Performance card */}
            <div className="absolute left-[160px] top-[8%] z-[3] w-[240px] animate-float-slow rounded-card border border-white/40 bg-white/[0.16] px-[18px] py-4 text-left shadow-[0_12px_36px_rgba(13,27,62,0.08)] backdrop-blur-[10px] [animation-delay:0.4s] max-sm:left-0 max-sm:top-[2%] max-sm:w-[190px]">
              <div className="mb-3 flex items-center justify-between gap-2.5">
                <span className="text-xs font-medium text-secondary">Performance</span>
                <span className="text-[15px] font-bold tracking-tight text-navy">$3,654.08</span>
              </div>
              <div className="relative h-14">
                <svg viewBox="0 0 150 56" fill="none" preserveAspectRatio="none" className="h-full w-full" aria-hidden>
                  <defs>
                    <linearGradient id="ctaPerfFill" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#22C55E" stopOpacity="0.22" />
                      <stop offset="100%" stopColor="#22C55E" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path d="M2 44 L20 38 L38 42 L56 30 L74 34 L92 20 L110 26 L128 14 L148 18 L148 56 L2 56 Z" fill="url(#ctaPerfFill)" />
                  <path d="M2 44 L20 38 L38 42 L56 30 L74 34 L92 20 L110 26 L128 14 L148 18" stroke="#22C55E" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="absolute left-[46%] top-1 -translate-x-1/2 whitespace-nowrap rounded-full bg-green px-[7px] py-0.5 text-[9px] font-semibold text-white">
                  $3,654.08
                </span>
              </div>
            </div>

            {/* Exchange rate card */}
            <div className="absolute right-[18%] top-[38%] z-[3] w-[200px] animate-float-slow rounded-card border border-white/40 bg-white/[0.16] px-[18px] py-4 text-left shadow-[0_12px_36px_rgba(13,27,62,0.08)] backdrop-blur-[10px] [animation-delay:1s] max-sm:right-0 max-sm:w-[168px]">
              <div className="mb-2.5 flex items-start justify-between">
                <span className="text-xs font-medium text-secondary">Exchange Rate</span>
                <span className="flex h-[26px] w-[26px] shrink-0 items-center justify-center rounded-full bg-blue/10 text-blue">
                  <svg width="13" height="13" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 14L14 6M7 6h7v7" />
                  </svg>
                </span>
              </div>
              <div className="whitespace-nowrap text-sm font-medium text-secondary">
                1USD = <strong className="font-bold text-navy">125.689</strong> BDT
              </div>
            </div>

            <div className="relative z-[2] animate-float">
              <Image
                src="/images/portfolio-mockup.png"
                alt="Kairos portfolio overview screen shown on an iPhone"
                width={480}
                height={760}
                className="h-auto w-[clamp(340px,36vw,480px)] -translate-x-[105px] drop-shadow-[0_30px_70px_rgba(13,27,62,0.30)]"
              />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

import Image from "next/image";
import Reveal from "./Reveal";
import AnimatedText from "./AnimatedText";
import { Container, SectionLabel } from "./ui";

const BENEFITS = [
  "Live updates across every account and investment you hold",
  "Connected savings goals with smart suggestions on what to set aside",
  "Fewer scattered payment tools thanks to one unified hub",
  "Sync across all your devices so everything stays current everywhere",
  "Quick monthly reports with financial statements you can export anytime",
];

export default function FinanceSimple() {
  return (
    <section
      id="finance"
      aria-label="Finance features"
      className="relative overflow-hidden bg-[linear-gradient(165deg,#F3F7FF_0%,#E9F1FF_55%,#EEF4FB_100%)] py-24"
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,#EEF4FB_0%,transparent_14%,transparent_86%,#EEF4FB_100%)]" />
      <div className="pointer-events-none absolute left-[-140px] top-[18%] z-0 h-[460px] w-[460px] animate-drift-a rounded-full bg-[radial-gradient(circle,rgba(167,139,250,0.18)_0%,transparent_70%)] blur-[70px]" />

      <Container>
        <div className="grid items-center gap-20 lg:grid-cols-2">
          {/* Left */}
          <Reveal>
            <SectionLabel>For Everyone</SectionLabel>
            <AnimatedText
              as="h2"
              className="text-[2rem] font-bold leading-tight tracking-tight text-ink sm:text-[2.75rem]"
              text={"Money Made\nSimple for Everyone"}
            />

            <ul className="mt-8 flex flex-col gap-4">
              {BENEFITS.map((text) => (
                <li key={text} className="flex items-start gap-4">
                  <div className="mt-0.5 flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full bg-green-pale">
                    <svg viewBox="0 0 12 12" fill="none" stroke="#22C55E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-3 w-3">
                      <path d="M2 6l3 3 5-5" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium leading-normal text-ink">{text}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Right */}
          <Reveal delay={2} className="relative flex h-[460px] items-center justify-center lg:h-[520px]">
            <div className="relative z-[2] animate-float [animation-delay:0.5s]">
              <Image
                src="/images/earning-mockup.png"
                alt="Kairos Earning overview screen shown on an iPhone"
                width={460}
                height={920}
                className="h-[clamp(360px,46vw,460px)] w-auto max-w-full drop-shadow-[0_30px_60px_rgba(13,27,62,0.28)]"
              />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

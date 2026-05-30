import Image from "next/image";
import Reveal from "./Reveal";
import AnimatedText from "./AnimatedText";
import { Container, SectionLabel } from "./ui";

const FEATURES = [
  {
    tint: "bg-blue/10",
    fill: "#3B6EF8",
    path: "M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z",
    title: "Live Market Analysis",
    desc: "Follow your portfolio as it moves with up-to-the-second market data and smart insights.",
  },
  {
    tint: "bg-green/10",
    fill: "#22C55E",
    path: "M10 2L3 5v5c0 4.4 3 8.5 7 9.5 4-1 7-5.1 7-9.5V5L10 2zm-1 9.4L7.4 9.8l-1 1L9 13l5-5-1-1-4 4z",
    title: "Encrypted Cloud Sync",
    desc: "Bank-level encryption keeps every device in sync the moment anything changes.",
  },
  {
    tint: "bg-purple/10",
    fill: "#A78BFA",
    path: "M10 2a6 6 0 00-6 6v2.5l-1.5 1.5V14h15v-2l-1.5-1.5V8a6 6 0 00-6-6zm0 16a2 2 0 01-2-2h4a2 2 0 01-2 2z",
    title: "Smart Spending Alerts",
    desc: "Helpful nudges and custom limits keep your spending right where you want it.",
  },
  {
    tint: "bg-orange/10",
    fill: "#F97316",
    path: "M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z",
    title: "One-Tap Bank Linking",
    desc: "Securely link every bank account in a single tap — no hassle required.",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      aria-label="Features"
      className="relative overflow-hidden bg-white py-12"
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,#EEF4FB_0%,#FFFFFF_15%,#FFFFFF_85%,#EEF4FB_100%)]" />
      <div className="pointer-events-none absolute right-[-130px] top-[26%] z-0 h-[420px] w-[420px] animate-drift-b rounded-full bg-[radial-gradient(circle,rgba(59,110,248,0.12)_0%,transparent_70%)] blur-[66px]" />

      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left: phone */}
          <Reveal className="relative flex h-[460px] items-center justify-center lg:order-1 lg:h-[540px] max-lg:order-none">
            <div className="absolute h-[320px] w-[320px] animate-pulse-blob rounded-full bg-[radial-gradient(circle,rgba(59,110,248,0.14)_0%,transparent_70%)] blur-[48px]" />
            <div className="relative z-[2] animate-float">
              <Image
                src="/images/send-money-mockup.png"
                alt="Kairos Send Money screen shown on an iPhone"
                width={900}
                height={900}
                className="h-auto w-[clamp(620px,64vw,900px)] max-w-[135%] -translate-x-[70px] drop-shadow-[0_30px_60px_rgba(13,27,62,0.28)]"
              />
            </div>
          </Reveal>

          {/* Right: content */}
          <Reveal delay={2} className="lg:order-2">
            <SectionLabel>Why Kairos</SectionLabel>
            <AnimatedText
              as="h2"
              className="text-[2rem] font-bold leading-tight tracking-tight text-ink sm:text-[2.75rem]"
              text={"Effortless to Use,\nEngineered to Grow"}
            />
            <p className="mt-4 text-lg leading-relaxed text-secondary">
              All the tools to organise, grow, and protect your money — wrapped
              in a clear, easy interface anyone can pick up.
            </p>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {FEATURES.map((f) => (
                <div key={f.title} className="flex flex-col gap-3 max-lg:items-center max-lg:text-center">
                  <div className={`flex h-10 w-10 items-center justify-center rounded-[10px] ${f.tint}`}>
                    <svg viewBox="0 0 20 20" fill={f.fill} className="h-5 w-5">
                      <path fillRule="evenodd" clipRule="evenodd" d={f.path} />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-navy">{f.title}</div>
                    <p className="text-xs leading-relaxed text-secondary">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

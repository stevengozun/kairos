import Image from "next/image";
import AnimatedText from "./AnimatedText";

function Sparkline({ up }: { up: boolean }) {
  const points = up
    ? "1,20 12,15 22,17 33,9 44,11 59,3"
    : "1,5 12,9 22,7 33,15 44,13 59,22";
  return (
    <svg
      className="h-6 w-[52px] shrink-0"
      viewBox="0 0 60 26"
      fill="none"
      preserveAspectRatio="none"
      aria-hidden
    >
      <polyline
        points={points}
        stroke={up ? "#22C55E" : "#EF4444"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function VisitCard({
  value,
  up,
  className,
}: {
  value: string;
  up: boolean;
  className: string;
}) {
  return (
    <div
      className={`absolute z-[3] flex w-[180px] items-center gap-3 rounded-card border border-white/70 bg-white/75 px-4 py-3 shadow-[0_16px_44px_rgba(13,27,62,0.14)] backdrop-blur-md ${className}`}
    >
      <Sparkline up={up} />
      <div>
        <div className="flex items-center gap-[3px] text-[17px] font-bold tracking-tight text-navy">
          {value}{" "}
          <span className={up ? "text-[11px] text-green" : "text-[11px] text-red"}>
            {up ? "↗" : "↘"}
          </span>
        </div>
        <div className="mt-0.5 text-[9px] text-muted">Visitors this month</div>
      </div>
    </div>
  );
}

const AVATARS = [
  "linear-gradient(135deg,#3B6EF8,#6B9BFF)",
  "linear-gradient(135deg,#A78BFA,#C4B5FD)",
  "linear-gradient(135deg,#22C55E,#86EFAC)",
  "linear-gradient(135deg,#F97316,#FCA87A)",
];

export default function Hero() {
  return (
    <section
      id="home"
      aria-label="Hero"
      className="relative z-0 h-screen min-h-[640px] overflow-hidden bg-[linear-gradient(160deg,#EEF4FB_0%,#F5F9FF_40%,#E8F0FD_100%)]"
    >
      {/* Drifting cloud layers */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden>
        <div className="absolute -inset-x-[10%] -inset-y-[8%] animate-cloud bg-[url('/images/clouds.png')] bg-cover bg-[center_top] bg-no-repeat" />
        <div className="absolute -inset-x-[10%] -inset-y-[8%] scale-[1.15] animate-cloud-rev bg-[url('/images/clouds.png')] bg-cover bg-[center_top] bg-no-repeat opacity-45" />
      </div>

      <div className="relative z-[1] mx-auto h-screen w-full max-w-[1200px] px-6">
        {/* Top text row */}
        <div className="pointer-events-none absolute left-1/2 top-[clamp(110px,16vh,190px)] z-[4] flex w-full max-w-[1200px] -translate-x-1/2 flex-col items-center gap-8 px-6 text-center lg:flex-row lg:items-start lg:justify-between lg:text-left">
          <AnimatedText
            as="h1"
            className="pointer-events-auto max-w-[480px] text-[clamp(2.75rem,5.5vw,4.25rem)] font-extrabold leading-[1.05] tracking-tight text-navy lg:max-w-[480px]"
            text={"Take Charge of\nYour Money"}
          />

          <div className="pointer-events-auto flex max-w-[320px] flex-col items-center pt-3 lg:items-start">
            <p className="text-base leading-relaxed text-secondary">
              One connected finance app to watch your spending, build your
              savings, and invest without the guesswork.
            </p>
            <a
              href="#"
              className="mt-6 rounded-full border border-navy/[0.18] px-[2.4rem] py-[0.85rem] text-sm font-semibold text-navy transition-all hover:-translate-y-0.5 hover:border-blue/45 hover:bg-navy/[0.04] hover:text-blue"
            >
              Get Start
            </a>
          </div>
        </div>

        {/* Phone + floating cards */}
        <div className="absolute inset-0 z-[1] flex items-end justify-center" aria-hidden>
          <div className="relative flex h-full w-[min(470px,92vw)] items-end justify-center">
            <VisitCard
              value="1,235"
              up
              className="left-[-40px] top-[40%] animate-float-slow [animation-delay:0.5s] max-lg:left-auto max-lg:right-[2%] max-sm:right-0 max-sm:top-[18%]"
            />
            <VisitCard
              value="456"
              up={false}
              className="left-[-64px] top-[58%] animate-float-slow [animation-delay:0.8s] max-lg:left-[2%] max-sm:hidden"
            />

            {/* Transaction limit card */}
            <div className="absolute bottom-[12%] left-[-40px] z-[3] w-[190px] animate-float-slow rounded-card border border-white/70 bg-white/75 px-4 py-[14px] shadow-[0_16px_44px_rgba(13,27,62,0.14)] backdrop-blur-md [animation-delay:1.5s] max-lg:left-[2%] max-sm:hidden">
              <div className="mb-2 text-[10px] text-muted">Transaction Limit</div>
              <div className="flex items-center justify-between gap-[10px]">
                <div className="whitespace-nowrap text-[19px] font-bold tracking-tight text-navy">
                  $15k <span className="ml-0.5 text-[9px] font-medium text-muted">Per Day</span>
                </div>
                <div className="flex">
                  {AVATARS.map((bg, i) => (
                    <span
                      key={i}
                      className="h-6 w-6 shrink-0 rounded-full border-2 border-white first:ml-0 [margin-left:-9px]"
                      style={{ background: bg }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Investments donut card */}
            <div className="absolute right-[-90px] top-[500px] z-[3] flex w-[190px] animate-float-slow flex-col gap-3 rounded-card border border-white/70 bg-white/75 px-4 py-[14px] shadow-[0_16px_44px_rgba(13,27,62,0.14)] backdrop-blur-md [animation-delay:1s] max-lg:right-[2%]">
              <div className="relative h-[84px] w-[84px] self-center">
                <svg viewBox="0 0 42 42" className="h-[84px] w-[84px]" aria-hidden>
                  <circle cx="21" cy="21" r="15.915" fill="none" stroke="#E9EEF6" strokeWidth="5" />
                  <g transform="rotate(-90 21 21)">
                    <circle cx="21" cy="21" r="15.915" fill="none" stroke="#0D1B3E" strokeWidth="5" strokeDasharray="65 35" />
                    <circle cx="21" cy="21" r="15.915" fill="none" stroke="#3B6EF8" strokeWidth="5" strokeDasharray="20 80" strokeDashoffset="-65" />
                    <circle cx="21" cy="21" r="15.915" fill="none" stroke="#F97316" strokeWidth="5" strokeDasharray="15 85" strokeDashoffset="-85" />
                  </g>
                </svg>
                <span className="absolute left-0.5 top-0 text-[8px] font-bold text-navy">15%</span>
                <span className="absolute right-0.5 top-0 text-[8px] font-bold text-navy">20%</span>
                <span className="absolute bottom-1.5 left-1.5 text-[8px] font-bold text-navy">65%</span>
              </div>
              <ul className="flex flex-col gap-1.5">
                {[
                  ["#F97316", "Mutual Fund", "$1,000"],
                  ["#0D1B3E", "Stocks", "$7,250"],
                  ["#3B6EF8", "Property Investment", "$1,000"],
                ].map(([c, name, amt]) => (
                  <li key={name} className="flex items-center gap-[7px] text-[10px] text-secondary">
                    <i className="h-2 w-2 shrink-0 rounded-sm" style={{ background: c }} />
                    <span className="flex-1">{name}</span>
                    <b className="font-bold text-navy">{amt}</b>
                  </li>
                ))}
              </ul>
            </div>

            {/* Phone */}
            <div className="relative z-[2] flex shrink-0 items-end">
              <Image
                src="/images/phone-mockup.png"
                alt="Kairos app shown on an iPhone held in hand"
                width={660}
                height={900}
                priority
                className="h-auto w-[clamp(280px,38vw,520px)] max-w-[150%] translate-x-[28%] drop-shadow-[0_30px_70px_rgba(13,27,62,0.25)]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

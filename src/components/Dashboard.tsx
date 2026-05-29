import Reveal from "./Reveal";
import AnimatedText from "./AnimatedText";
import { Container, SectionLabel } from "./ui";

const CAPTION = {
  title: "Stay on Top of Every Transaction",
  body: "Monitor subscriptions, upcoming bills, and past payments so no due date ever slips by.",
};

function Caption() {
  return (
    <div className="mt-auto pt-5">
      <div className="mb-1.5 text-lg font-bold text-navy">{CAPTION.title}</div>
      <p className="text-sm leading-relaxed text-muted">{CAPTION.body}</p>
    </div>
  );
}

const BARS = [
  { day: "Sun", h: 41 },
  { day: "Mon", h: 64 },
  { day: "Tue", h: 40 },
  { day: "Wed", h: 86, active: true },
  { day: "Thu", h: 61 },
  { day: "Fri", h: 36 },
  { day: "Sat", h: 48 },
];

const BILLS = [
  { logo: "P", color: "#1B3B8B", name: "Paypal", date: "Today, 5:32 PM", amt: "+$80.89", pos: true },
  { logo: "G", color: "#EA4335", name: "Google one", date: "Today, 2:40 PM", amt: "−$10.99" },
  { logo: "", name: "Apple", date: "Yesterday, 6:51 PM", amt: "−$15.00", apple: true },
  { logo: "a", color: "#FF9900", name: "Amazon", date: "May 5, 2025", amt: "−$9.99" },
  { logo: "●", color: "#EA4C89", name: "Dribbble Pro", date: "May 5, 2025", amt: "−$12.80" },
];

const cardBase =
  "flex flex-col overflow-hidden rounded-card border border-line bg-[#F7FAFE] p-6 shadow-soft transition-[transform,box-shadow] duration-[400ms] hover:-translate-y-1.5 hover:shadow-lift";

export default function Dashboard() {
  return (
    <section
      id="dashboard"
      aria-label="Dashboard features"
      className="relative block overflow-hidden bg-bg py-24"
    >
      <div className="pointer-events-none absolute left-[-120px] top-[12%] z-0 h-[440px] w-[440px] animate-drift-a rounded-full bg-[radial-gradient(circle,rgba(59,110,248,0.10)_0%,transparent_70%)] blur-[72px]" />
      <div className="pointer-events-none absolute bottom-[8%] right-[-130px] z-0 h-[380px] w-[380px] animate-drift-b rounded-full bg-[radial-gradient(circle,rgba(167,139,250,0.13)_0%,transparent_70%)] blur-[66px]" />

      <Container>
        <Reveal className="mb-16 text-center">
          <SectionLabel>Dashboard</SectionLabel>
          <AnimatedText
            as="h2"
            className="mx-auto max-w-[700px] text-center text-[2rem] font-bold leading-tight tracking-tight text-ink sm:text-[2.75rem]"
            text={"Powerful Money Management,\nMade Effortless"}
          />
        </Reveal>

        <div className="mx-auto grid max-w-[1040px] gap-6 sm:grid-cols-2">
          {/* Card 1: Wallet Analytics */}
          <Reveal delay={1} className={cardBase}>
            <div className="mb-5 flex items-start justify-between">
              <div>
                <div className="text-base font-bold text-navy">Wallet Analytics</div>
                <div className="mt-0.5 text-xs text-muted">Income vs Expenses</div>
              </div>
              <div className="flex gap-4 text-xs text-secondary">
                <span className="inline-flex items-center gap-1.5">
                  <i className="h-[9px] w-[9px] rounded-full bg-navy" />
                  Income
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <i className="h-[9px] w-[9px] rounded-full bg-[#9DC0FF]" />
                  Expenses
                </span>
              </div>
            </div>

            <div className="relative h-[190px] pl-[46px]">
              <div className="absolute inset-0 bottom-[22px] left-[46px] flex flex-col justify-between">
                {[8000, 6000, 4000, 2000, 0].map((y) => (
                  <span
                    key={y}
                    className="relative border-t border-dashed border-line text-[10px] text-muted before:absolute before:-left-[44px] before:-top-1.5 before:w-[38px] before:text-right before:content-[attr(data-y)]"
                    data-y={y}
                  />
                ))}
              </div>
              <div className="relative flex h-full items-end justify-between gap-[4%]">
                {BARS.map((b) => (
                  <div key={b.day} className="flex h-full flex-1 flex-col items-center justify-end">
                    <div
                      className={`relative w-full max-w-[30px] rounded-t-lg ${
                        b.active
                          ? "bg-[linear-gradient(160deg,#E8F0FD_0%,#D6E4FF_100%)]"
                          : "bg-[linear-gradient(180deg,#BFD6FF_0%,#EAF2FF_100%)]"
                      }`}
                      style={{ height: `${b.h}%` }}
                    >
                      {b.active && (
                        <span className="absolute -top-[26px] left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-navy px-2 py-[3px] text-[11px] font-bold text-white">
                          $5109
                        </span>
                      )}
                    </div>
                    <span className="mt-2 text-[11px] text-secondary">{b.day}</span>
                  </div>
                ))}
              </div>
            </div>

            <Caption />
          </Reveal>

          {/* Card 2: Quick Exchange */}
          <Reveal delay={2} className={cardBase}>
            <div className="mb-5 flex items-start justify-between">
              <div className="text-xl font-bold text-navy">Quick Exchange</div>
              <button aria-label="Add" className="h-7 w-7 rounded-md text-xl leading-none text-navy">
                +
              </button>
            </div>

            <div className="relative flex flex-col">
              <div className="rounded-[10px] border border-line bg-white px-4 py-[14px]">
                <div className="mb-2 flex justify-between text-xs text-muted">
                  <span>Sell</span>
                  <span>
                    Available: <strong className="text-navy">3,200 USDT</strong>
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-navy">1,500</span>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-white px-3 py-[5px] text-sm font-semibold text-navy">
                    <i className="flex h-[18px] w-[18px] items-center justify-center rounded-full bg-[linear-gradient(135deg,#9945FF,#14F195)] text-[11px] text-white">
                      ◎
                    </i>
                    SOL ⌄
                  </span>
                </div>
              </div>

              <div className="absolute left-1/2 top-1/2 z-[2] flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-white text-lg text-navy shadow-soft">
                ⇅
              </div>

              <div className="mt-2.5 rounded-[10px] border border-line bg-white px-4 py-[14px]">
                <div className="mb-2 flex justify-between text-xs text-muted">
                  <span>Buy</span>
                  <span>
                    Estimate Fee: <strong className="text-navy">2.5 USDT</strong>
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-navy">0,01587</span>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-white px-3 py-[5px] text-sm font-semibold text-navy">
                    <i className="flex h-[18px] w-[18px] items-center justify-center rounded-full bg-[#C2A633] text-[11px] text-white">
                      Ð
                    </i>
                    DOGE ⌄
                  </span>
                </div>
              </div>

              <button className="mt-4 w-full rounded-full bg-navy py-[0.85rem] text-base font-semibold text-white transition-[background,transform] hover:-translate-y-px hover:bg-navy-light">
                Exchange
              </button>
            </div>

            <Caption />
          </Reveal>

          {/* Card 3: Payment method */}
          <Reveal delay={3} className={cardBase}>
            <div className="text-xl font-bold text-navy">We&apos;re paying for</div>
            <div className="mt-3 flex items-center gap-2.5 rounded-[10px] border border-line bg-white px-[14px] py-2.5">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-blue text-[11px] font-bold text-white">
                JJ
              </span>
              <span className="font-semibold text-navy">Jacob Jones</span>
              <span className="ml-auto text-muted">⌄</span>
            </div>

            <div className="mt-[18px] text-xl font-bold text-navy">Pay with</div>
            <div className="mt-2.5 flex gap-2.5">
              <label className="flex flex-1 items-center justify-between rounded-[10px] border border-navy bg-white px-[14px] py-3 font-medium text-navy">
                Card
                <span className="h-4 w-4 rounded-full border-2 border-navy bg-[radial-gradient(circle,#0D1B3E_40%,transparent_45%)]" />
              </label>
              <label className="flex flex-1 items-center justify-between rounded-[10px] border border-line bg-white px-[14px] py-3 font-medium text-navy">
                Bank Account
                <span className="h-4 w-4 rounded-full border-2 border-line" />
              </label>
            </div>

            <div className="mt-2.5 rounded-[10px] border border-line bg-white">
              <div className="border-b border-line px-[14px] py-3 tracking-[1px] text-navy">
                1234 1234 1234 1234
              </div>
              <div className="flex items-center gap-2.5 px-[14px] py-3 text-sm text-muted">
                <span>Expiration</span>
                <span>MM/YY</span>
                <span>CVC</span>
                <span>123</span>
                <svg width="20" height="14" viewBox="0 0 20 14" fill="none" stroke="#9AA7BD" strokeWidth="1.5" className="ml-auto">
                  <rect x="1" y="1" width="18" height="12" rx="2" />
                  <path d="M1 5h18" />
                </svg>
              </div>
            </div>

            <button className="mt-4 w-full rounded-full bg-navy py-[0.85rem] text-base font-semibold text-white transition-[background,transform] hover:-translate-y-px hover:bg-navy-light">
              Get Start
            </button>

            <Caption />
          </Reveal>

          {/* Card 4: Upcoming Bills */}
          <Reveal delay={1} className={cardBase}>
            <div className="mb-5 flex items-start justify-between">
              <div className="text-xl font-bold text-navy">Upcoming Bills</div>
              <a href="#" className="text-sm font-medium text-blue">
                See all ›
              </a>
            </div>

            <div className="flex flex-col">
              {BILLS.map((b) => (
                <div
                  key={b.name}
                  className="flex items-center gap-3 border-b border-line py-3 last:border-b-0"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] border border-line bg-white text-base font-extrabold" style={{ color: b.color }}>
                    {b.apple ? (
                      <svg width="15" height="17" viewBox="0 0 24 24" fill="#111">
                        <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701z" />
                      </svg>
                    ) : (
                      b.logo
                    )}
                  </span>
                  <div className="flex-1">
                    <div className="text-sm font-semibold text-navy">{b.name}</div>
                    <div className="text-xs text-muted">{b.date}</div>
                  </div>
                  <span className={`text-sm font-bold ${b.pos ? "text-green" : "text-navy"}`}>
                    {b.amt}
                  </span>
                </div>
              ))}
            </div>

            <Caption />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

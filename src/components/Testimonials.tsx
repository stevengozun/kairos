import Reveal from "./Reveal";
import AnimatedText from "./AnimatedText";
import { Container, SectionLabel } from "./ui";

const REVIEWS = [
  {
    text: "Kairos completely changed the way I handle my money. The live tracking and smart alerts have helped me save far more than I expected — I could never go back to my old routine.",
    initials: "EG",
    gradient: "linear-gradient(135deg,#3B6EF8,#6B9BFF)",
    name: "Emily George",
    role: "Financial Analyst",
  },
  {
    text: "The portfolio tracking is genuinely excellent. Having every investment in one view, plus the AI insights, has noticeably lifted my returns — the Pro plan pays for itself.",
    initials: "LC",
    gradient: "linear-gradient(135deg,#A78BFA,#C4B5FD)",
    name: "Logan Cello",
    role: "Private Investor",
  },
  {
    text: "Running a small business made finances a constant headache — until Kairos. The team features and expense tracking on the Business plan save me hours every single week.",
    initials: "EM",
    gradient: "linear-gradient(135deg,#22C55E,#86EFAC)",
    name: "Evan Mihael",
    role: "Business Owner",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      aria-label="Customer testimonials"
      className="relative overflow-hidden bg-white py-12"
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,#EEF4FB_0%,#FFFFFF_12%,#FFFFFF_88%,#EEF4FB_100%)]" />
      <div className="pointer-events-none absolute left-1/2 top-[30%] z-0 -ml-[260px] h-[520px] w-[520px] animate-drift-a rounded-full bg-[radial-gradient(circle,rgba(59,110,248,0.08)_0%,transparent_70%)] blur-[80px]" />

      <Container>
        <Reveal className="mb-16 text-center">
          <SectionLabel>Reviews</SectionLabel>
          <AnimatedText
            as="h2"
            className="mx-auto max-w-[700px] text-center text-[2rem] font-bold leading-tight tracking-tight text-ink sm:text-[2.75rem]"
            text={"Loved by Seasoned Investors\nand Everyday Savers"}
          />
        </Reveal>

        <div className="grid gap-6 md:grid-cols-3">
          {REVIEWS.map((r, i) => (
            <Reveal
              key={r.name}
              delay={(i + 1) as 1 | 2 | 3}
              as="article"
              className="relative rounded-xl2 border border-line bg-white p-8 shadow-soft transition-[transform,box-shadow] duration-[400ms] hover:-translate-y-1.5 hover:shadow-lift"
            >
              <span className="pointer-events-none absolute right-6 top-5 font-serif text-[64px] leading-none text-blue-pale">
                &ldquo;
              </span>
              <div className="mb-4 flex gap-[3px] text-sm text-yellow">
                {"★★★★★".split("").map((s, j) => (
                  <span key={j} aria-hidden>
                    {s}
                  </span>
                ))}
              </div>
              <p className="mb-6 text-sm leading-relaxed text-secondary">{r.text}</p>
              <div className="flex items-center gap-3">
                <div
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-base font-bold text-white"
                  style={{ background: r.gradient }}
                >
                  {r.initials}
                </div>
                <div>
                  <div className="text-sm font-semibold text-navy">{r.name}</div>
                  <div className="text-xs text-muted">{r.role}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

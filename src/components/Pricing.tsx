"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import AnimatedText from "./AnimatedText";
import { Container, SectionLabel } from "./ui";

type Plan = {
  id: string;
  label: string;
  name: string;
  desc: string;
  monthly: number;
  annual: number;
  features: { text: string; on: boolean }[];
  popular?: boolean;
};

const PLANS: Plan[] = [
  {
    id: "free",
    label: "Starter",
    name: "Free",
    desc: "A simple way to start tracking your personal finances.",
    monthly: 0,
    annual: 0,
    features: [
      { text: "Up to 2 bank accounts", on: true },
      { text: "Basic transaction tracking", on: true },
      { text: "Monthly budget reports", on: true },
      { text: "Stock portfolio tracking", on: false },
      { text: "Priority customer support", on: false },
    ],
  },
  {
    id: "pro",
    label: "Pro",
    name: "Pro Plan",
    desc: "For people ready to take their wealth to the next level.",
    monthly: 12,
    annual: 10,
    popular: true,
    features: [
      { text: "Unlimited bank accounts", on: true },
      { text: "Real-time stock tracking", on: true },
      { text: "Smart budget alerts & AI insights", on: true },
      { text: "Advanced analytics dashboard", on: true },
      { text: "Priority email support", on: true },
    ],
  },
  {
    id: "business",
    label: "Business",
    name: "Business",
    desc: "For teams and companies handling more complex finances.",
    monthly: 29,
    annual: 23,
    features: [
      { text: "Up to 10 team members", on: true },
      { text: "Business expense tracking", on: true },
      { text: "API access & integrations", on: true },
      { text: "Custom financial reports", on: true },
      { text: "Dedicated account manager", on: true },
    ],
  },
];

function Check({ on, popular }: { on: boolean; popular?: boolean }) {
  const bg = !on
    ? "bg-line"
    : popular
      ? "bg-blue"
      : "bg-green-pale";
  const stroke = !on ? "#9BA8C4" : popular ? "#FFFFFF" : "#22C55E";
  return (
    <div className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${bg}`}>
      <svg viewBox="0 0 12 12" fill="none" stroke={stroke} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-[11px] w-[11px]">
        <path d="M2 6l3 3 5-5" />
      </svg>
    </div>
  );
}

function PriceRow({ amount }: { amount: number }) {
  return (
    <div className="mb-5 flex items-end gap-1">
      <span className="pb-1 text-xl font-bold text-navy">$</span>
      <span className="text-5xl font-extrabold leading-none tracking-tighter text-navy">
        {amount}
      </span>
      <span className="pb-1.5 text-sm text-muted">/month</span>
    </div>
  );
}

function FeatureList({ plan }: { plan: Plan }) {
  return (
    <>
      <div className="mb-4 flex items-center justify-center gap-3 text-xs font-semibold uppercase tracking-[0.1em] text-muted before:h-px before:flex-1 before:bg-line after:h-px after:flex-1 after:bg-line">
        Features
      </div>
      <ul className="flex flex-col gap-2.5">
        {plan.features.map((f) => (
          <li
            key={f.text}
            className={`flex items-center gap-3 text-sm ${
              plan.popular ? "text-navy/80" : "text-secondary"
            } ${!f.on ? "opacity-40" : ""}`}
          >
            <Check on={f.on} popular={plan.popular} />
            {f.text}
          </li>
        ))}
      </ul>
    </>
  );
}

export default function Pricing() {
  const [annual, setAnnual] = useState(false);

  return (
    <section
      id="pricing"
      aria-label="Pricing plans"
      className="relative block overflow-hidden bg-bg pb-24 pt-16"
    >
      <div className="pointer-events-none absolute right-[-140px] top-[14%] z-0 h-[460px] w-[460px] animate-drift-b rounded-full bg-[radial-gradient(circle,rgba(59,110,248,0.11)_0%,transparent_70%)] blur-[72px]" />
      <div className="pointer-events-none absolute bottom-[10%] left-[-120px] z-0 h-[380px] w-[380px] animate-drift-a rounded-full bg-[radial-gradient(circle,rgba(167,139,250,0.12)_0%,transparent_70%)] blur-[66px]" />

      <Container>
        <Reveal className="mb-6 text-center">
          <SectionLabel>Pricing</SectionLabel>
          <AnimatedText
            as="h2"
            className="mx-auto max-w-[700px] text-center text-[2rem] font-bold leading-tight tracking-tight text-ink sm:text-[2.75rem]"
            text={"Flexible Plans for Everyone,\nWherever You Are"}
          />
        </Reveal>

        {/* Toggle */}
        <div className="mb-8 flex items-center justify-center gap-3">
          <button
            onClick={() => setAnnual(false)}
            className={`text-sm transition-colors ${
              !annual ? "font-semibold text-navy" : "font-medium text-secondary"
            }`}
          >
            Monthly
          </button>
          <button
            role="switch"
            aria-checked={annual}
            aria-label="Toggle annual billing"
            onClick={() => setAnnual((a) => !a)}
            className={`relative h-[26px] w-12 rounded-full transition-colors ${
              annual ? "bg-blue" : "bg-line"
            }`}
          >
            <span
              className={`absolute left-[3px] top-[3px] h-5 w-5 rounded-full bg-white shadow-soft transition-transform ${
                annual ? "translate-x-[22px]" : ""
              }`}
            />
          </button>
          <button
            onClick={() => setAnnual(true)}
            className={`flex items-center text-sm transition-colors ${
              annual ? "font-semibold text-navy" : "font-medium text-secondary"
            }`}
          >
            Yearly
            <span className="ml-2 inline-flex items-center rounded-full bg-green/[0.12] px-2 py-0.5 text-[10px] font-semibold text-green">
              Save 20%
            </span>
          </button>
        </div>

        {/* Cards */}
        <div className="grid items-center gap-5 lg:grid-cols-3">
          {PLANS.map((plan, i) => {
            const amount = annual ? plan.annual : plan.monthly;
            if (plan.popular) {
              return (
                <Reveal
                  key={plan.id}
                  className="relative rounded-2xl2 border border-transparent bg-[linear-gradient(180deg,#D6E4FF_0%,#EEF4FB_100%)] px-7 pb-7 pt-11 shadow-[0_24px_60px_rgba(13,27,62,0.30)] transition-[transform,box-shadow] duration-[400ms] lg:scale-[1.04] lg:hover:-translate-y-1.5"
                  // round to nearest pixel keeps tokens consistent
                  // (rounded-2xl2 = 28px from theme)
                >
                  <div className="absolute left-1/2 top-[18px] -translate-x-1/2 whitespace-nowrap rounded-full bg-navy px-[18px] py-[5px] text-[11px] font-semibold tracking-wide text-white">
                    Most Popular
                  </div>
                  <div className="mb-5 rounded-xl2 bg-[linear-gradient(180deg,#FFFFFF_0%,#EFF5FF_100%)] p-5">
                    <div className="mb-2 text-xs font-semibold uppercase tracking-[0.08em] text-muted">
                      {plan.label}
                    </div>
                    <div className="mb-2 text-2xl font-bold text-navy">{plan.name}</div>
                    <p className="mb-5 text-sm leading-normal text-muted">{plan.desc}</p>
                    <PriceRow amount={amount} />
                    <button className="w-full rounded-[10px] border-[1.5px] border-navy bg-navy py-3 text-sm font-semibold text-white transition-colors hover:border-blue hover:bg-blue">
                      Get Started
                    </button>
                  </div>
                  <FeatureList plan={plan} />
                </Reveal>
              );
            }
            return (
              <Reveal
                key={plan.id}
                delay={i === 0 ? 1 : 2}
                className="rounded-2xl2 border border-navy/[0.06] bg-[linear-gradient(180deg,#FFFFFF_0%,#EFF5FF_100%)] px-7 py-7 shadow-[0_20px_50px_rgba(13,27,62,0.06)] transition-[transform,box-shadow] duration-[400ms] hover:-translate-y-1.5 hover:shadow-[0_16px_48px_rgba(13,27,62,0.12)]"
              >
                <div className="mb-2 text-xs font-semibold uppercase tracking-[0.08em] text-muted">
                  {plan.label}
                </div>
                <div className="mb-2 text-2xl font-bold text-navy">{plan.name}</div>
                <p className="mb-5 text-sm leading-normal text-muted">{plan.desc}</p>
                <PriceRow amount={amount} />
                <button className="mb-5 w-full rounded-[10px] border-[1.5px] border-line bg-transparent py-3 text-sm font-semibold text-navy transition-colors hover:border-navy hover:bg-navy hover:text-white">
                  Get Started
                </button>
                <FeatureList plan={plan} />
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

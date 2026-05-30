import AnimatedText from "./AnimatedText";
import { Container } from "./ui";

export default function Tagline() {
  return (
    <section
      aria-label="Tagline"
      className="relative overflow-hidden bg-bg py-12 text-center"
    >
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 animate-pulse-blob rounded-full bg-[radial-gradient(circle,rgba(167,139,250,0.25)_0%,rgba(59,110,248,0.10)_50%,transparent_75%)] blur-[60px]" />
      <Container>
        <AnimatedText
          as="h2"
          className="relative z-[1] mx-auto max-w-[720px] text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold leading-[1.2] tracking-tight text-navy"
          text="Budgeting, saving, investing — it’s all in one place. Staying ahead of your money has never felt this effortless."
        />
      </Container>
    </section>
  );
}

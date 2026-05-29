import type { ReactNode } from "react";

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`relative z-[1] mx-auto w-full max-w-[1200px] px-6 ${className}`.trim()}
    >
      {children}
    </div>
  );
}

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.12em] text-blue">
      {children}
    </span>
  );
}

export function SectionTitle({
  children,
  center = false,
  className = "",
}: {
  children: ReactNode;
  center?: boolean;
  className?: string;
}) {
  return (
    <h2
      className={`text-[2rem] font-bold leading-tight tracking-tight text-ink sm:text-[2.75rem] ${
        center ? "mx-auto max-w-[700px] text-center" : ""
      } ${className}`.trim()}
    >
      {children}
    </h2>
  );
}

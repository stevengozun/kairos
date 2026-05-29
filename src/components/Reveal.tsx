"use client";

import { useMemo, type ElementType, type ReactNode } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";

type RevealProps = {
  children: ReactNode;
  as?: ElementType;
  delay?: 0 | 1 | 2 | 3;
  className?: string;
};

// Matches the original CSS: translateY(32px), 0.6s ease-out-expo, +blur.
const DURATION = 0.6;
const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const;

const variants: Variants = {
  hidden: { opacity: 0, y: 32, filter: "blur(10px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};

/**
 * Wraps content in a scroll-reveal container. On first intersection it fades +
 * slides + unblurs the content into view via Framer Motion's `whileInView`.
 * Preserves the original `as` / `delay` / `className` API so existing usages
 * need no changes. Honours `prefers-reduced-motion`.
 */
export default function Reveal({
  children,
  as: Tag = "div",
  delay = 0,
  className = "",
}: RevealProps) {
  const prefersReducedMotion = useReducedMotion();

  // motion.create(Tag) lets `as` work with any element type; memoise so the
  // motion component identity is stable across re-renders.
  const MotionTag = useMemo(() => motion.create(Tag), [Tag]);

  if (prefersReducedMotion) {
    return <Tag className={className.trim()}>{children}</Tag>;
  }

  return (
    <MotionTag
      className={className.trim()}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.08, margin: "0px 0px -40px 0px" }}
      transition={{
        duration: DURATION,
        delay: delay * 0.1,
        ease: EASE_OUT_EXPO,
      }}
    >
      {children}
    </MotionTag>
  );
}

"use client";

import { Fragment, useMemo, type ElementType } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";

type AnimatedTextProps = {
  /** Heading text. Use "\n" to force a line break (renders a <br />). */
  text: string;
  as?: ElementType;
  className?: string;
  /** Seconds to wait before the first word animates in. */
  delay?: number;
};

const container: Variants = {
  hidden: {},
  visible: (start: number) => ({
    transition: { staggerChildren: 0.06, delayChildren: start },
  }),
};

const word: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", damping: 12, stiffness: 110 },
  },
};

/**
 * Reveals a heading word-by-word on scroll, staggering each word with a spring.
 * The whole phrase is exposed to assistive tech via `aria-label` while the
 * per-word spans are hidden, so it reads as one string. Honours
 * `prefers-reduced-motion`.
 */
export default function AnimatedText({
  text,
  as = "h2",
  className = "",
  delay = 0,
}: AnimatedTextProps) {
  const prefersReducedMotion = useReducedMotion();
  const MotionTag = useMemo(() => motion.create(as), [as]);
  const lines = text.split("\n");

  if (prefersReducedMotion) {
    const Tag = as;
    return (
      <Tag className={className.trim()}>
        {lines.map((line, i) => (
          <Fragment key={i}>
            {i > 0 && <br />}
            {line}
          </Fragment>
        ))}
      </Tag>
    );
  }

  return (
    <MotionTag
      className={className.trim()}
      aria-label={text.replace(/\n/g, " ")}
      variants={container}
      custom={delay}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px 0px -50px 0px" }}
    >
      {lines.map((line, li) => (
        <Fragment key={li}>
          {li > 0 && <br />}
          {line.split(" ").map((w, wi) => (
            <Fragment key={wi}>
              <motion.span
                aria-hidden
                variants={word}
                style={{ display: "inline-block", willChange: "transform" }}
              >
                {w}
              </motion.span>{" "}
            </Fragment>
          ))}
        </Fragment>
      ))}
    </MotionTag>
  );
}

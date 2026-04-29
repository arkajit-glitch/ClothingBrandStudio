import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { buttonHover, buttonTap } from "../lib/motion";

const MotionLink = motion.create(Link);

function ButtonLink({ to, children, variant = "primary", className = "" }) {
  const styles =
    variant === "primary"
      ? "bg-brand-text text-white shadow-[0_12px_28px_rgba(29,22,18,0.08)] hover:bg-brand-dark"
      : "border border-[color:var(--color-brand-border)] bg-transparent text-brand-text hover:border-brand-accent/55";

  return (
    <MotionLink
      to={to}
      whileHover={buttonHover}
      whileTap={buttonTap}
      className={`group relative inline-flex items-center justify-center gap-3 overflow-hidden px-6 py-3.5 font-heading type-eyebrow tracking-[0.24em] transition duration-500 ${styles} ${className}`}
    >
      <span className="h-2 w-2 rotate-45 border border-current transition duration-300 group-hover:shadow-[0_0_8px_rgba(184,121,69,0.16)]" />
      <span>{children}</span>
      <span className="pointer-events-none absolute inset-x-5 bottom-[0.68rem] h-px origin-left scale-x-0 bg-brand-accent/75 transition duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100" />
    </MotionLink>
  );
}

export default ButtonLink;

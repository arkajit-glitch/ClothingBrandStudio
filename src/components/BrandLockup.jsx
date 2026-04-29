import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function BrandLockup({
  className = "",
  shared = false,
  asLink = false,
  textClassName = "",
  markClassName = "",
  href = "/",
  ariaLabel = "NOIR ATELIER",
}) {
  const Wrapper = asLink ? Link : "div";

  const mark = (
    <motion.span
      layoutId={shared ? "brand-lockup-mark" : undefined}
      className={`h-3.5 w-3.5 rotate-45 border border-brand-accent ${markClassName}`.trim()}
    />
  );

  const text = (
    <motion.span
      layoutId={shared ? "brand-lockup-text" : undefined}
      className={`font-heading text-sm font-bold uppercase tracking-[0.28em] ${textClassName}`.trim()}
    >
      NOIR ATELIER
    </motion.span>
  );

  return (
    <Wrapper
      {...(asLink ? { to: href } : {})}
      aria-label={ariaLabel}
      className={`flex items-center gap-3 ${className}`.trim()}
    >
      {mark}
      {text}
    </Wrapper>
  );
}

export default BrandLockup;

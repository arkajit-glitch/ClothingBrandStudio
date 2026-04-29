import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const MotionLink = motion.create(Link);

function ButtonLink({ to, children, variant = "primary" }) {
  const styles =
    variant === "primary"
      ? "bg-brand-text text-white hover:bg-brand-dark"
      : "border border-[color:var(--color-brand-border)] bg-transparent text-brand-text hover:border-brand-text";

  return (
    <MotionLink
      to={to}
      whileHover={{ scale: 1.015 }}
      whileTap={{ scale: 0.99 }}
      transition={{ duration: 0.24, ease: [0.25, 0.9, 0.3, 1] }}
      className={`inline-flex items-center justify-center px-6 py-3 font-heading text-xs font-bold uppercase tracking-[0.22em] transition duration-300 ${styles}`}
    >
      {children}
    </MotionLink>
  );
}

export default ButtonLink;

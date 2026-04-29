import { motion } from "framer-motion";
import { fadeUp } from "../lib/motion";

function TestimonialCard({ quote, name, role, dark = false }) {
  return (
    <motion.article
      variants={fadeUp}
      className={`space-y-5 border p-6 md:p-8 ${
        dark
          ? "border-white/12 bg-white/6 text-white"
          : "border-[color:var(--color-brand-border)] bg-white/74 text-brand-text shadow-[0_16px_36px_rgba(42,31,24,0.05)]"
      }`}
    >
      <p className={`text-[1.06rem] leading-8 ${dark ? "text-white/84" : "text-brand-muted"}`}>“{quote}”</p>
      <div>
        <p className="font-heading text-sm font-bold uppercase tracking-[0.2em]">{name}</p>
        <p className={`mt-2 text-sm ${dark ? "text-white/60" : "text-brand-muted"}`}>{role}</p>
      </div>
    </motion.article>
  );
}

export default TestimonialCard;

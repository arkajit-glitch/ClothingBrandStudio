import { motion } from "framer-motion";
import { fadeUp } from "../lib/motion";

function StatsRow({ stats, dark = false }) {
  return (
    <div className="grid gap-6 border-t border-[color:var(--color-brand-border)] pt-10 md:grid-cols-3">
      {stats.map((stat) => (
        <motion.div key={stat.label} variants={fadeUp} className="space-y-3">
          <p
            className={`font-heading text-4xl font-bold tracking-[-0.02em] md:text-5xl ${
              dark ? "text-white" : "text-brand-text"
            }`}
          >
            {stat.value}
          </p>
          <p className={`text-sm uppercase tracking-[0.18em] ${dark ? "text-white/56" : "text-brand-muted"}`}>
            {stat.label}
          </p>
        </motion.div>
      ))}
    </div>
  );
}

export default StatsRow;

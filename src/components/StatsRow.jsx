import { motion } from "framer-motion";
import { fadeUp } from "../lib/motion";

function StatsRow({ stats, dark = false }) {
  return (
    <div className={`grid gap-6 border-t pt-10 md:grid-cols-3 ${dark ? "border-white/12" : "border-[color:var(--color-brand-border)]"}`}>
      {stats.map((stat) => (
        <motion.div key={stat.label} variants={fadeUp} className="space-y-4">
          <div className="flex items-center gap-3">
            <span className={`h-[1px] w-8 ${dark ? "bg-brand-accent/60" : "bg-brand-accent/70"}`} />
            <span className={`h-2.5 w-2.5 rotate-45 border ${dark ? "border-brand-accent" : "border-brand-accent"}`} />
          </div>
          <p
            className={`font-heading text-4xl font-bold tracking-[-0.03em] md:text-5xl ${
              dark ? "text-white" : "text-brand-text"
            }`}
          >
            {stat.value}
          </p>
          <p className={`text-sm uppercase tracking-[0.2em] ${dark ? "text-white/56" : "text-brand-muted"}`}>
            {stat.label}
          </p>
        </motion.div>
      ))}
    </div>
  );
}

export default StatsRow;

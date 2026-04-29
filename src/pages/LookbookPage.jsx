import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import MotionSection from "../components/MotionSection";
import PageTransition from "../components/PageTransition";
import SectionHeading from "../components/SectionHeading";
import StaggerGrid from "../components/StaggerGrid";
import { lookbookFilters, lookbookGallery } from "../data/siteContent";
import { fadeUp } from "../lib/motion";

function LookbookPage() {
  const [active, setActive] = useState("All");

  const filtered = useMemo(() => {
    if (active === "All") return lookbookGallery;
    return lookbookGallery.filter((item) => item.category === active);
  }, [active]);

  return (
    <PageTransition>
      <main className="px-4 pb-28 pt-10 md:px-6 md:pt-14">
        <MotionSection className="mx-auto max-w-[1240px] space-y-10">
          <SectionHeading
            eyebrow="Lookbook"
            title="Editorial gallery shaped with cleaner rhythm and business-ready polish."
            description="Filter by presentation direction while keeping the visual tone warm, balanced, and consistent."
          />

          <div className="flex flex-wrap gap-3 border-b border-[color:var(--color-brand-border)] pb-6">
            {lookbookFilters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActive(filter)}
                className={`px-4 py-2 font-heading text-[11px] font-bold uppercase tracking-[0.22em] transition duration-300 ${
                  active === filter
                    ? "bg-brand-text text-brand-bg-soft"
                    : "border border-[color:var(--color-brand-border)] bg-white/45 text-brand-muted hover:border-brand-accent hover:text-brand-accent"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          <StaggerGrid className="grid gap-6 md:grid-cols-3 md:grid-rows-[minmax(16rem,auto)_minmax(16rem,auto)_minmax(16rem,auto)]">
            {filtered.map((item) => (
              <motion.figure
                key={`${item.title}-${item.category}`}
                variants={fadeUp}
                whileHover={{ y: -3 }}
                transition={{ duration: 0.26, ease: [0.25, 0.9, 0.3, 1] }}
                className={`group overflow-hidden border border-[color:var(--color-brand-border)] bg-white/46 shadow-[0_14px_30px_rgba(45,31,23,0.04)] ${item.span}`}
              >
                <div className="relative h-full min-h-[19rem] overflow-hidden">
                  <motion.img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover"
                    whileHover={{ scale: 1.035, filter: "brightness(1.02)" }}
                    transition={{ duration: 0.28, ease: [0.25, 0.9, 0.3, 1] }}
                  />
                  <div className="absolute inset-0 bg-brand-dark/10 transition duration-300 group-hover:bg-brand-dark/26" />
                  <figcaption className="absolute inset-x-0 bottom-0 z-10 space-y-2 bg-gradient-to-t from-brand-dark/80 via-brand-dark/10 to-transparent p-6 text-white">
                    <p className="font-heading text-[11px] font-bold uppercase tracking-[0.25em] text-white/72">
                      {item.category}
                    </p>
                    <p className="font-heading text-2xl font-bold">{item.title}</p>
                  </figcaption>
                </div>
              </motion.figure>
            ))}
          </StaggerGrid>
        </MotionSection>
      </main>
    </PageTransition>
  );
}

export default LookbookPage;

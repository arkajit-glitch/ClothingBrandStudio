import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useMemo, useState } from "react";
import MotionSection from "../components/MotionSection";
import PageTransition from "../components/PageTransition";
import Eyebrow from "../components/Eyebrow";
import ImageReveal from "../components/ImageReveal";
import Paragraph from "../components/Paragraph";
import SectionHeading from "../components/SectionHeading";
import SectionWrapper from "../components/SectionWrapper";
import StaggerGrid from "../components/StaggerGrid";
import { lookbookFilters, lookbookGallery } from "../data/siteContent";
import { buttonHover, buttonTap, cardHover, easeLuxury, fadeUp } from "../lib/motion";

function LookbookPage() {
  const [active, setActive] = useState("All");
  const [selected, setSelected] = useState(null);

  const filtered = useMemo(() => {
    if (active === "All") return lookbookGallery;
    return lookbookGallery.filter((item) => item.category === active);
  }, [active]);

  return (
    <PageTransition>
      <main>
        <SectionWrapper className="pb-10 pt-10 md:pb-14 md:pt-14" containerClassName="space-y-10">
          <SectionHeading
            eyebrow="Lookbook"
            title="An immersive editorial gallery built with rhythm, restraint, and stronger image presence."
            description="Filter by category and move through the visual system like a digital fashion spread."
          />

          <div className="flex flex-wrap gap-3 border-b border-[color:var(--color-brand-border)] pb-6">
            {lookbookFilters.map((filter) => (
              <motion.button
                key={filter}
                type="button"
                onClick={() => setActive(filter)}
                whileHover={buttonHover}
                whileTap={buttonTap}
                className={`inline-flex items-center gap-3 px-4 py-2.5 type-eyebrow tracking-[0.24em] transition duration-300 ${
                  active === filter
                    ? "bg-brand-text text-brand-bg-soft shadow-[0_12px_22px_rgba(29,22,18,0.1)]"
                    : "border border-[color:var(--color-brand-border)] bg-white/45 text-brand-muted hover:border-brand-accent hover:text-brand-accent"
                }`}
              >
                <span className="h-2 w-2 rotate-45 border border-current" />
                {filter}
              </motion.button>
            ))}
          </div>
        </SectionWrapper>

        <SectionWrapper className="py-6 md:py-8" containerClassName="">
          <StaggerGrid className="grid gap-6 md:grid-cols-3 md:grid-rows-[minmax(16rem,auto)_minmax(16rem,auto)_minmax(16rem,auto)_minmax(16rem,auto)]">
            {filtered.map((item) => (
              <motion.figure
                key={`${item.title}-${item.category}`}
                variants={fadeUp}
                whileHover={cardHover}
                className={`group relative overflow-hidden rounded-[1.3rem] border border-[color:var(--color-brand-border)] bg-white/46 shadow-[0_16px_34px_rgba(45,31,23,0.04)] ${item.span}`}
              >
                <button type="button" onClick={() => setSelected(item)} className="relative h-full min-h-[19rem] w-full overflow-hidden text-left">
                  <ImageReveal
                    src={item.image}
                    alt={item.title}
                    className="h-full min-h-[19rem]"
                    imgClassName="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/66 via-brand-dark/12 to-transparent transition duration-500 group-hover:from-brand-dark/74" />
                  <figcaption className="absolute inset-x-0 bottom-0 z-10 space-y-2 p-6 text-white">
                    <p className="type-eyebrow text-[10px] text-white/68">
                      {item.category}
                    </p>
                    <p className="type-subheading text-[1.75rem] text-white">{item.title}</p>
                  </figcaption>
                </button>
              </motion.figure>
            ))}
          </StaggerGrid>
        </SectionWrapper>

        <AnimatePresence>
          {selected ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[90] bg-[rgba(16,13,12,0.84)] p-4 backdrop-blur-sm md:p-8"
              onClick={() => setSelected(null)}
            >
              <div className="mx-auto flex h-full max-w-[1200px] items-center justify-center">
                <motion.div
                  initial={{ opacity: 0, y: 18, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 12, scale: 0.98 }}
                  transition={{ duration: 0.4, ease: easeLuxury }}
                  className="relative w-full overflow-hidden rounded-[1.6rem] border border-white/12 bg-brand-dark shadow-[0_24px_60px_rgba(0,0,0,0.24)]"
                  onClick={(event) => event.stopPropagation()}
                >
                  <button
                    type="button"
                    onClick={() => setSelected(null)}
                    className="absolute right-4 top-4 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-black/20 text-white"
                    aria-label="Close image"
                  >
                    <X size={18} />
                  </button>
                  <div className="grid gap-0 md:grid-cols-[1.1fr_0.9fr]">
                    <ImageReveal
                      src={selected.image}
                      alt={selected.title}
                      className="h-[32rem] md:h-[82vh]"
                      imgClassName="h-[32rem] w-full object-cover md:h-[82vh]"
                      hover={false}
                      parallax={false}
                    />
                    <div className="flex items-end p-8 md:p-10">
                      <div className="space-y-4 text-white">
                        <Eyebrow dark>{selected.category}</Eyebrow>
                        <h2 className="type-heading text-white md:text-[clamp(34px,4vw,52px)]">{selected.title}</h2>
                        <Paragraph dark max="max-w-md">
                          A curated NOIR ATELIER lookbook frame shaped for campaign rhythm, clothing detail, and premium visual continuity.
                        </Paragraph>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </main>
    </PageTransition>
  );
}

export default LookbookPage;

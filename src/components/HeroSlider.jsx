import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { easeLuxury } from "../lib/motion";

function HeroSlider({ items }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!items?.length) return undefined;

    const intervalId = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % items.length);
    }, 5600);

    return () => window.clearInterval(intervalId);
  }, [items]);

  const activeItem = items[activeIndex];

  return (
    <div className="relative flex min-h-[22rem] overflow-hidden rounded-[1.6rem] border border-[color:var(--color-brand-border)] bg-brand-dark/6 shadow-[0_24px_54px_rgba(42,31,24,0.1)] md:min-h-[72vh]">
      <div className="absolute inset-0 z-[1] bg-gradient-to-t from-brand-dark/20 via-brand-dark/0 to-transparent" />
      <div className="absolute inset-y-0 left-0 z-[1] w-20 bg-gradient-to-r from-brand-bg/8 to-transparent" />
      <div className="absolute left-7 top-7 z-[2] hidden items-center gap-3 md:flex">
        <span className="h-[1px] w-10 bg-white/34" />
        <span className="h-2.5 w-2.5 rotate-45 border border-brand-accent" />
      </div>

      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.img
          key={activeItem.image}
          src={activeItem.image}
          alt={activeItem.alt}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, scale: 1.022 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.95, ease: easeLuxury }}
          className="absolute inset-0 h-full w-full object-cover saturate-[0.9] contrast-[1.02]"
        />
        </AnimatePresence>
      </div>

      <div className="absolute inset-x-0 bottom-0 z-[2] flex items-end justify-between gap-6 p-4 md:p-6">
        <div className="pointer-events-none max-w-[15rem] space-y-1.5 rounded-2xl border border-white/10 bg-[rgba(20,16,13,0.18)] px-4 py-3 backdrop-blur-md">
          <p className="font-heading text-[9px] font-bold uppercase tracking-[0.32em] text-white/54">
            Featured Frame
          </p>
          <p className="font-heading text-[0.96rem] font-semibold text-white/88">{activeItem.title}</p>
        </div>

        <div className="flex items-center gap-2 rounded-full border border-white/10 bg-[rgba(20,16,13,0.16)] px-3 py-2 backdrop-blur-md">
          {items.map((item, index) => (
            <button
              key={item.title}
              type="button"
              aria-label={`Go to slide ${index + 1}`}
              onClick={() => setActiveIndex(index)}
              className={`h-2 rounded-full transition-all duration-500 ${
                index === activeIndex ? "w-5 bg-brand-bg-soft/92" : "w-2 bg-white/34 hover:bg-white/52"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default HeroSlider;

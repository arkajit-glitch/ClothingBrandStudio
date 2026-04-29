import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

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
    <div className="relative flex min-h-[22rem] overflow-hidden rounded-xl border border-[color:var(--color-brand-border)] bg-brand-dark/6 shadow-[0_24px_54px_rgba(42,31,24,0.1)] md:min-h-[68vh]">
      <div className="absolute inset-0 z-[1] bg-gradient-to-t from-brand-dark/16 via-brand-dark/4 to-transparent" />
      <div className="absolute inset-y-0 left-0 z-[1] w-14 bg-gradient-to-r from-brand-bg/10 to-transparent" />

      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.img
          key={activeItem.image}
          src={activeItem.image}
          alt={activeItem.alt}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, scale: 1.018 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.55, ease: [0.25, 0.9, 0.3, 1] }}
          className="absolute inset-0 h-full w-full object-cover saturate-[0.94]"
        />
        </AnimatePresence>
      </div>

      <div className="absolute inset-x-0 bottom-0 z-[2] flex items-end justify-between gap-6 p-4 md:p-6">
        <div className="pointer-events-none max-w-[14rem] space-y-1.5 rounded-lg border border-white/10 bg-[rgba(20,16,13,0.24)] px-3.5 py-2.5 backdrop-blur-sm">
          <p className="font-heading text-[9px] font-bold uppercase tracking-[0.28em] text-white/54">
            Featured Frames
          </p>
          <p className="font-heading text-base font-semibold text-white/92">{activeItem.title}</p>
        </div>

        <div className="flex items-center gap-1.5 rounded-full border border-white/10 bg-[rgba(20,16,13,0.22)] px-2.5 py-1.5 backdrop-blur-sm">
          {items.map((item, index) => (
            <button
              key={item.title}
              type="button"
              aria-label={`Go to slide ${index + 1}`}
              onClick={() => setActiveIndex(index)}
              className={`h-2 rounded-full transition-all duration-400 ${
                index === activeIndex ? "w-5 bg-white/92" : "w-2 bg-white/38 hover:bg-white/60"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default HeroSlider;

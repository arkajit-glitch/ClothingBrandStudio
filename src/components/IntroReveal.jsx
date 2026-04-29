import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef } from "react";
import { heroSliderImages } from "../data/siteContent";
import BrandLockup from "./BrandLockup";

const overlayTransition = {
  duration: 1.18,
  ease: [0.22, 1, 0.36, 1],
};

const fragmentMotion = [
  {
    initial: { opacity: 0, x: -40, y: -18, scale: 1.04 },
    animate: { opacity: 0.82, x: 0, y: 0, scale: 1, transition: { delay: 0.1, duration: 0.96, ease: [0.22, 1, 0.36, 1] } },
    exit: { opacity: 0, y: -16, transition: { duration: 0.62, ease: "easeOut" } },
  },
  {
    initial: { opacity: 0, x: 36, y: 22, scale: 1.02 },
    animate: { opacity: 0.64, x: 0, y: 0, scale: 1, transition: { delay: 0.24, duration: 1.02, ease: [0.22, 1, 0.36, 1] } },
    exit: { opacity: 0, y: 12, transition: { duration: 0.62, ease: "easeOut" } },
  },
  {
    initial: { opacity: 0, x: -20, y: 30, scale: 1.02 },
    animate: { opacity: 0.52, x: 0, y: 0, scale: 1, transition: { delay: 0.34, duration: 0.96, ease: [0.22, 1, 0.36, 1] } },
    exit: { opacity: 0, y: 18, transition: { duration: 0.62, ease: "easeOut" } },
  },
];

const letterContainer = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.02,
      staggerChildren: 0.09,
    },
  },
};

const letterItem = {
  hidden: { opacity: 0, y: 28, rotateX: 20, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    filter: "blur(0px)",
    transition: { duration: 0.78, ease: [0.16, 1, 0.3, 1] },
  },
};

function IntroReveal({ visible, onComplete }) {
  const reduceMotion = useReducedMotion();
  const fragments = heroSliderImages.slice(0, 3);
  const letters = "NOIR ATELIER".split("");
  const completedRef = useRef(false);

  const finishIntro = () => {
    if (completedRef.current) return;
    completedRef.current = true;
    onComplete();
  };

  useEffect(() => {
    if (!visible) return undefined;

    completedRef.current = false;

    const duration = reduceMotion ? 850 : 5600;
    const timer = window.setTimeout(finishIntro, duration);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.clearTimeout(timer);
      document.body.style.overflow = previousOverflow;
    };
  }, [visible, onComplete, reduceMotion]);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          className="fixed inset-0 z-[120] overflow-hidden bg-[#171313]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: overlayTransition }}
          aria-hidden="true"
          onClick={finishIntro}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(184,121,69,0.16),_transparent_34%),linear-gradient(135deg,_rgba(28,23,20,0.98),_rgba(23,19,19,1))]" />
          <div className="intro-grain absolute inset-0 opacity-50" />
          <motion.div
            className="absolute right-[12%] top-[14%] h-56 w-56 rounded-full bg-[rgba(184,121,69,0.22)] blur-[110px] md:h-72 md:w-72"
            animate={reduceMotion ? undefined : { x: [0, 18, 0], y: [0, -12, 0], scale: [1, 1.04, 1] }}
            transition={reduceMotion ? undefined : { duration: 10, ease: "easeInOut", repeat: Number.POSITIVE_INFINITY }}
          />

          {!reduceMotion ? (
            <div className="absolute inset-0 mx-auto hidden max-w-[1400px] px-6 md:block">
              {fragments.map((fragment, index) => (
                <motion.div
                  key={fragment.title}
                  className={`absolute overflow-hidden rounded-[10px] border border-white/8 shadow-[0_18px_48px_rgba(0,0,0,0.28)] ${
                    index === 0
                      ? "left-[9%] top-[16%] h-[30vh] w-[18vw] min-w-[180px]"
                      : index === 1
                        ? "right-[10%] top-[24%] h-[22vh] w-[28vw] min-w-[260px]"
                        : "bottom-[18%] left-[21%] h-[18vh] w-[20vw] min-w-[200px]"
                  }`}
                  initial={fragmentMotion[index].initial}
                  animate={fragmentMotion[index].animate}
                  exit={fragmentMotion[index].exit}
                >
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,8,8,0.08),rgba(16,13,12,0.42))]" />
                  <img src={fragment.image} alt="" className="h-full w-full object-cover opacity-72 saturate-[0.78] brightness-[0.86]" />
                </motion.div>
              ))}
            </div>
          ) : null}

          <div className="relative z-[1] flex min-h-screen items-center justify-center px-6">
            <div className="flex max-w-[920px] flex-col items-center text-center">
              <motion.div
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: reduceMotion ? 80 : 112 }}
                transition={{ delay: reduceMotion ? 0.08 : 1.78, duration: 0.82, ease: [0.22, 1, 0.36, 1] }}
                className="mb-6 h-px bg-brand-accent/75"
              />

              {reduceMotion ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.985 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                >
                  <BrandLockup
                    shared
                    className="gap-4"
                    textClassName="text-[clamp(1.6rem,4vw,3.7rem)] tracking-[0.42em] text-brand-bg-soft"
                    markClassName="h-4.5 w-4.5 border-brand-accent shadow-[0_0_18px_rgba(184,121,69,0.22)]"
                  />
                </motion.div>
              ) : (
                <div className="flex items-center gap-4 md:gap-5">
                  <motion.span
                    layoutId="brand-lockup-mark"
                    initial={{ opacity: 0, rotate: 45, scale: 0.7 }}
                    animate={{ opacity: 1, scale: 1, boxShadow: "0 0 22px rgba(184,121,69,0.24)" }}
                    transition={{ delay: 0.16, duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
                    className="h-4.5 w-4.5 rotate-45 border border-brand-accent shadow-[0_0_12px_rgba(184,121,69,0.16)]"
                  />
                  <div className="relative">
                    <motion.span
                      aria-hidden="true"
                      initial={{ opacity: 0.18 }}
                      animate={{ opacity: 0.22 }}
                      className="pointer-events-none absolute inset-0 flex items-center justify-center font-heading text-[clamp(1.7rem,4vw,4rem)] font-extrabold uppercase leading-none tracking-[0.22em] text-[rgba(247,241,232,0.22)] md:tracking-[0.26em]"
                    >
                      NOIR ATELIER
                    </motion.span>
                    <motion.div
                      layoutId="brand-lockup-text"
                      variants={letterContainer}
                      initial="hidden"
                      animate="visible"
                      className="intro-brand-word relative flex flex-wrap justify-center gap-x-1 font-heading text-[clamp(1.7rem,4vw,4rem)] font-extrabold uppercase leading-none text-brand-bg-soft md:tracking-[0.26em]"
                    >
                      {letters.map((letter, index) => (
                        <motion.span key={`${letter}-${index}`} variants={letterItem} className="intro-letter inline-block">
                          {letter === " " ? "\u00A0" : letter}
                        </motion.span>
                      ))}
                    </motion.div>
                  </div>
                </div>
              )}

              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: reduceMotion ? 0.14 : 1.5, duration: 0.78, ease: "easeOut" }}
                className="mt-7 max-w-xl text-[11px] font-semibold uppercase tracking-[0.34em] text-[rgba(247,241,232,0.56)]"
              >
                Editorial clothing identity for a more lasting first impression
              </motion.p>
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

export default IntroReveal;

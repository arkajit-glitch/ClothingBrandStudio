export const viewportOnce = {
  once: true,
  amount: 0.2,
};

export const easeOutQuint = [0.22, 1, 0.36, 1];
export const easeSoft = [0.25, 0.9, 0.3, 1];

export const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.68,
      ease: easeSoft,
    },
  },
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.06,
    },
  },
};

export const cardHover = {
  y: -3,
  transition: {
    duration: 0.26,
    ease: easeSoft,
  },
};

export const imageHover = {
  scale: 1.035,
  filter: "brightness(1.02)",
  transition: {
    duration: 0.28,
    ease: easeSoft,
  },
};

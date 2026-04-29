export const viewportOnce = {
  once: true,
  amount: 0.18,
};

export const easeLuxury = [0.22, 1, 0.36, 1];
export const easeSoft = [0.25, 0.9, 0.3, 1];

export const fadeUp = {
  hidden: { opacity: 0, y: 34 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.76,
      ease: easeLuxury,
    },
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: easeLuxury,
    },
  },
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.085,
    },
  },
};

export const cardHover = {
  y: -4,
  scale: 1.006,
  transition: {
    duration: 0.38,
    ease: easeSoft,
  },
};

export const imageHover = {
  scale: 1.03,
  filter: "brightness(1.03) contrast(1.02)",
  transition: {
    duration: 0.48,
    ease: easeSoft,
  },
};

export const buttonHover = {
  scale: 1.012,
  y: -1,
  transition: {
    duration: 0.3,
    ease: easeSoft,
  },
};

export const buttonTap = {
  scale: 0.99,
};

export const viewportOnce = {
  once: true,
  amount: 0.18,
};

export const easeLuxury = [0.22, 1, 0.36, 1];
export const easeSoft = [0.22, 1, 0.36, 1];

export const durations = {
  fast: 0.38,
  base: 0.68,
  slow: 0.8,
  image: 0.82,
};

export const sectionReveal = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: durations.base,
      ease: easeLuxury,
    },
  },
};

export const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: durations.base,
      ease: easeLuxury,
    },
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: durations.base,
      ease: easeLuxury,
    },
  },
};

export const paragraphReveal = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: durations.base,
      ease: easeLuxury,
    },
  },
};

export const imageReveal = {
  hidden: { opacity: 0, y: 30, scale: 0.982 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: durations.image,
      ease: easeLuxury,
    },
  },
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.08,
      staggerChildren: 0.1,
    },
  },
};

export const headingContainer = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.04,
      staggerChildren: 0.08,
    },
  },
};

export const headingWord = {
  hidden: { opacity: 0, y: 30, rotateX: 12, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    filter: "blur(0px)",
    transition: {
      duration: durations.slow,
      ease: easeLuxury,
    },
  },
};

export const cardHover = {
  y: -4,
  scale: 1.008,
  transition: {
    duration: durations.fast,
    ease: easeSoft,
  },
};

export const imageHover = {
  scale: 1.05,
  filter: "brightness(1.04) contrast(1.02)",
  transition: {
    duration: 0.42,
    ease: easeSoft,
  },
};

export const buttonHover = {
  scale: 1.02,
  y: -1,
  transition: {
    duration: durations.fast,
    ease: easeSoft,
  },
};

export const buttonTap = {
  scale: 0.98,
};

export const pageEnter = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.62,
      ease: easeLuxury,
    },
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: {
      duration: 0.34,
      ease: easeLuxury,
    },
  },
};

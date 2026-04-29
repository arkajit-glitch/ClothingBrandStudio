import { motion } from "framer-motion";
import { sectionReveal, viewportOnce } from "../lib/motion";

function MotionSection({ children, className = "", delay = 0, as: Tag = "section" }) {
  const MotionTag = motion.create(Tag);
  const variant = {
    hidden: sectionReveal.hidden,
    visible: {
      ...sectionReveal.visible,
      transition: {
        ...sectionReveal.visible.transition,
        delay,
      },
    },
  };

  return (
    <MotionTag
      variants={variant}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className={className}
    >
      {children}
    </MotionTag>
  );
}

export default MotionSection;

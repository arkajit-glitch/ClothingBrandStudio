import { motion } from "framer-motion";
import { easeSoft, viewportOnce } from "../lib/motion";

function MotionSection({ children, className = "", delay = 0 }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportOnce}
      transition={{ duration: 0.68, ease: easeSoft, delay }}
      className={className}
    >
      {children}
    </motion.section>
  );
}

export default MotionSection;

import { motion } from "framer-motion";
import { staggerContainer, viewportOnce } from "../lib/motion";

function StaggerGrid({ children, className = "" }) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default StaggerGrid;

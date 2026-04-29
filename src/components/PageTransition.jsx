import { motion } from "framer-motion";
import { pageEnter } from "../lib/motion";

function PageTransition({ children }) {
  return (
    <motion.div
      variants={pageEnter}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {children}
    </motion.div>
  );
}

export default PageTransition;

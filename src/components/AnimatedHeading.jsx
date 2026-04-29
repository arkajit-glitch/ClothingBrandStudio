import { motion } from "framer-motion";
import { headingContainer, headingWord, viewportOnce } from "../lib/motion";

function AnimatedHeading({ text, className = "", as: Tag = "h2", wordClassName = "" }) {
  const words = text.split(" ");

  return (
    <motion.div variants={headingContainer} initial="hidden" whileInView="visible" viewport={viewportOnce}>
      <Tag className={className}>
        {words.map((item, index) => (
          <motion.span key={`${item}-${index}`} variants={headingWord} className={`mr-[0.22em] inline-block last:mr-0 will-change-transform ${wordClassName}`.trim()}>
            {item}
          </motion.span>
        ))}
      </Tag>
    </motion.div>
  );
}

export default AnimatedHeading;

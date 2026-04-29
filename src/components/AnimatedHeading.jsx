import { motion } from "framer-motion";
import { easeLuxury } from "../lib/motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.08,
      staggerChildren: 0.06,
    },
  },
};

const word = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: easeLuxury,
    },
  },
};

function AnimatedHeading({ text, className = "", as: Tag = "h2" }) {
  const words = text.split(" ");

  return (
    <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
      <Tag className={className}>
        {words.map((item, index) => (
          <motion.span key={`${item}-${index}`} variants={word} className="mr-[0.22em] inline-block last:mr-0">
            {item}
          </motion.span>
        ))}
      </Tag>
    </motion.div>
  );
}

export default AnimatedHeading;

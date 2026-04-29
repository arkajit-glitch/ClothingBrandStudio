import { motion } from "framer-motion";
import { paragraphReveal, viewportOnce } from "../lib/motion";
import AnimatedHeading from "./AnimatedHeading";
import Eyebrow from "./Eyebrow";
import Paragraph from "./Paragraph";

function SectionTitle({ eyebrow, title, description, align = "left", dark = false, titleClassName = "", className = "" }) {
  const alignment = align === "center" ? "mx-auto text-center" : align === "right" ? "ml-auto text-right" : "";

  return (
    <div className={`max-w-[44rem] space-y-5 ${alignment} ${className}`.trim()}>
      {eyebrow ? <Eyebrow dark={dark} align={align}>{eyebrow}</Eyebrow> : null}
      <AnimatedHeading
        text={title}
        className={`type-heading ${dark ? "text-white" : "text-brand-text"} ${titleClassName}`.trim()}
      />
      {description ? (
        <motion.div variants={paragraphReveal} initial="hidden" whileInView="visible" viewport={viewportOnce}>
          <Paragraph dark={dark} max="max-w-2xl">{description}</Paragraph>
        </motion.div>
      ) : null}
    </div>
  );
}

export default SectionTitle;

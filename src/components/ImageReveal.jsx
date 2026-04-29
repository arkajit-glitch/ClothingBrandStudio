import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { imageHover, imageReveal, viewportOnce } from "../lib/motion";

function ImageReveal({
  src,
  alt,
  className = "",
  imgClassName = "",
  parallax = true,
  hover = true,
  darken = false,
}) {
  const wrapperRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], parallax ? [22, -22] : [0, 0]);

  return (
    <motion.div
      ref={wrapperRef}
      variants={imageReveal}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className={`relative overflow-hidden ${className}`.trim()}
    >
      <motion.img
        src={src}
        alt={alt}
        style={{ y }}
        whileHover={hover ? imageHover : undefined}
        className={`h-full w-full object-cover ${darken ? "brightness-[0.96]" : ""} ${imgClassName}`.trim()}
      />
    </motion.div>
  );
}

export default ImageReveal;

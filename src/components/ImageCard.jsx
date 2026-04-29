import { motion } from "framer-motion";
import { cardHover, fadeUp, imageHover } from "../lib/motion";

function ImageCard({ image, title, description, className = "" }) {
  return (
    <motion.article
      variants={fadeUp}
      whileHover={cardHover}
      className={`group overflow-hidden border border-[color:var(--color-brand-border)] bg-white/72 shadow-[0_18px_40px_rgba(44,31,22,0.06)] ${className}`}
    >
      <div className="relative overflow-hidden">
        <motion.img
          src={image}
          alt={title}
          className="h-[21rem] w-full object-cover"
          whileHover={imageHover}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/12 via-brand-dark/0 to-transparent transition duration-300 group-hover:from-brand-dark/30 group-hover:brightness-105" />
      </div>
      <div className="space-y-3 p-7">
        <h3 className="font-heading text-[1.65rem] font-bold leading-tight text-brand-text">{title}</h3>
        {description ? <p className="text-base leading-7 text-brand-muted">{description}</p> : null}
      </div>
    </motion.article>
  );
}

export default ImageCard;

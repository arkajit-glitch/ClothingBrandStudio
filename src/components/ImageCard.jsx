import { motion } from "framer-motion";
import { cardHover, fadeUp } from "../lib/motion";
import ImageReveal from "./ImageReveal";

function ImageCard({ image, title, description, className = "" }) {
  return (
    <motion.article
      variants={fadeUp}
      whileHover={cardHover}
      className={`group relative overflow-hidden rounded-[1.2rem] border border-[color:var(--color-brand-border)] bg-white/72 shadow-[0_14px_30px_rgba(44,31,22,0.05)] ${className}`}
    >
      <div className="relative overflow-hidden">
        <ImageReveal
          src={image}
          alt={title}
          className="h-[24rem]"
          imgClassName="h-[24rem] w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/40 via-brand-dark/8 to-transparent transition duration-500 group-hover:from-brand-dark/50" />
        <div className="absolute left-7 right-7 top-7 flex items-center justify-between opacity-0 transition duration-500 group-hover:opacity-100">
          <span className="h-[1px] flex-1 bg-brand-accent/55" />
          <span className="mx-3 h-2.5 w-2.5 rotate-45 border border-brand-accent" />
          <span className="h-[1px] flex-1 bg-brand-accent/55" />
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 z-[2] space-y-2.5 p-7 text-white">
        <h3 className="type-subheading text-[1.58rem] text-white">{title}</h3>
        {description ? <p className="type-body max-w-sm text-[0.95rem] text-white/74">{description}</p> : null}
      </div>
    </motion.article>
  );
}

export default ImageCard;

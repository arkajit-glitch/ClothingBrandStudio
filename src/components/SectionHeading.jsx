function SectionHeading({ eyebrow, title, description, align = "left", dark = false }) {
  const alignment = align === "center" ? "mx-auto text-center" : align === "right" ? "ml-auto text-right" : "";
  const textColor = dark ? "text-white" : "text-brand-text";
  const muted = dark ? "text-white/72" : "text-brand-muted";

  return (
    <div className={`max-w-2xl space-y-5 ${alignment}`}>
      {eyebrow ? (
        <p className="font-heading text-[11px] font-bold uppercase tracking-[0.35em] text-brand-accent">
          {eyebrow}
        </p>
      ) : null}
      <h2 className={`font-heading text-3xl font-bold leading-[1.02] tracking-[-0.01em] md:text-[3.35rem] ${textColor}`}>
        {title}
      </h2>
      {description ? <p className={`max-w-xl text-base leading-8 md:text-[1.05rem] ${muted}`}>{description}</p> : null}
    </div>
  );
}

export default SectionHeading;

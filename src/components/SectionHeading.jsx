function SectionHeading({ eyebrow, title, description, align = "left", dark = false }) {
  const alignment = align === "center" ? "mx-auto text-center" : align === "right" ? "ml-auto text-right" : "";
  const textColor = dark ? "text-white" : "text-brand-text";
  const muted = dark ? "text-white/72" : "text-brand-muted";

  return (
    <div className={`max-w-[42rem] space-y-5 ${alignment}`}>
      {eyebrow ? (
        <div className="flex items-center gap-3">
          <span className="h-[1px] w-9 bg-brand-accent/58" />
          <p className="font-heading text-[11px] font-bold uppercase tracking-[0.35em] text-brand-accent">
            {eyebrow}
          </p>
        </div>
      ) : null}
      <h2 className={`font-heading text-[2.15rem] font-bold leading-[1] tracking-[-0.03em] md:text-[3.45rem] ${textColor}`}>
        {title}
      </h2>
      {description ? <p className={`max-w-2xl text-[0.98rem] leading-8 md:text-[1.02rem] ${muted}`}>{description}</p> : null}
    </div>
  );
}

export default SectionHeading;

function Eyebrow({ children, dark = false, className = "", line = true, align = "left" }) {
  const alignment =
    align === "center" ? "justify-center text-center" : align === "right" ? "justify-end text-right" : "";

  return (
    <div className={`flex items-center gap-3 ${alignment} ${className}`.trim()}>
      {line ? <span className={`h-[1px] w-9 ${dark ? "bg-brand-accent/55" : "bg-brand-accent/58"}`} /> : null}
      <p className={`type-eyebrow ${dark ? "text-brand-accent" : "text-brand-accent"}`}>{children}</p>
    </div>
  );
}

export default Eyebrow;

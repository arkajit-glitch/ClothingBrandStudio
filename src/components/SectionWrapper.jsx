function SectionWrapper({
  children,
  className = "",
  containerClassName = "",
  dark = false,
  fullBleed = false,
}) {
  const sectionTone = dark ? "bg-brand-dark text-white" : "bg-transparent text-brand-text";

  return (
    <section className={`relative overflow-hidden px-4 py-24 md:px-6 md:py-28 ${sectionTone} ${className}`.trim()}>
      {fullBleed ? children : <div className={`mx-auto max-w-[1240px] ${containerClassName}`.trim()}>{children}</div>}
    </section>
  );
}

export default SectionWrapper;

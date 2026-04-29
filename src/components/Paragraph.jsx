function Paragraph({ children, dark = false, className = "", max = "max-w-xl" }) {
  return (
    <p className={`type-body ${max} ${dark ? "text-white/74" : "type-body-muted"} ${className}`.trim()}>
      {children}
    </p>
  );
}

export default Paragraph;

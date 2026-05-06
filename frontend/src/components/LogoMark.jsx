// Renders a stylized typographic "logo mark" placeholder.
// Different style variants give visual variety like a real logo wall.
const styleMap = {
  serif: "font-serif italic font-bold tracking-tight",
  "sans-bold": "font-heading font-black uppercase tracking-tight",
  mono: "font-mono font-medium tracking-tight lowercase",
  italic: "font-heading italic font-semibold tracking-tight",
  wide: "font-heading font-bold uppercase tracking-[0.35em]",
  dotted: "font-heading font-bold uppercase tracking-[0.2em]",
  slash: "font-heading font-black uppercase tracking-tight",
  underline: "font-heading font-bold uppercase tracking-[0.15em]"
};

export const LogoMark = ({ name, style = "sans-bold", className = "" }) => {
  const cls = styleMap[style] || styleMap["sans-bold"];

  // optional decorative dot prefix
  const dotted = style === "dotted";
  const slashed = style === "slash";
  const underlined = style === "underline";
  const serifed = style === "serif";

  return (
    <div
      className={`relative flex items-center justify-center text-center px-4 select-none ${className}`}
    >
      <div className="flex items-center gap-2">
        {dotted && <span className="w-1.5 h-1.5 rounded-full bg-current" />}
        <span className={`${cls} text-base sm:text-lg leading-none`}>
          {name}
        </span>
        {slashed && <span className="text-current/40 text-lg">/</span>}
      </div>
      {underlined && (
        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-px w-8 bg-current" />
      )}
      {serifed && (
        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-px w-1.5 bg-current" />
      )}
    </div>
  );
};

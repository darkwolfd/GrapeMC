export default function GlowTitle({ children, color = "blue" }) {
  const cls = {
    blue: "glow-blue",
    cyan: "glow-cyan",
    red: "glow-red",
  }[color];

  return (
    <h1 className={`text-5xl font-extrabold ${cls}`}>
      {children}
    </h1>
  );
}

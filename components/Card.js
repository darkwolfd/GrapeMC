export default function Card({ title, subtitle, children }) {
  return (
    <div className="card-glass">
      <div className="text-sm opacity-60">{subtitle}</div>
      <div className="text-xl font-semibold mt-1">{title}</div>
      <p className="opacity-70 mt-3">{children}</p>
    </div>
  );
}

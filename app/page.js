import Image from "next/image";
import GlowTitle from "../components/GlowTitle";
import Card from "../components/Card";
import CopyIPButton from "../components/CopyIPButton";

export default function Home() {
  return (
    <div className="py-20 container mx-auto px-4">
      <header className="flex items-center justify-between mb-14">
        <div className="flex items-center gap-4">
          <Image src="/logo.png" width={88} height={88} alt="logo" />
          <div>
            <div className="text-sm opacity-60">GrapeMC</div>
            <div className="text-xs opacity-50">Minecraft Server</div>
          </div>
        </div>

        <div className="flex gap-4">
          <a className="btn btn-primary">Play Now</a>
          <a href="https://discord.gg/sAKN5pf3aM" className="btn btn-ghost">Discord</a>
        </div>
      </header>

      <section className="mb-10">
        <GlowTitle color="blue">GrapeMC</GlowTitle>
        <p className="mt-3 text-gray-300 max-w-xl">
          Welcome to GrapeMC — modern Minecraft experience with neon vibes.
        </p>
        <div className="flex gap-3 mt-5">
          <a className="btn btn-primary">Play Now</a>
          <a href="https://discord.gg/sAKN5pf3aM" className="btn btn-ghost">Join Discord</a>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card title="Explorer" subtitle="Rank 1">Starter kit included.</Card>
        <Card title="Builder" subtitle="Rank 2">Claim tools included.</Card>
        <Card title="Elite" subtitle="Rank 3">VIP perks included.</Card>
      </section>

      <section className="mt-10 card-glass">
        <h2 className="text-lg glow-cyan">YouTube</h2>
        <p className="opacity-70 mt-2">Coming Soon…</p>
      </section>

      <section className="mt-10 card-glass">
        <h2 className="text-lg glow-cyan">Server IP</h2>
        <div className="flex items-center justify-between mt-3">
          <div className="ip-badge font-bold text-lg">play.grapemc.fun</div>
          <CopyIPButton ip="play.grapemc.fun" />
        </div>
      </section>

      <footer className="mt-16 border-t border-white/10 pt-6 flex justify-between">
        <div className="footer">© 2025 GrapeMC</div>
        <a href="https://discord.gg/sAKN5pf3aM" className="footer">Discord</a>
      </footer>
    </div>
  );
}

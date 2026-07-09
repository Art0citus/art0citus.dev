import type { FunFact } from "@/data/funFacts";

export default function FunFactCard({ icon: Icon, label, detail, color }: FunFact) {
  return (
    <div className="relative flex h-full w-full flex-col justify-between overflow-hidden border border-border bg-card p-6 shadow-2xl">
      <div className="absolute inset-x-0 top-0 h-1.5" style={{ backgroundColor: color }} />

      <div
        className="flex h-12 w-12 items-center justify-center rounded-2xl"
        style={{ backgroundColor: `${color}26` }}
      >
        <Icon size={22} style={{ color }} />
      </div>

      <div>
        <h3 className="text-xl font-bold">{label}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{detail}</p>
      </div>
    </div>
  );
}

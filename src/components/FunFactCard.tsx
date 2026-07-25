import Image from "next/image";

interface FunFactCardProps {
  image: string;
  title: string;
  subtitle?: string;
}

export default function FunFactCard({ image, title, subtitle }: FunFactCardProps) {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-2xl border border-border bg-card shadow-2xl">
      <Image
        src={image}
        alt={title}
        fill
        className="pointer-events-none object-cover [-webkit-user-drag:none] select-none"
        sizes="256px"
        draggable={false}
        onDragStart={(e) => e.preventDefault()}
      />

      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-4 pt-10">
        <h3 className="text-sm font-bold text-white">{title}</h3>
        {subtitle && (
          <p className="mt-0.5 text-xs text-white/70">{subtitle}</p>
        )}
      </div>
    </div>
  );
}
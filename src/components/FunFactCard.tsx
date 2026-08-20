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
        className="pointer-events-none select-none object-cover [-webkit-user-drag:none]"
        sizes="(max-width: 640px) 50vw, 256px"
        draggable={false}
        onDragStart={(e) => e.preventDefault()}
      />

      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-2.5 pt-8 sm:p-4 sm:pt-10">
        <h3 className="text-xs font-bold text-white sm:text-sm">
          {title}
        </h3>

        {subtitle && (
          <p className="mt-0.5 text-[10px] leading-4 text-white/70 sm:text-xs">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
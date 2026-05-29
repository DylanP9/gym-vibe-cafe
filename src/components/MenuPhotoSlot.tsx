import Image from "next/image";
import type { MenuItemImage } from "@/types/menu";

interface MenuPhotoSlotProps {
  image?: MenuItemImage;
}

export function MenuPhotoSlot({ image }: MenuPhotoSlotProps) {
  if (image) {
    return (
      <Image
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        sizes="(max-width: 639px) calc(100vw - 3rem), (max-width: 1023px) calc(50vw - 3rem), 360px"
        className="aspect-[4/3] w-full rounded-lg object-cover"
      />
    );
  }

  return (
    <div
      className="relative flex aspect-[4/3] w-full items-end overflow-hidden rounded-lg border border-white/10 bg-[linear-gradient(145deg,#f8f4ec,#ebe3d6)] p-3"
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_18%,rgba(164,36,37,0.14),transparent_28%),linear-gradient(135deg,rgba(9,11,10,0.04),transparent_42%)]" />
      <div className="absolute right-3 top-3 h-9 w-9 rounded-full border border-[#d8cfc3]" />
      <span className="relative rounded-full border border-[#ddd5ca] bg-white/92 px-3 py-1.5 text-[0.65rem] font-bold uppercase tracking-[0.15em] text-[#6b635b]">
        Photo space
      </span>
    </div>
  );
}

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
      className="flex aspect-[4/3] w-full items-end rounded-lg border border-[#ded8d1] bg-[#faf8f4] p-3"
      aria-hidden="true"
    >
      <span className="rounded-full border border-[#ddd5ca] bg-white/90 px-3 py-1.5 text-[0.65rem] font-bold uppercase tracking-[0.15em] text-[#6b635b]">
        Photo coming soon
      </span>
    </div>
  );
}

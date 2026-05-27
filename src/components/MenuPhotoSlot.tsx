import Image from "next/image";
import type { MenuItemImage } from "@/types/menu";

interface MenuPhotoSlotProps {
  image?: MenuItemImage;
  itemName: string;
}

export function MenuPhotoSlot({ image, itemName }: MenuPhotoSlotProps) {
  if (image) {
    return (
      <Image
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        className="aspect-[4/3] w-full rounded-lg object-cover"
      />
    );
  }

  return (
    <div
      className="flex aspect-[4/3] w-full items-end rounded-lg border border-[#ded8d1] bg-[#faf8f4] p-3"
      role="img"
      aria-label={`Photo placeholder for ${itemName}`}
    >
      <span className="rounded-full border border-[#ddd5ca] bg-white/90 px-3 py-1.5 text-[0.65rem] font-bold uppercase tracking-[0.15em] text-[#6b635b]">
        Photo coming soon
      </span>
    </div>
  );
}

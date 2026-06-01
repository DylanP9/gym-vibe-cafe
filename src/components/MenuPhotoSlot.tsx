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
      className="relative flex aspect-[4/3] w-full items-end overflow-hidden rounded-md border border-dashed border-white/18 bg-[linear-gradient(145deg,#171312,#0b0b0a)] p-3"
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_18%,rgba(181,31,35,0.24),transparent_28%)]" />
      <span className="relative rounded-md border border-white/15 bg-[#070707]/82 px-3 py-1.5 text-[0.65rem] font-bold uppercase tracking-[0.13em] text-[#d6cabc]">
        Future cafe photography
      </span>
    </div>
  );
}

import Image from "next/image";
import type { OrganizationBrand } from "@/content/resume";

const marks = {
  fedex: { width: 1033, height: 504, displayWidth: 117 },
  walgreens: { width: 322, height: 72, displayWidth: 102 },
  "clovis-west": { width: 943, height: 441, displayWidth: 73 },
} satisfies Record<OrganizationBrand, { width: number; height: number; displayWidth: number }>;

export function OrganizationMark({ brand }: { brand: OrganizationBrand }) {
  const { width, height, displayWidth } = marks[brand];

  return (
    <span className="inline-flex h-12 w-[7.5rem] shrink-0 items-center justify-center rounded-xl border border-[#eee4df] bg-white">
      <Image
        src={`/brands/${brand}.png`}
        alt=""
        width={width}
        height={height}
        unoptimized
        className="h-auto max-h-full object-contain"
        style={{ width: displayWidth }}
      />
    </span>
  );
}

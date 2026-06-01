import type { MenuMacroInfo } from "@/types/menu";

interface MacroBadgeProps {
  macros: MenuMacroInfo;
}

export function MacroBadge({ macros }: MacroBadgeProps) {
  const values = [
    { label: "kcal", value: macros.calories },
    { label: "protein", value: `${macros.proteinGrams}g` },
    { label: "carbs", value: `${macros.carbsGrams}g` },
    { label: "fat", value: `${macros.fatGrams}g` },
  ];

  return (
    <dl className="mt-4 grid grid-cols-2 gap-2 min-[420px]:grid-cols-4" aria-label="Nutrition information">
      {values.map((macro) => (
        <div key={macro.label} className="rounded-md border border-[#b51f23]/35 bg-[#170d0d] px-2 py-2 text-center">
          <dt className="text-[0.64rem] font-black uppercase tracking-[0.1em] text-[#b7aa9d]">{macro.label}</dt>
          <dd className="mt-1 text-sm font-black text-[#f4e8d7]">{macro.value}</dd>
        </div>
      ))}
    </dl>
  );
}

// Minimal classname combiner — joins truthy class tokens with spaces.
// Use in place of `clsx`/`tailwind-merge` for simple class composition.
export type ClassValue =
  | string
  | number
  | null
  | false
  | undefined
  | ClassValue[]
  | { [key: string]: boolean | undefined | null };

export function cn(...inputs: ClassValue[]): string {
  const out: string[] = [];
  for (const v of inputs) {
    if (!v) continue;
    if (typeof v === "string" || typeof v === "number") {
      out.push(String(v));
    } else if (Array.isArray(v)) {
      const inner = cn(...v);
      if (inner) out.push(inner);
    } else if (typeof v === "object") {
      for (const k in v) {
        if (v[k]) out.push(k);
      }
    }
  }
  return out.join(" ");
}

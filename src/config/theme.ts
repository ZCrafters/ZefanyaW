// ============================================================================
// THEME TOKENS — Brand colors, gradients, and shared design constants
// ============================================================================

export const COLORS = {
  primary: "#e50000",
  primaryLight: "#ff3333",
  primaryDark: "#cc0000",
  black: "#000000",
  white: "#ffffff",
} as const;

export const GRADIENTS = {
  primary: "from-[#e50000] to-[#ff3333]",
  primaryReverse: "from-[#ff3333] to-[#e50000]",
  // Experience card color variants
  amber: "from-amber-500 to-orange-600",
  purple: "from-purple-500 to-pink-600",
  blue: "from-blue-500 to-cyan-600",
  red: "from-red-500 to-rose-600",
  green: "from-green-500 to-emerald-600",
  teal: "from-teal-500 to-cyan-600",
} as const;

// Skill category accent colors (used in expertise page)
export const SKILL_COLORS: Record<string, string> = {
  "soft-skills": "#e50000",
  "data-analysis": "#ff3333",
  "digital-marketing": "#ff6666",
  "programming": "#cc0000",
  "tools": "#990000",
} as const;

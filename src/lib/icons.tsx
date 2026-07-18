// ============================================================================
// ICON MAP — Maps string keys to Lucide React components
// This is the ONLY file that imports Lucide for data→icon resolution.
// Usage: const Icon = getIcon("briefcase"); return <Icon className="w-5 h-5" />;
// ============================================================================

import {
  Briefcase,
  Calendar,
  Award,
  GraduationCap,
  Camera,
  Video,
  TrendingUp,
  Database,
  Music,
  Code,
  Globe,
  Heart,
  Building2,
  Store,
  Trophy,
  Layers,
  Target,
  Star,
  BarChart3,
  Bot,
  Handshake,
  Sparkles,
  Zap,
  Lightbulb,
  Users,
  Mail,
  Eye,
  Compass,
  Diamond,
  PenTool,
  Share2,
  Clock,
  HelpCircle,
  type LucideIcon,
} from "lucide-react";

const ICON_MAP: Record<string, LucideIcon> = {
  briefcase: Briefcase,
  calendar: Calendar,
  award: Award,
  "graduation-cap": GraduationCap,
  camera: Camera,
  video: Video,
  "trending-up": TrendingUp,
  database: Database,
  music: Music,
  code: Code,
  globe: Globe,
  heart: Heart,
  building2: Building2,
  store: Store,
  trophy: Trophy,
  layers: Layers,
  target: Target,
  star: Star,
  "bar-chart": BarChart3,
  bot: Bot,
  handshake: Handshake,
  sparkles: Sparkles,
  zap: Zap,
  lightbulb: Lightbulb,
  users: Users,
  mail: Mail,
  eye: Eye,
  compass: Compass,
  diamond: Diamond,
  "pen-tool": PenTool,
  share2: Share2,
  clock: Clock,
  "help-circle": HelpCircle,
};

/**
 * Returns the Lucide icon component for a given string key.
 * Falls back to Sparkles if key is not found.
 */
export function getIcon(key: string): LucideIcon {
  return ICON_MAP[key] ?? Sparkles;
}

export { ICON_MAP };

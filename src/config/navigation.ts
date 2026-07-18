import type { NavItem, SocialLink } from "@/types/portfolio";

export const NAV_ITEMS: NavItem[] = [
  { href: "/", label: "Home", icon: "fa-house" },
  { href: "/about", label: "About", icon: "fa-user" },
  { href: "/expertise", label: "Expertise", icon: "fa-code" },
  { href: "/experience", label: "Experience", icon: "fa-briefcase" },
  { href: "/contact", label: "Contact", icon: "fa-envelope" },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { href: "https://instagram.com/zefanya.williams", label: "Instagram", icon: "fab fa-instagram" },
  { href: "https://tiktok.com/@zefanya.williams", label: "TikTok", icon: "fab fa-tiktok" },
  { href: "https://www.linkedin.com/in/zefanya-williams-272415261/", label: "LinkedIn", icon: "fab fa-linkedin" },
];

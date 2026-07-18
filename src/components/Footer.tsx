import Link from "next/link";
import { NAV_ITEMS, SOCIAL_LINKS } from "@/config/navigation";
import { profile } from "@/data/portfolio.data";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const footerLinks = {
        navigation: NAV_ITEMS,
        social: SOCIAL_LINKS,
    };

    return (
        <footer className="bg-black text-white py-16 md:py-20">
            <div className="container-main">
                {/* Main Footer Content */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    
                    {/* Brand Column */}
                    <div className="lg:col-span-2">
                        <Link href="/" className="inline-block mb-6">
                            <h3 className="text-3xl font-bold tracking-tight">
                                ZEFANYA<span className="text-red-600">.</span>
                            </h3>
                        </Link>
                        <p className="text-gray-400 max-w-md mb-8 leading-relaxed">
                            Digital Business Student & Content Creator. Bridging the gap between creative visual execution and hard data performance.
                        </p>
                        
                        {/* Social Links */}
                        <div className="flex gap-4">
                            {footerLinks.social.map((social, i) => (
                                <a
                                    key={i}
                                    href={social.href}
                                    target={social.href !== "#" ? "_blank" : undefined}
                                    rel={social.href !== "#" ? "noopener noreferrer" : undefined}
                                    className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-red-600 hover:text-white hover:border-red-600 transition-all duration-300"
                                    aria-label={social.label}
                                >
                                    <i className={social.icon}></i>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Column */}
                    <div>
                        <h4 className="text-sm font-semibold uppercase tracking-widest text-gray-400 mb-6">Navigation</h4>
                        <ul className="space-y-4">
                            {footerLinks.navigation.map((link, i) => (
                                <li key={i}>
                                    <Link 
                                        href={link.href}
                                        className="text-gray-300 hover:text-red-500 transition-colors duration-300 inline-flex items-center gap-2 group"
                                    >
                                        <span className="w-0 h-px bg-red-600 group-hover:w-4 transition-all duration-300"></span>
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div>
                        <h4 className="text-sm font-semibold uppercase tracking-widest text-gray-400 mb-6">Contact</h4>
                        <ul className="space-y-4">
                            <li>
                                <a 
                                    href={`mailto:${profile.email}`}
                                    className="text-gray-300 hover:text-red-500 transition-colors duration-300 flex items-center gap-3"
                                >
                                    <i className="fas fa-envelope text-red-600"></i>
                                    {profile.email}
                                </a>
                            </li>
                            <li>
                                <span className="text-gray-300 flex items-center gap-3">
                                    <i className="fas fa-map-marker-alt text-red-600"></i>
                                    {profile.location}
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-white/10 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-gray-500 text-sm">
                            © {currentYear} Zefanya Williams. All rights reserved.
                        </p>
                        <p className="text-gray-600 text-sm">
                            Crafted with <i className="fas fa-heart text-red-600 mx-1"></i> and passion
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

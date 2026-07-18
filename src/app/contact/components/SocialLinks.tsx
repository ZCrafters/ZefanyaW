"use client";

const SOCIALS = [
  { icon: 'fab fa-instagram', label: 'Instagram', href: 'https://instagram.com/zefanya.williams' },
  { icon: 'fab fa-tiktok', label: 'TikTok', href: 'https://tiktok.com/@zefanya.williams' },
  { icon: 'fab fa-linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/zefanya-williams-272415261/' },
];

export default function SocialLinks() {
  return (
    <section className="section-white" style={{ paddingTop: 'clamp(5rem, 9vw, 9rem)', paddingBottom: 'clamp(5rem, 9vw, 9rem)' }}>
      <div className="container-main">
        <div className="text-center">
          <h2 className="display-heading mb-12">
            Connect <span>With Me</span>
          </h2>

          <div className="flex flex-wrap justify-center gap-8 md:gap-12 lg:gap-16">
            {SOCIALS.map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-8 md:p-10 lg:p-12 flex flex-col items-center gap-7 hover-lift group min-w-[170px]"
              >
                <div className="w-14 h-14 rounded-2xl bg-red-600/10 flex items-center justify-center group-hover:bg-red-600 transition-colors">
                  <i className={`${social.icon} text-red-600 text-2xl group-hover:text-white transition-colors`}></i>
                </div>
                <span className="font-semibold">{social.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

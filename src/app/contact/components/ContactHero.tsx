"use client";

interface ContactFormProps {
  formData: { name: string; email: string; message: string };
  setFormData: (data: { name: string; email: string; message: string }) => void;
  handleSubmit: (e: React.FormEvent) => void;
}

export default function ContactHero({ formData, setFormData, handleSubmit }: ContactFormProps) {
  return (
    <section className="section-dark pt-28 md:pt-32 pb-32 md:pb-44 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-900/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-red-900/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container-main relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 md:gap-20 lg:gap-32 items-start">

          {/* Left: Contact Info */}
          <div className="space-y-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-[2px] bg-red-600"></div>
              <span className="label-text text-gray-400">Connection</span>
            </div>

            <h1 className="display-heading text-white">
              LET&apos;S <span>TALK</span>
            </h1>

            <p className="text-lg text-gray-300 max-w-lg leading-[1.85]">
              Let&apos;s engineer the future together. Reach out for collaborations, strategic consulting, or digital project inquiries.
            </p>

            <div className="space-y-9">
              <a href="mailto:zefanyawilliams@gmail.com" className="flex items-center gap-5 group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-red-600 group-hover:bg-red-600 group-hover:text-white transition-all duration-300 flex-shrink-0">
                  <i className="fas fa-envelope text-xl"></i>
                </div>
                <div>
                  <span className="text-xs text-gray-500 uppercase tracking-wider block mb-0.5">Email</span>
                  <span className="text-white group-hover:text-red-500 transition-colors font-medium">zefanyawilliams@gmail.com</span>
                </div>
              </a>

              <a href="https://instagram.com/zefanya.williams" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-red-600 group-hover:bg-red-600 group-hover:text-white transition-all duration-300 flex-shrink-0">
                  <i className="fab fa-instagram text-xl"></i>
                </div>
                <div>
                  <span className="text-xs text-gray-500 uppercase tracking-wider block mb-0.5">Instagram</span>
                  <span className="text-white group-hover:text-red-500 transition-colors font-medium">@zefanya.williams</span>
                </div>
              </a>

              <a href="https://tiktok.com/@zefanya.williams" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-red-600 group-hover:bg-red-600 group-hover:text-white transition-all duration-300 flex-shrink-0">
                  <i className="fab fa-tiktok text-xl"></i>
                </div>
                <div>
                  <span className="text-xs text-gray-500 uppercase tracking-wider block mb-0.5">TikTok</span>
                  <span className="text-white group-hover:text-red-500 transition-colors font-medium">@zefanya.williams</span>
                </div>
              </a>

              <a href="https://www.linkedin.com/in/zefanya-williams-272415261/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-red-600 group-hover:bg-red-600 group-hover:text-white transition-all duration-300 flex-shrink-0">
                  <i className="fab fa-linkedin text-xl"></i>
                </div>
                <div>
                  <span className="text-xs text-gray-500 uppercase tracking-wider block mb-0.5">LinkedIn</span>
                  <span className="text-white group-hover:text-red-500 transition-colors font-medium">Zefanya Williams</span>
                </div>
              </a>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div>
            <div className="glass-card-dark p-8 sm:p-10 md:p-14 lg:p-16 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-10 flex items-center gap-4">
                <span className="w-1 h-8 bg-red-600 rounded-full"></span>
                Send Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <label className="form-label text-gray-300" style={{ marginBottom: '8px', display: 'block' }}>Your Name</label>
                  <input
                    type="text"
                    className="form-input bg-white/5 border-white/10 text-white placeholder-gray-500 focus:border-red-600"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>

                <div>
                  <label className="form-label text-gray-300" style={{ marginBottom: '8px', display: 'block' }}>Your Email</label>
                  <input
                    type="email"
                    className="form-input bg-white/5 border-white/10 text-white placeholder-gray-500 focus:border-red-600"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>

                <div>
                  <label className="form-label text-gray-300" style={{ marginBottom: '8px', display: 'block' }}>Your Message</label>
                  <textarea
                    className="form-input bg-white/5 border-white/10 text-white placeholder-gray-500 focus:border-red-600 resize-none"
                    style={{ minHeight: "140px" }}
                    placeholder="Tell me about your project..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary w-full mt-2">
                  Send Message <i className="fas fa-paper-plane ml-2"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

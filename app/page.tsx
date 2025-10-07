"use client"

import { useEffect } from "react"
import Link from "next/link"

export default function HomePage() {
  useEffect(() => {
    // Loading screen logic (simplified to avoid long autoplay issues)
    const loadingScreen = document.getElementById("loading-screen")
    const loadingVideo = document.getElementById("loading-video") as HTMLVideoElement | null
    const hide = () => {
      if (!loadingScreen) return
      loadingScreen.classList.add("hidden")
      setTimeout(() => {
        ;(loadingScreen as HTMLElement).style.display = "none"
      }, 800)
    }
    // Fallback hide after 12s
    const t = setTimeout(hide, 12000)
    if (loadingVideo) {
      loadingVideo.play().catch(() => {
        // if autoplay blocked, user click will hide it
        loadingScreen?.addEventListener("click", hide, { once: true })
      })
      loadingVideo.addEventListener("error", () => setTimeout(hide, 3000))
    }
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    // Sidebar toggle and digital clock (ported, safe checks)
    const menuToggle = document.getElementById("menuToggle")
    const sidebar = document.getElementById("sidebar")
    const overlay = document.getElementById("overlay")
    const clock = document.getElementById("digitalClock")

    const toggle = () => {
      sidebar?.classList.toggle("open")
      overlay?.classList.toggle("open")
      document.body.style.overflow = sidebar?.classList.contains("open") ? "hidden" : ""
    }

    const close = () => {
      sidebar?.classList.remove("open")
      overlay?.classList.remove("open")
      document.body.style.overflow = ""
    }

    menuToggle?.addEventListener("click", toggle)
    overlay?.addEventListener("click", close)

    const updateClock = () => {
      if (!clock) return
      const now = new Date()
      const time = now.toLocaleTimeString("en-US", { hour12: false })
      clock.innerHTML = `<span class="time">${time}</span><span class="timezone">WIB</span>`
    }
    const interval = setInterval(updateClock, 1000)
    updateClock()

    return () => {
      menuToggle?.removeEventListener("click", toggle)
      overlay?.removeEventListener("click", close)
      clearInterval(interval)
    }
  }, [])

  return (
    <main className="min-h-screen relative">
      {/* Loading Screen */}
      <div id="loading-screen">
        <video id="loading-video" autoPlay playsInline>
          <source src="/assets/loading.mp4" type="video/mp4" />
        </video>
        <div className="loading-animation">
          <div className="loading-bar">
            <div className="loading-progress" />
          </div>
          <div className="loading-text">Loading Experience...</div>
        </div>
      </div>

      {/* Red bar decorative element */}
      <div className="red-bar" />

      {/* Texture overlay */}
      <div className="texture-overlay" />

      {/* Menu Toggle Button */}
      <button className="menu-toggle" id="menuToggle" aria-label="Toggle Menu">
        <i className="fas fa-bars text-xl" />
      </button>

      {/* Digital Clock */}
      <div className="digital-clock" id="digitalClock" />

      {/* Overlay */}
      <div className="overlay" id="overlay" />

      {/* Sidebar Menu */}
      <aside className="sidebar" id="sidebar" aria-hidden="true">
        <div className="sidebar-header">
          <h2 className="text-2xl font-bold text-white glow-text">Menu</h2>
        </div>
        <ul className="sidebar-menu">
          <li>
            <Link href="/" className="active">
              <i className="fas fa-home" /> Home
            </Link>
          </li>
          <li>
            <Link href="/about">
              <i className="fas fa-user" /> About Me
            </Link>
          </li>
          <li>
            <Link href="/expertise">
              <i className="fas fa-code" /> Expertise
            </Link>
          </li>
          <li>
            <Link href="/experience">
              <i className="fas fa-briefcase" /> Experience
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <i className="fas fa-envelope" /> Contact
            </Link>
          </li>
          <li className="social-links" style={{ marginTop: 20, display: "flex", gap: 15, justifyContent: "center" }}>
            <a
              href="https://www.instagram.com/zefanya.williams/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <i className="fab fa-instagram" />
            </a>
            <a
              href="https://www.tiktok.com/@zefanya.williams"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <i className="fab fa-tiktok" />
            </a>
          </li>
        </ul>
      </aside>

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden hero-highlight bg-dark"
      >
        {/* Floating icons */}
        <div
          className="floating-icon text-2xl sm:text-3xl md:text-4xl"
          style={{ top: "20%", left: "10%", animationDelay: "-2s" }}
        >
          <i className="fab fa-html5" />
        </div>
        <div
          className="floating-icon text-2xl sm:text-3xl md:text-4xl"
          style={{ top: "30%", right: "15%", animationDelay: "-7s" }}
        >
          <i className="fab fa-css3-alt" />
        </div>
        <div
          className="floating-icon text-2xl sm:text-3xl md:text-4xl"
          style={{ bottom: "25%", left: "20%", animationDelay: "-12s" }}
        >
          <i className="fab fa-js" />
        </div>
        <div
          className="floating-icon text-2xl sm:text-3xl md:text-4xl"
          style={{ bottom: "35%", right: "10%", animationDelay: "-15s" }}
        >
          <i className="fas fa-code" />
        </div>
        <div
          className="floating-icon text-2xl sm:text-3xl md:text-4xl"
          style={{ top: "15%", right: "25%", animationDelay: "-20s" }}
        >
          <i className="fas fa-laptop-code" />
        </div>
        <div
          className="floating-icon text-2xl sm:text-3xl md:text-4xl"
          style={{ bottom: "20%", right: "30%", animationDelay: "-25s" }}
        >
          <i className="fas fa-envelope" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 py-20 z-10">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
            <div className="w-full lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                <span className="animated-gradient">Zefanya Williams</span>
              </h1>
              <h2 className="text-lg sm:text-xl md:text-2xl text-accent mb-6 font-medium">
                Digital Business Student | Content Creator | AI Enthusiast
              </h2>
              <p className="text-black mb-8 max-w-2xl mx-auto lg:mx-0 text-sm sm:text-base leading-relaxed bg-white bg-opacity-90 backdrop-blur-sm px-6 py-4 rounded-2xl border border-red-200 shadow-lg">
                A dedicated <strong>digital business student</strong> specializing in content creation, digital
                marketing, and data science. Passionate about solving complex challenges and contributing to{" "}
                <em>innovative projects</em>.
              </p>
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                <Link
                  href="/contact"
                  className="px-6 py-3 bg-gradient-to-r from-primary to-gray-800 rounded-full font-medium glowing-button text-sm sm:text-base"
                >
                  Contact Me
                </Link>
                <Link
                  href="/about"
                  className="px-6 py-3 border border-primary text-primary rounded-full font-medium hover:bg-primary hover:bg-opacity-10 transition text-sm sm:text-base"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="w-full lg:w-1/2 flex justify-center">
              <div className="profile-circle">
                <img
                  src="https://lh3.googleusercontent.com/a/ACg8ocLX3p_aKn0gXs5yR-2Gf5Qb3ydICZu2W5Or0L2gOmm9v5Vus8Gvig=s216-c-no"
                  alt="Zefanya Williams"
                  className="profile-image"
                />
                <div className="profile-particles" id="profile-particles" />
                <div className="glow-ring" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview (ringkas) */}
      <section id="about-preview" className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">About Me</h2>
            <div className="section-divider" />
            <p className="text-white max-w-3xl mx-auto text-lg leading-relaxed">
              Passionate digital business student bridging technology and creativity to solve real-world challenges.
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="text-center lg:text-left">
              <div className="profile-rectangle inline-block">
                <img src="/assets/DSC08129.JPG" alt="Zefanya Williams" className="profile-image-rect" />
                <div className="profile-particles-rect" id="profile-particles-about" />
                <div className="glow-ring-rect" />
              </div>
            </div>
            <div className="space-y-8">
              <div className="card-glass p-8 rounded-3xl">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-red-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <i className="fas fa-user text-2xl text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white glow-text">Who I Am</h3>
                <p className="text-gray-300 leading-relaxed text-lg">
                  I'm a dedicated <strong className="text-primary">digital business student</strong> passionate about
                  leveraging technology to create meaningful solutions.
                </p>
              </div>
              <div className="card-glass p-8 rounded-3xl">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <i className="fas fa-lightbulb text-2xl text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white glow-text">My Passion</h3>
                <p className="text-gray-300 leading-relaxed text-lg">
                  Creative thinking + technical expertise across AI, content, and digital experiences.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary opacity-5 rounded-full" />
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-red-500 opacity-5 rounded-full" />
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-blue-500 opacity-5 rounded-full" />
      </section>

      {/* Footer */}
      <footer className="bg-black py-10 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="text-2xl font-bold animated-gradient">Zefanya Williams</div>
              <p className="text-gray-300 mt-2">Digital Business Student & Content Creator</p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-primary transition">
                <i className="fab fa-instagram text-xl" />
              </a>
              <a href="#" className="text-gray-600 hover:text-primary transition">
                <i className="fab fa-linkedin text-xl" />
              </a>
              <a href="#" className="text-gray-600 hover:text-primary transition">
                <i className="fab fa-github text-xl" />
              </a>
              <a href="#" className="text-gray-600 hover:text-primary transition">
                <i className="fab fa-youtube text-xl" />
              </a>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-700 pt-8 text-center text-gray-400 text-sm">
            &copy; 2025 Zefanya Williams. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  )
}

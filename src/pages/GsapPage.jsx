// src/pages/GsapLongPage.jsx
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function GsapPage() {
  const heroRef = useRef(null)
  const sectionsRef = useRef([])
  const footerRef = useRef(null)
  const stickyTitleRef = useRef(null)

  useEffect(() => {
    ScrollTrigger.getAll().forEach(t => t.kill())

    // Hero animation
    gsap.from(heroRef.current, {
      opacity: 0,
      y: -80,
      duration: 1.2,
      ease: 'power3.out',
    })

    // Sticky title animation
    gsap.to(stickyTitleRef.current, {
      scrollTrigger: {
        trigger: stickyTitleRef.current,
        start: 'top top',
        end: '+=300',
        scrub: true,
        pin: true,
      },
      scale: 1.1,
      opacity: 1,
    })

    // Section fade-in animations
    sectionsRef.current.forEach((el, i) => {
      if (!el) return
      gsap.fromTo(
        el,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
          },
        }
      )
    })

    // Footer reveal
    gsap.from(footerRef.current, {
      opacity: 0,
      y: 100,
      scrollTrigger: {
        trigger: footerRef.current,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    })
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a23] to-black text-white font-sans overflow-x-hidden">
      {/* HERO */}
      <section ref={heroRef} className="text-center py-24 px-6 space-y-6">
        <h1 className="text-5xl sm:text-6xl font-bold">
          <span className="text-teal-400">Scroll</span> Through the Magic
        </h1>
        <p className="text-gray-300 text-lg">
          Powered by GSAP & ScrollTrigger with React
        </p>
      </section>

      {/* Sticky Title */}
      <div className="sticky top-0 bg-[#0a0a23] z-10 py-6">
        <h2
          ref={stickyTitleRef}
          className="text-4xl font-semibold text-center text-teal-300"
        >
          Sections Ahead ↓
        </h2>
      </div>

      {/* CONTENT SECTIONS */}
      <div className="px-6 sm:px-20 space-y-32 py-20">
        {Array.from({ length: 10 }, (_, i) => (
          <section
            key={i}
            ref={(el) => (sectionsRef.current[i] = el)}
            className="p-6 bg-white/10 rounded-2xl shadow-xl backdrop-blur hover:scale-[1.02] transition-transform duration-300"
          >
            <h3 className="text-3xl font-bold mb-2 text-teal-400">
              Section {i + 1}
            </h3>
            <p className="text-gray-300 text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
              Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh
              elementum imperdiet.
            </p>
          </section>
        ))}
      </div>

      {/* FOOTER */}
      <footer
        ref={footerRef}
        className="text-center text-gray-400 py-16 border-t border-white/10"
      >
        ✨ Thanks for scrolling! Built with React + GSAP ✨
      </footer>
    </div>
  )
}

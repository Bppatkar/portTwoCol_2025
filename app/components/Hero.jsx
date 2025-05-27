"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Typed from "typed.js"; // Import Typed.js

function Hero() {
  const heroRef = useRef(null);
  const nameRef = useRef(null);
  const titleRef = useRef(null);
  const buttonRef = useRef(null);
  const typedSpanRef = useRef(null); // Ref for Typed.js span

  useEffect(() => {
    // GSAP Animations
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.fromTo(
        nameRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      )
        .fromTo(
          titleRef.current,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
          "-=0.5"
        )
        .fromTo(
          buttonRef.current,
          { opacity: 0, scale: 0.8 },
          { opacity: 1, scale: 1, duration: 0.8, ease: "back.out(1.7)" },
          "-=0.5"
        );
    }, heroRef);

    // Typed.js Effect
    const typed = new Typed(typedSpanRef.current, {
      strings: [
        "Full stack Developer",
        "Web Developer",
        "Front-end Developer",
        "Back-end Developer",
        "UI-UX Designer",
        "Coder",
      ],
      loop: true,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1500,
    });

    return () => {
      ctx.revert();
      typed.destroy(); // Clean up Typed.js instance on unmount
    };
  }, []);

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative h-screen flex flex-col justify-center items-center text-center p-4 overflow-hidden"
      style={{ color: 'var(--color-primary-text)' }}
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        poster="/images/video-poster.jpg" // Optional: A static image to show while video loads
      >
        <source src="/videos/hero-background.mp4" type="video/mp4" />
        {/* If using a GIF, replace <video> with <img> and update src:
        <img src="/gifs/hero-background.gif" alt="Hero Background" className="absolute inset-0 w-full h-full object-cover z-0" />
        */}
        Your browser does not support the video tag.
      </video>

      {/* Overlay to ensure text readability */}
      <div className="absolute inset-0 bg-black opacity-60 z-10"></div>

      {/* Content */}
      <div className="z-20 relative">
        <h1
          ref={nameRef}
          className="text-5xl md:text-7xl font-bold mb-4 leading-tight text-[var(--color-primary-text)]"
        >
          Hello, I'm <span className="text-[var(--color-accent-neon-blue)]">Jane Doe</span>
        </h1>
        <p
          ref={titleRef}
          className="text-xl md:text-3xl mb-8 max-w-2xl text-[var(--color-secondary-text)]"
        >
          A passionate{" "}
          <span className="font-semibold text-[var(--color-accent-orange)]"> {/* Changed to accent-orange */}
            <span ref={typedSpanRef} id="typed-output"></span>
          </span>{" "}
          building engaging web experiences.
        </p>
        <a
          ref={buttonRef}
          href="#projects"
          className="px-8 py-4 bg-[var(--color-accent-orange)] text-[var(--color-primary-text)] font-bold text-lg rounded-full shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out transform hover:shadow-xl hover:bg-[var(--color-accent-neon-blue)]" // Hover to neon blue
        >
          View My Work
        </a>
      </div>
    </section>
  );
}

export default Hero;
"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";

function Hero() {
  const heroRef = useRef(null);
  const textRef = useRef(null);
  const buttonRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, delay: 0.5, ease: "power3.out" }
    );
    gsap.fromTo(
      buttonRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, delay: 0.8, ease: "power3.out" }
    );

    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play().catch(error => {
        console.log("Video autoplay blocked:", error);
      });
    }
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex flex-col justify-center items-center text-center overflow-hidden z-0"
    >
      <video
        ref={videoRef}
        autoPlay
        loop
        playsInline
        preload="auto"
        poster="/images/hero-background-poster.jpg"
        className="fixed inset-0 w-full h-full object-cover z-[-1] opacity-40"
      >
        <source src="/videos/hero-background.mp4" type="video/mp4" />
      </video>
      <div className="relative z-10 p-4 max-w-4xl mx-auto flex flex-col justify-center items-center h-screen">
        <h1
          ref={textRef}
          className="text-5xl md:text-7xl font-bold text-[var(--color-primary-text)] mb-4"
        >
          Hello, I'm{" "}
          <span className="text-[var(--color-accent-neon-blue)]">
            Bhanu Pratap
          </span>
        </h1>
        <p
          ref={textRef}
          className="text-lg md:text-2xl text-[var(--color-secondary-text)] mb-8"
        >
          A passionate{" "}
          <span className="text-[var(--color-accent-orange)] font-semibold">
            Full Stack Developer
          </span>{" "}
          building engaging web experiences.
        </p>
        <Link href="#projects">
          <button
            ref={buttonRef}
            className="bg-[var(--color-accent-orange)] text-[var(--color-primary-text)] px-8 py-4 rounded-full text-lg font-semibold hover:bg-[var(--color-accent-neon-blue)] transition-colors duration-300 shadow-lg shadow-theme-adapt"
          >
            View My Work
          </button>
        </Link>
      </div>
    </section>
  );
}

export default Hero;

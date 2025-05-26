"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

function Hero() {
  const heroRef = useRef(null);
  const nameRef = useRef(null);
  const titleRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
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

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="h-screen flex flex-col justify-center items-center text-center p-4 bg-gradient-to-br from-primary to-secondary"
    >
      <h1
        ref={nameRef}
        className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight"
      >
        Hello, I'm <span className="text-accent">Jane Doe</span>
      </h1>
      <p
        ref={titleRef}
        className="text-xl md:text-3xl text-text mb-8 max-w-2xl"
      >
        A passionate{" "}
        <span className="font-semibold text-accent">Full Stack Developer</span>{" "}
        building engaging web experiences.
      </p>
      <a
        ref={buttonRef}
        href="#projects"
        className="px-8 py-4 bg-accent text-white font-bold text-lg rounded-full shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out transform hover:shadow-xl"
      >
        View My Work
      </a>
    </section>
  );
}

export default Hero;

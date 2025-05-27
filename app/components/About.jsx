"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

function About() {
  const aboutRef = useRef(null);
  const textRef = useRef(null);
  const imageContainerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        textRef.current,
        { opacity: 0, x: -100 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: aboutRef.current,
            start: "top 70%",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.fromTo(
        imageContainerRef.current,
        { opacity: 0, x: 100 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: aboutRef.current,
            start: "top 70%",
            toggleActions: "play none none none",
          },
        }
      );

      // GSAP for hover zoom effect
      gsap.to(imageContainerRef.current, {
        scale: 1.1,
        duration: 0.3,
        ease: "power2.out",
        paused: true,
        overwrite: true,
        onReverseComplete: () => gsap.set(imageContainerRef.current, { scale: 1 })
      });

      imageContainerRef.current.addEventListener('mouseenter', () => gsap.to(imageContainerRef.current, { scale: 1.1 }));
      imageContainerRef.current.addEventListener('mouseleave', () => gsap.to(imageContainerRef.current, { scale: 1 }));

    }, aboutRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={aboutRef}
      className="container mx-auto py-20 px-4 md:px-8"
      style={{ backgroundColor: 'var(--color-app-bg)', color: 'var(--color-primary-text)' }}
    >
      <h2 className="text-4xl font-bold text-center text-[var(--color-accent-neon-blue)] mb-12">
        About Me
      </h2>
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div ref={textRef} className="md:w-1/2 text-lg leading-relaxed text-[var(--color-secondary-text)]">
          <p className="mb-4">
            Hi, I'm Jane Doe, a dedicated Full Stack Developer with a passion
            for creating dynamic and intuitive web applications. My journey into
            coding began with a fascination for how digital experiences are
            crafted, leading me to explore both front-end aesthetics and
            back-end logic.
          </p>
          <p className="mb-4">
            I specialize in JavaScript, React, Next.js for the front-end, and
            Node.js with Express for the back-end. I'm also proficient in
            database management using MongoDB and PostgreSQL. I thrive on
            solving complex problems and continuously learning new technologies
            to enhance my skill set.
          </p>
          <p>
            When I'm not coding, you can find me exploring new hiking trails,
            experimenting with new recipes, or diving into a good book. I
            believe in continuous growth and bringing creative solutions to life
            through code.
          </p>
        </div>
        <div ref={imageContainerRef} className="md:w-1/2 flex justify-center cursor-pointer transition-transform duration-300 ease-in-out">
          <Image
            src="/images/your-photo.jpg" // IMPORTANT: Update this path to your actual profile picture
            alt="Jane Doe"
            width={400}
            height={400}
            className="rounded-full shadow-xl object-cover w-64 h-64 md:w-80 md:h-80 border-4"
            style={{ borderColor: 'var(--color-accent-neon-blue)' }} 
          />
        </div>
      </div>
    </section>
  );
}

export default About;
"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Navbar() {
  const navRef = useRef(null);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
    );

    const sections = ["hero", "about", "projects", "contact"];
    const handleScroll = () => {
      let currentActive = "hero";
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            currentActive = sections[i];
            break;
          }
        }
      }
      setActiveSection(currentActive);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 p-4 shadow-lg rounded-b-xl"
      style={{ backgroundColor: 'var(--color-section-bg)', color: 'var(--color-primary-text)' }}
    >
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link
          href="/"
          className="text-2xl font-bold text-[var(--color-accent-neon-blue)] hover:text-[var(--color-primary-text)] transition-colors duration-300"
        >
          My Portfolio
        </Link>
        <ul className="flex space-x-6">
          <li>
            <Link
              href="#about"
              className={`font-semibold transition-colors duration-300 ${
                activeSection === "about" ? "text-[var(--color-accent-orange)]" : "text-[var(--color-primary-text)] hover:text-[var(--color-accent-neon-blue)]"
              }`}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="#projects"
              className={`font-semibold transition-colors duration-300 ${
                activeSection === "projects" ? "text-[var(--color-accent-orange)]" : "text-[var(--color-primary-text)] hover:text-[var(--color-accent-neon-blue)]"
              }`}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="#contact"
              className={`font-semibold transition-colors duration-300 ${
                activeSection === "contact" ? "text-[var(--color-accent-orange)]" : "text-[var(--color-primary-text)] hover:text-[var(--color-accent-neon-blue)]"
              }`}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

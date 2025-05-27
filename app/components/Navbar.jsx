"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useTheme } from "../context/ThemeContext";

gsap.registerPlugin(ScrollTrigger);

function Navbar() {
  const navRef = useRef(null);
  const [activeSection, setActiveSection] = useState("hero");
  const { theme, toggleTheme } = useTheme();

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
          if (
            rect.top <= window.innerHeight / 2 &&
            rect.bottom >= window.innerHeight / 2
          ) {
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
      className="fixed top-0 left-0 right-0 z-50 p-4 shadow-lg rounded-b-xl section-overlay"
    >
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link
          href="/"
          className="text-2xl font-bold text-[var(--color-accent-neon-blue)] hover:text-[var(--color-primary-text)] transition-colors duration-300"
        >
          My Portfolio
        </Link>
        <div className="flex items-center space-x-6">
          <ul className="flex space-x-6">
            <li>
              <Link
                href="#about"
                className={`font-semibold transition-colors duration-300 ${
                  activeSection === "about"
                    ? "text-[var(--color-accent-orange)]"
                    : "text-[var(--color-primary-text)] hover:text-[var(--color-accent-neon-blue)]"
                }`}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="#projects"
                className={`font-semibold transition-colors duration-300 ${
                  activeSection === "projects"
                    ? "text-[var(--color-accent-orange)]"
                    : "text-[var(--color-primary-text)] hover:text-[var(--color-accent-neon-blue)]"
                }`}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                className={`font-semibold transition-colors duration-300 ${
                  activeSection === "contact"
                    ? "text-[var(--color-accent-orange)]"
                    : "text-[var(--color-primary-text)] hover:text-[var(--color-accent-neon-blue)]"
                }`}
              >
                Contact
              </Link>
            </li>
          </ul>
          <a
            href="/Bhanu_Pratap_Resume.pdf"
            download
            className="bg-[var(--color-accent-orange)] text-[var(--color-primary-text)] px-4 py-2 rounded-full text-sm font-semibold hover:bg-[var(--color-accent-neon-blue)] transition-colors duration-300 shadow-md"
          >
            Download Resume
          </a>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-[var(--color-tertiary-text)] text-[var(--color-primary-text)] hover:bg-[var(--color-accent-neon-blue)] transition-colors duration-300"
          >
            {theme === "dark" ? (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3A.75.75 0 0112 2.25zM12 19.5a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V20.25a.75.75 0 011.75-.75zM4.5 12a.75.75 0 01.75-.75h2.25a.75.75 0 010 1.5H5.25A.75.75 0 014.5 12zM17.25 12a.75.75 0 01.75-.75h2.25a.75.75 0 010 1.5H18A.75.75 0 0117.25 12zM6.002 6.002a.75.75 0 011.06-1.06l1.59 1.59a.75.75 0 01-1.06 1.06l-1.59-1.59zM16.938 16.938a.75.75 0 011.06-1.06l1.59 1.59a.75.75 0 01-1.06 1.06l-1.59-1.59zM16.938 7.062a.75.75 0 011.06 1.06l-1.59 1.59a.75.75 0 01-1.06-1.06l1.59-1.59zM6.002 16.938a.75.75 0 011.06 1.06l1.59-1.59a.75.75 0 01-1.06-1.06l-1.59 1.59zM12 7.5a4.5 4.5 0 100 9 4.5 4.5 0 000-9z" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  d="M9.529 1.25a1.5 1.5 0 011.037 1.748c-.469 1.256-.729 2.56-.729 3.902 0 1.342.26 2.646.729 3.902a1.5 1.5 0 01-1.037 1.748A1.502 1.502 0 017.92 11.25c-.469-1.256-.729-2.56-.729-3.902 0-1.342.26-2.646.729-3.902a1.5 1.5 0 011.609-1.748zm3.507 9.992l-2.032 2.032a1.503 1.503 0 01-1.777.362l-2.032-2.032a1.5 1.5 0 01.362-1.777l2.032-2.032a1.5 1.5 0 011.777-.362l2.032 2.032a1.5 1.5 0 01-.362 1.777zm-3.507-6.096l2.032 2.032a1.503 1.503 0 01.362 1.777l-2.032 2.032a1.5 1.5 0 01-1.777-.362l-2.032-2.032a1.5 1.5 0 01.362-1.777l2.032-2.032a1.5 1.5 0 011.777.362zm.609 9.992l2.032-2.032a1.503 1.503 0 011.777-.362l2.032 2.032a1.5 1.5 0 01-.362 1.777l-2.032 2.032a1.5 1.5 0 01-1.777.362l-2.032-2.032a1.5 1.5 0 01.362-1.777zm.609-6.096l-2.032-2.032a1.503 1.503 0 01-.362-1.777l2.032-2.032a1.5 1.5 0 011.777.362l2.032 2.032a1.5 1.5 0 01-.362 1.777l-2.032 2.032a1.5 1.5 0 01-1.777-.362z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

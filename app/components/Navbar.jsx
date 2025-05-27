"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";

function Navbar() {
  const navRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
    );
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
              className="text-[var(--color-primary-text)] hover:text-[var(--color-accent-neon-blue)] transition-colors duration-300 font-semibold"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="#projects"
              className="text-[var(--color-primary-text)] hover:text-[var(--color-accent-neon-blue)] transition-colors duration-300 font-semibold"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="#contact"
              className="text-[var(--color-primary-text)] hover:text-[var(--color-accent-neon-blue)] transition-colors duration-300 font-semibold"
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
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
      className="fixed top-0 left-0 right-0 z-50 p-4 bg-primary bg-opacity-90 shadow-lg rounded-b-xl"
    >
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link
          href="/"
          className="text-2xl font-bold text-accent hover:text-white transition-colors duration-300"
        >
          My Portfolio
        </Link>
        <ul className="flex space-x-6">
          <li>
            <Link
              href="#about"
              className="text-text hover:text-accent transition-colors duration-300 font-semibold"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="#projects"
              className="text-text hover:text-accent transition-colors duration-300 font-semibold"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="#contact"
              className="text-text hover:text-accent transition-colors duration-300 font-semibold"
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

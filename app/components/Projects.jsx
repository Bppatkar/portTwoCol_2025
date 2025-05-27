"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Link from "next/link";
import { useTheme } from "../context/ThemeContext";

gsap.registerPlugin(ScrollTrigger);

function ProjectCard({ image, title, description, liveLink, githubLink }) {
  const cardRef = useRef(null);
  const { theme } = useTheme();

  useEffect(() => {
    gsap.fromTo(
      cardRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <div
      ref={cardRef}
      className="p-6 rounded-xl shadow-lg flex flex-col items-center text-center section-card-bg shadow-theme-adapt"
    >
      <img
        src={`/images/${image}`}
        alt={title}
        className="w-full h-48 object-cover rounded-md mb-4 shadow-md"
      />
      <h3 className="text-2xl font-bold text-[var(--color-accent-orange)] mb-2">
        {title}
      </h3>
      <p className="text-[var(--color-secondary-text)] mb-4">{description}</p>
      <div className="flex gap-4 mt-auto">
        {liveLink && (
          <Link
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[var(--color-accent-neon-blue)] text-[var(--color-primary-text)] px-4 py-2 rounded-full text-sm font-semibold hover:bg-[var(--color-accent-orange)] transition-colors duration-300 shadow-md"
          >
            Live Demo
          </Link>
        )}
        {githubLink && (
          <Link
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[var(--color-tertiary-text)] text-[var(--color-primary-text)] px-4 py-2 rounded-full text-sm font-semibold hover:bg-[var(--color-accent-neon-blue)] transition-colors duration-300 shadow-md"
          >
            GitHub
          </Link>
        )}
      </div>
    </div>
  );
}

function Projects() {
  const projectsRef = useRef(null);
  const projectsContentRef = useRef(null);
  const { theme } = useTheme();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        projectsContentRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: projectsRef.current,
            start: "top 70%",
            toggleActions: "play none none none",
          },
        }
      );
    }, projectsRef);

    return () => ctx.revert();
  }, []);

  const projectData = [
    {
      image: "atomic.jpg",
      title: "Atomic Habit Tracker",
      description: "A full-stack application to track and build daily habits.",
      liveLink: "#",
      githubLink: "#",
    },
    {
      image: "dominos.jpg",
      title: "Domino's Clone",
      description: "A responsive front-end clone of the Domino's Pizza ordering site.",
      liveLink: "#",
      githubLink: "#",
    },
    {
      image: "music.jpg",
      title: "Music Player App",
      description: "A web-based music player with play, pause, and playlist features.",
      liveLink: "#",
      githubLink: "#",
    },
    {
        image: "todo.jpg",
        title: "Advanced Todo App",
        description: "A feature-rich todo application with filtering and persistence.",
        liveLink: "#",
        githubLink: "#",
    },
    {
        image: "vpn.jpg",
        title: "VPN Service Landing Page",
        description: "A modern landing page for a fictional VPN service, showcasing design skills.",
        liveLink: "#",
        githubLink: "#",
    },
    {
        image: "videoPlayer.jpg",
        title: "Custom Video Player",
        description: "A web-based video player with custom controls and progress bar.",
        liveLink: "#",
        githubLink: "#",
    },
  ];

  return (
    <section
      id="projects"
      ref={projectsRef}
      className="section-overlay container mx-auto py-20 px-4 md:px-8"
    >
      <h2 className="text-4xl font-bold text-center text-[var(--color-accent-neon-blue)] mb-12">
        My Projects
      </h2>
      <div
        ref={projectsContentRef}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {projectData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;

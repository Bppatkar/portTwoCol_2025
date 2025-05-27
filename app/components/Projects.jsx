"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

const projectsData = [
  {
    id: 1,
    title: "E-commerce Platform (Dominos)",
    description:
      "A full-stack e-commerce application with user authentication, product listings, shopping cart, and secure payment integration.",
    tech: ["Next.js", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    image: "/images/dominos.jpg",
    link: "#",
  },
  {
    id: 2,
    title: "Task Management App (Todo)",
    description:
      "A responsive task management application with drag-and-drop functionality, real-time updates, and user collaboration features.",
    tech: ["React", "Firebase", "GSAP", "Styled Components"],
    image: "/images/todo.jpg",
    link: "#",
  },
  {
    id: 3,
    title: "Music Player",
    description:
      "A sleek and modern personal blog built with a headless CMS, allowing for easy content creation and management.",
    tech: ["Next.js", "GraphQL", "Strapi", "Tailwind CSS"],
    image: "/images/music.jpg",
    link: "#",
  },
  {
    id: 4,
    title: "Video Player",
    description:
      "A sleek and modern personal blog built with a headless CMS, allowing for easy content creation and management.",
    tech: ["Next.js", "GraphQL", "Strapi", "Tailwind CSS"],
    image: "/images/videoPlayer.jpg",
    link: "#",
  },
  {
    id: 5,
    title: "VPN Service",
    description:
      "A sleek and modern personal blog built with a headless CMS, allowing for easy content creation and management.",
    tech: ["Next.js", "GraphQL", "Strapi", "Tailwind CSS"],
    image: "/images/vpn.jpg",
    link: "#",
  },
  {
    id: 6,
    title: "Food Delivery App (Eat)",
    description:
      "A sleek and modern personal blog built with a headless CMS, allowing for easy content creation and management.",
    tech: ["Next.js", "GraphQL", "Strapi", "Tailwind CSS"],
    image: "/images/Eat.jpg",
    link: "#",
  },
  {
    id: 7,
    title: "Atomic Design System",
    description:
      "A sleek and modern personal blog built with a headless CMS, allowing for easy content creation and management.",
    tech: ["Next.js", "GraphQL", "Strapi", "Tailwind CSS"],
    image: "/images/atomic.jpg",
    link: "#",
  },
  {
    id: 8,
    title: "Port Scanner",
    description:
      "A sleek and modern personal blog built with a headless CMS, allowing for easy content creation and management.",
    tech: ["Next.js", "GraphQL", "Strapi", "Tailwind CSS"],
    image: "/images/port.jpg",
    link: "#",
  },
];

function Projects() {
  const projectRefs = useRef([]);
  projectRefs.current = [];

  const addToRefs = (el) => {
    if (el && !projectRefs.current.includes(el)) {
      projectRefs.current.push(el);
    }
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      projectRefs.current.forEach((el, index) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" className="container mx-auto py-20 px-4 md:px-8"
      style={{ backgroundColor: 'var(--color-app-bg)', color: 'var(--color-primary-text)' }}
    >
      <h2 className="text-4xl font-bold text-center text-[var(--color-accent-neon-blue)] mb-12">
        My Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projectsData.map((project) => (
          <div
            key={project.id}
            ref={addToRefs}
            className="rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out"
            style={{ backgroundColor: 'var(--color-section-bg)' }}
          >
            <Image
              src={project.image}
              alt={project.title}
              width={600}
              height={400}
              className="w-full h-48 object-cover"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "/images/default-project-image.jpg";
              }}
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-[var(--color-accent-neon-blue)] mb-2">
                {project.title}
              </h3>
              <p className="text-[var(--color-secondary-text)] mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, index) => (
                  <span
                    key={index}
                    className="text-sm px-3 py-1 rounded-full text-[var(--color-primary-text)]"
                    style={{ backgroundColor: 'var(--color-tertiary-text)' }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[var(--color-accent-orange)] text-[var(--color-primary-text)] px-5 py-2 rounded-full font-semibold hover:bg-[var(--color-accent-neon-blue)] transition-colors duration-300" // Changed to accent-orange with neon-blue hover
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
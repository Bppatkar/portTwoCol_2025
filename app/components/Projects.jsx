"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projectsData = [
  {
    id: 1,
    title: "E-commerce Platform",
    description:
      "A full-stack e-commerce application with user authentication, product listings, shopping cart, and secure payment integration.",
    tech: ["Next.js", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    image: "https://placehold.co/600x400/2d3748/e2e8f0?text=Project+1",
    link: "#",
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "A responsive task management application with drag-and-drop functionality, real-time updates, and user collaboration features.",
    tech: ["React", "Firebase", "GSAP", "Styled Components"],
    image: "https://placehold.co/600x400/2d3748/e2e8f0?text=Project+2",
    link: "#",
  },
  {
    id: 3,
    title: "Personal Blog",
    description:
      "A sleek and modern personal blog built with a headless CMS, allowing for easy content creation and management.",
    tech: ["Next.js", "GraphQL", "Strapi", "Tailwind CSS"],
    image: "https://placehold.co/600x400/2d3748/e2e8f0?text=Project+3",
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
              // markers: true,
            },
          }
        );
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" className="container mx-auto py-20 px-4 md:px-8">
      <h2 className="text-4xl font-bold text-center text-white mb-12">
        My Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projectsData.map((project) => (
          <div
            key={project.id}
            ref={addToRefs}
            className="bg-secondary rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  "https://placehold.co/600x400/2d3748/e2e8f0?text=Image+Error";
              }}
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-accent mb-2">
                {project.title}
              </h3>
              <p className="text-text mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-primary text-sm px-3 py-1 rounded-full text-white"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-accent text-white px-5 py-2 rounded-full font-semibold hover:bg-blue-600 transition-colors duration-300"
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

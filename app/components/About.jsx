"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useTheme } from "../context/ThemeContext";

gsap.registerPlugin(ScrollTrigger);

function About() {
  const aboutRef = useRef(null);
  const contentRef = useRef(null);
  const { theme } = useTheme();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: aboutRef.current,
            start: "top 70%",
            toggleActions: "play none none none",
          },
        }
      );
    }, aboutRef);

    return () => ctx.revert();
  }, []);

  const skills = [
    { name: "HTML", icon: "html.gif" },
    { name: "CSS", icon: "css.gif" },
    { name: "JavaScript", icon: "javascript.gif" },
    { name: "ES6", icon: "es6.gif" },
    { name: "React", icon: "react.gif" },
    { name: "Redux", icon: "redux.gif" },
    { name: "Tailwind CSS", icon: "tailwind.gif" },
    { name: "Bootstrap", icon: "bootstrap.gif" },
    { name: "Material UI", icon: "material-ui.gif" },
    { name: "Chakra UI", icon: "chakra-ui.gif" },
    { name: "Express.js", icon: "express.gif" },
    { name: "Node.js", icon: "node.gif" },
    { name: "MongoDB", icon: "mongodb.gif" },
    { name: "Git", icon: "git.gif" },
    { name: "REST APIs", icon: "rest-api.gif" },
    { name: "Firebase", icon: "firebase.gif" },
    { name: "C++", icon: "cpp.gif" },
    { name: "DSA", icon: "dsa.gif" },
  ];

  return (
    <section
      id="about"
      ref={aboutRef}
      className="section-overlay container mx-auto py-20 px-4 md:px-8"
    >
      <h2 className="text-4xl font-bold text-center text-[var(--color-accent-neon-blue)] mb-12">
        About Me
      </h2>
      <div
        ref={contentRef}
        className="max-w-3xl mx-auto p-8 rounded-xl shadow-lg section-card-bg"
      >
        <p className="text-lg text-[var(--color-primary-text)] leading-relaxed mb-6">
          As a Full-Stack Developer passionate about creating dynamic and scalable web applications, I specialize in leveraging the power of the MERN stack (MongoDB, Express.js, Node.js, React.js) to deliver seamless and efficient solutions. With a strong foundation in both front-end and back-end development, I take pride in writing clean, maintainable code and building robust user experiences.
        </p>
        <p className="text-lg text-[var(--color-primary-text)] leading-relaxed mb-6">
          I am very committed to my professional development and keep learning with a problem-solving approach while mastering Data Structures and Algorithms in C++. This always enables me to develop better solutions that will effectively deal with real-world problems.
        </p>
        <h3 className="text-2xl font-bold text-[var(--color-accent-orange)] mb-4">
          Skills & Expertise
        </h3>
        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-4 text-[var(--color-secondary-text)]">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="flex flex-col items-center justify-center p-2 rounded-md bg-[var(--color-tertiary-text)] shadow-sm text-center"
            >
              {skill.icon && (
                <img
                  src={`/icons/${skill.icon}`}
                  alt={skill.name}
                  className="w-10 h-10 mb-1"
                />
              )}
              <span className="text-sm font-medium text-[var(--color-primary-text)]">{skill.name}</span>
            </div>
          ))}
        </div>
        <h3 className="text-2xl font-bold text-[var(--color-accent-orange)] mt-6 mb-4">
          Education
        </h3>
        <p className="text-lg text-[var(--color-primary-text)] leading-relaxed mb-6">
          Master's in Computer Science from Maharishi Mahesh Yogi Vedic Vishwavidyalaya.
          Hands-on training in HTML, CSS, JavaScript, React, and Tailwind CSS; always updating practical development skills.
          Strong academic grounding in problem-solving and principles of software engineering at St. Aloysius College, Jabalpur.
        </p>
        <h3 className="text-2xl font-bold text-[var(--color-accent-orange)] mb-4">
          My Professional Objectives
        </h3>
        <p className="text-lg text-[var(--color-primary-text)] leading-relaxed mb-6">
          Short-Term: Deepen my skills as a MERN stack developer, further developing problem-solving abilities while taking on challenging development projects.
          Long-term: To be a versatile developer known for delivering fresh, scalable solutions and continue evolving with the never-ending technological landscape around me.
        </p>
        <p className="text-lg text-[var(--color-primary-text)] leading-relaxed">
          I love any collaborative environment where I'd be able to contribute to impactful projects while constantly taking my skills to the extreme and expanding my knowledge to new levels.
        </p>
        <p className="text-lg text-[var(--color-primary-text)] leading-relaxed">
          If this is what you're looking for in a passionate developer or someone who can solve seemingly complex problems and deliver high-grade applications, feel free to connect with me!
        </p>
      </div>
    </section>
  );
}

export default About;

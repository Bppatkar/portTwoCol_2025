"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Contact() {
  const contactRef = useRef(null);
  const formRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        formRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: contactRef.current,
            start: "top 70%",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.fromTo(
        linksRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: contactRef.current,
            start: "top 70%",
            toggleActions: "play none none none",
          },
        }
      );
    }, contactRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="contact"
      ref={contactRef}
      className="container mx-auto py-20 px-4 md:px-8"
    >
      <h2 className="text-4xl font-bold text-center text-white mb-12">
        Get in Touch
      </h2>
      <div className="flex flex-col md:flex-row items-start gap-12">
        <div
          ref={formRef}
          className="md:w-1/2 w-full bg-secondary p-8 rounded-xl shadow-lg"
        >
          <h3 className="text-2xl font-semibold text-accent mb-6">
            Send a Message
          </h3>
          <form className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-text text-sm font-bold mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="shadow appearance-none border rounded-lg w-full py-3 px-4 bg-primary text-text leading-tight focus:outline-none focus:shadow-outline focus:border-accent"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-text text-sm font-bold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="shadow appearance-none border rounded-lg w-full py-3 px-4 bg-primary text-text leading-tight focus:outline-none focus:shadow-outline focus:border-accent"
                placeholder="your.email@example.com"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-text text-sm font-bold mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="6"
                className="shadow appearance-none border rounded-lg w-full py-3 px-4 bg-primary text-text leading-tight focus:outline-none focus:shadow-outline focus:border-accent"
                placeholder="Your message..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-accent text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-600 transition-colors duration-300 shadow-md"
            >
              Send Message
            </button>
          </form>
        </div>

        <div
          ref={linksRef}
          className="md:w-1/2 w-full bg-secondary p-8 rounded-xl shadow-lg"
        >
          <h3 className="text-2xl font-semibold text-accent mb-6">
            Connect With Me
          </h3>
          <ul className="space-y-4 text-lg">
            <li>
              <a
                href="mailto:your.email@example.com"
                className="flex items-center text-text hover:text-accent transition-colors duration-300"
              >
                <svg
                  className="w-6 h-6 mr-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
                your.email@example.com
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-text hover:text-accent transition-colors duration-300"
              >
                <svg
                  className="w-6 h-6 mr-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.3 0H3.7C1.65 0 0 1.65 0 3.7v12.6C0 18.35 1.65 20 3.7 20h12.6c2.05 0 3.7-1.65 3.7-3.7V3.7C20 1.65 18.35 0 16.3 0zM6 17H3V7h3v10zm-1.5-11c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm13.5 11h-3v-5.5c0-1.3-.5-2.2-1.7-2.2-1.3 0-2 .9-2 2.2V17h-3V7h3v1.5c.5-1.2 1.8-2 3-2 2.2 0 3.8 1.5 3.8 4.8V17z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-text hover:text-accent transition-colors duration-300"
              >
                <svg
                  className="w-6 h-6 mr-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 0C4.477 0 0 4.477 0 10c0 4.419 2.865 8.163 6.839 9.48.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.604-3.369-1.34-3.369-1.34-.455-1.157-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.004.07 1.532 1.03 1.532 1.03.89 1.529 2.34 1.089 2.91.832.09-.647.35-1.089.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.09.39-1.984 1.03-2.681-.103-.253-.446-1.27.098-2.65 0 0 .84-.268 2.75 1.025.798-.222 1.64-.333 2.48-.337.84.004 1.682.115 2.48.337 1.91-1.293 2.75-1.025 2.75-1.025.546 1.38.203 2.397.098 2.65.64.697 1.03 1.591 1.03 2.681 0 3.841-2.339 4.686-4.566 4.935.359.307.678.915.678 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.18.579.688.482C17.136 18.165 20 14.419 20 10c0-5.523-4.477-10-10-10z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Contact;

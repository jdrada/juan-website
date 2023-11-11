"use client";
import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="flex flex-col w-full border-t border-b border-neutral-800 p-2 md:py-10 cursor-default"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.85,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className="flex justify-center text-xl text-neutral-400 text-center w-full rounded-lg"
      >
        <motion.p
          whileHover={{ scale: 1.01 }}
          transition={{
            duration: 1,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className=" max-w-4xl font-light"
        >
          I&apos;m a<span className="text-white"> Frontend Developer</span> with
          a love for crafting fast, user-friendly applications with{" "}
          <span className="text-white">JavaScript</span>,{" "}
          <span className="text-white">TypeScript</span>,{" "}
          <span className="text-white">React</span>, and{" "}
          <span className="text-white">Next.js</span>, Proficient in CSS,
          RESTfulAPIs, and performance tuning.
          <span className="text-white">
            {" "}
            Let&apos;s make something awesome!
          </span>
        </motion.p>
      </motion.div>
    </section>
  );
};

export default About;

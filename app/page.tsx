"use client";
import { Bio } from "@/components/Bio/Bio";
import Timeline from "@/components/Timeline/Timeline";
import Experience from "@/components/Experience/Experience";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";

const HomePage = () => {
  return (
    <>
      <Hero />

      <About />

      <Timeline />

      <Bio />

      <Experience />
    </>
  );
};
export default HomePage;

"use client";
import { Poppins } from "next/font/google";

const roboto = Poppins({
  weight: ["700"],
  subsets: ["latin"],
  display: "swap",
});

import { Button, Card, CardBody, Link, Snippet, User } from "@nextui-org/react";
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

      <section>
        <Experience />
      </section>

      <footer className="h-[80px] border-t"></footer>
    </>
  );
};
export default HomePage;

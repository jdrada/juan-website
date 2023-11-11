"use client";
import React from "react";
import Image from "next/image";
import test from "./oooscillate.svg";
import MainCard from "./MainCard/MainCard";

const Hero = () => {
  return (
    <section
      id="home"
      className="md:border h-[90vh] p-0 md:py-24 border-neutral-700 md:h-fit w-full bg-transparent relative flex justify-center items-center"
    >
      <Image
        priority
        className="testo h-full w-full object-cover absolute hidden md:inline"
        src={test}
        alt="test"
      ></Image>

      <Image
        priority
        className="testo h-full w-full object-cover absolute hidden md:inline"
        src={test}
        alt="test"
      ></Image>
      <Image
        priority
        className="testo h-full w-full object-cover absolute translate-x-1 hidden md:inline"
        src={test}
        alt="test"
      ></Image>
      <Image
        priority
        className="testo h-full w-full object-cover absolute translate-x-4 hidden md:inline"
        src={test}
        alt="test"
      ></Image>

      <MainCard />
    </section>
  );
};

export default Hero;

"use client";
import Image from "next/image";
import test from "./oooscillate.svg";
import { Poppins } from "next/font/google";
import { BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
const roboto = Poppins({
  weight: ["700"],
  subsets: ["latin"],
  display: "swap",
});

import { Button, Card, CardBody, Link, Snippet, User } from "@nextui-org/react";
import { Bio } from "@/components/Bio/Bio";
import Timeline from "@/components/Timeline/Timeline";
import Experience from "@/components/Experience/Experience";

const HomePage = () => {
  return (
    <>
      <section id="home">
        <div className="ring-4 ring-black md:border-4  border-black h-fit md:h-[50vh] 2xl:h-[80vh] w-full bg-transparent relative flex justify-center items-center">
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
          <Card
            isBlurred
            className="border-1 border-black w-fit rounded-lg shadow shadow-black"
          >
            <CardBody>
              <div className="flex flex-col items-center md:p-6">
                <p
                  className={` ${roboto.className} text-danger mb-4 text-7xl md:text-7xl text-center  break-words`}
                >
                  Hello there!
                </p>
                <User
                  className="backdrop-blur-sm "
                  name="Juan Carlos O. Drada"
                  description="Web Frontend Engineer"
                  avatarProps={{
                    src: "juan.jpeg",
                    color: "danger",
                  }}
                />
              </div>
            </CardBody>
          </Card>
        </div>
      </section>

      <section id="About" className="grid md:grid-cols-2 gap-4">
        <div className="p-8 text-neutral-400 text-center md:text-left md:border border-neutral-700 rounded-lg">
          <h4 className="text-neutral-400 mb-2 text-center font-light w-full ">
            About Me
          </h4>
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
        </div>

        <div className="p-8 flex flex-col items-center gap-4 md:border border-neutral-700 rounded-lg">
          <h4 className="text-neutral-400 mb-2 text-center font-light w-full ">
            Get to know me better
          </h4>
          <div className="flex flex-wrap justify-center gap-4 items-center ">
            <Button
              href="https://github.com/nextui-org/nextui"
              as={Link}
              target="_blank"
              title="Juan Carlos Linkedin Profile"
              isIconOnly
              color="default"
              aria-label="Juan Carlos Linkedin Profile"
              variant="flat"
            >
              <BsLinkedin className="text-2xl" />
            </Button>
            <Button
              href="https://github.com/nextui-org/nextui"
              as={Link}
              target="_blank"
              title="Juan Carlos Linkedin Profile"
              isIconOnly
              color="default"
              aria-label="Juan Carlos Linkedin Profile"
              variant="flat"
            >
              <BsGithub className="text-2xl" />
            </Button>
            <Button
              href="https://github.com/nextui-org/nextui"
              as={Link}
              target="_blank"
              title="Juan Carlos Linkedin Profile"
              isIconOnly
              color="default"
              aria-label="Juan Carlos Linkedin Profile"
              variant="flat"
            >
              <BsInstagram className="text-2xl" />
            </Button>
            <Button
              href="https://github.com/nextui-org/nextui"
              as={Link}
              target="_blank"
              title="Juan Carlos Linkedin Profile"
              isIconOnly
              color="default"
              aria-label="Juan Carlos Linkedin Profile"
              variant="flat"
            >
              <FiMail className="text-2xl" />
            </Button>
            <Snippet symbol=">" variant="flat" color="default">
              jdrada.dev@gmail.com
            </Snippet>
          </div>
        </div>
      </section>

      <section>
        <Timeline />
      </section>

      <section>
        <Bio />
      </section>
      <section>
        <Experience />
      </section>
      <footer className="h-[80px] border-t"></footer>
    </>
  );
};
export default HomePage;

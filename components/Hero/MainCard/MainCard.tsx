import React from "react";
import { Button, Card, CardBody, Link, Snippet, User } from "@nextui-org/react";
const roboto = Poppins({
  weight: ["700"],
  subsets: ["latin"],
  display: "swap",
});

import { BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { Poppins } from "next/font/google";
import { motion } from "framer-motion";

const MainCard = () => {
  const newLocal = "Juan Carlos O. Drada";

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.25,
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <motion.div>
      <Card
        isBlurred
        className="border-1 border-black w-fit rounded-lg shadow shadow-black p-10"
      >
        <CardBody>
          <div className="flex flex-col items-center p-6">
            <p
              className={` ${roboto.className} text-danger mb-6 text-7xl md:text-7xl text-center  break-words`}
            >
              Hello there!
            </p>
            <User
              className="backdrop-blur-sm "
              name={newLocal}
              description="Web Frontend Engineer"
              avatarProps={{
                src: "juan.jpeg",
                color: "danger",
              }}
            />
          </div>
          <motion.ul
            variants={container}
            initial="hidden"
            animate="visible"
            className="container flex flex-wrap justify-center gap-4 items-center "
          >
            <motion.li key={0} variants={item}>
              <Button
                href="https://github.com/nextui-org/nextui"
                as={Link}
                target="_blank"
                title="Juan Carlos Linkedin Profile"
                isIconOnly
                color="default"
                aria-label="Juan Carlos Linkedin Profile"
                variant="flat"
                className="item"
              >
                <BsLinkedin className="text-2xl" />
              </Button>
            </motion.li>
            <motion.li key={1} variants={item}>
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
            </motion.li>
            <motion.li key={2} variants={item}>
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
            </motion.li>
            <motion.li key={3} variants={item}>
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
            </motion.li>
            <motion.li key={4} variants={item}>
              <Snippet symbol=">" variant="flat" color="default">
                jdrada.dev@gmail.com
              </Snippet>
            </motion.li>
          </motion.ul>
        </CardBody>
      </Card>
    </motion.div>
  );
};

export default MainCard;

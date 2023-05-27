"use client";
import { useState } from "react";
import { HamburgerClosed, HamburgerOpen } from "./Hamburger";
import Link from "next/link";
import Banner from "../Banner/Banner";

const NavBar: React.FunctionComponent = () => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState<boolean>(false);

  const navigation = [
    { title: "Bio", path: "/" },
    { title: "Experience", path: "/experience" },
    { title: "Projects", path: "/projects" },
  ];

  return (
    <header>
      <Banner />
      <div className="fixed transparent w-full border-b md:border-0 md:static">
        <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
          <div className="flex items-center justify-between py-3 md:py-3 md:block">
            {/* logo */}
            <Link href="/">
              <span className="text-2xl font-extrabold sm:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-[#4F46E5] to-[#E114E5]">
                {"<JC/>"}
              </span>
            </Link>
            {/* Hamburger */}
            <div className="md:hidden">
              <button
                className="text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
                onClick={() => setIsHamburgerOpen(!isHamburgerOpen)}
              >
                {isHamburgerOpen ? <HamburgerOpen /> : <HamburgerClosed />}
              </button>
            </div>
          </div>
          <nav
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              isHamburgerOpen ? "block" : "hidden"
            }`}
          >
            {/* Navigation Buttons */}
            <ul className="justify-center items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
              {navigation.map((item) => {
                return (
                  <li
                    key={item.title}
                    className="text-gray-600 hover:text-indigo-600"
                  >
                    <Link href={item.path}>{item.title}</Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          <div className="hidden md:inline-block">
            <a
              href="/Juan_C_Drada_Resume.pdf"
              download="/Juan_C_Drada_Resume"
              target="_blank"
              className="py-3 px-4 text-white bg-indigo-600 hover:bg-indigo-700 rounded-md shadow"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;

"use client";
import React, { useEffect, useMemo, useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  Code,
  Snippet,
} from "@nextui-org/react";
import { FaLaptopCode } from "react-icons/fa";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = ["About", "Skills", "Experience"];

  return (
    <Navbar
      shouldHideOnScroll
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>
      <NavbarContent className="hidden sm:flex" justify="start">
        <FaLaptopCode className=" text-2xl" />
        <NavbarBrand>
          {/* <p className="font-bold text-inherit">Juan Drada</p> */}
          <a
            aria-label="Juan Carlos GitHub page"
            href="https://github.com/jdrada"
            target="_blank"
            rel="noopener"
          >
            <Code
              className="transition duration-50 ease-in-out hover:text-warning cursor-pointer"
              size="sm"
            >
              <span className="text-neutral-300 hidden md:inline">
                open -n github
              </span>{" "}
              @JDrada
            </Code>
          </a>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <Code
            className="transition duration-1000 ease-in-out"
            color={"primary"}
            size="sm"
          >
            @JDrada
          </Code>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#about">
            About
          </Link>
        </NavbarItem>

        <NavbarItem>
          <Link color="foreground" href="#skills">
            Skills
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#experience">
            Experience
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            as={Link}
            isExternal={true}
            color="primary"
            href="./Juan_Resume.pdf"
            variant="bordered"
            size="sm"
          >
            Download CV
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2
                  ? "warning"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              href={`#${item.toLowerCase()}`}
              size="lg"
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

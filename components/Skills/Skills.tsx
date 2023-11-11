"use client";
import { Button } from "@nextui-org/react";
import React, { useState } from "react";
import { IconType } from "react-icons/lib";
import {
  SiCss3,
  SiGit,
  SiGo,
  SiGraphql,
  SiHtml5,
  SiJavascript,
  SiJest,
  SiNextdotjs,
  SiNpm,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiPython,
  SiAngular,
  SiExpress,
  SiDocker,
  SiGitlab,
  SiJenkins,
  SiClickup,
  SiFigma,
  SiPostman,
  SiGithub,
  SiVercel,
  SiStrapi,
  SiJasmine,
  SiApollographql,
  SiRedux,
} from "react-icons/si";
import { IWhatShow } from "./TabsSkill";
import { motion } from "framer-motion";

type INextUIColors =
  | "default"
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "danger";

type ISkills = { icon: IconType; text: string; color: INextUIColors };

const languages: ISkills[] = [
  { icon: SiTypescript, text: "TypeScript", color: "primary" },
  { icon: SiJavascript, text: "JavaScript", color: "warning" },
  { icon: SiPython, text: "Python", color: "warning" },
  { icon: SiGo, text: "Go", color: "primary" },
  { icon: SiNextdotjs, text: "Next.js", color: "default" },
  { icon: SiReact, text: "React", color: "primary" },
  { icon: SiAngular, text: "Angular", color: "danger" },
  { icon: SiHtml5, text: "HTML", color: "danger" },
  { icon: SiCss3, text: "CSS", color: "primary" },
  { icon: SiJest, text: "Jest", color: "success" },
  { icon: SiTailwindcss, text: "Tailwind", color: "success" },
  { icon: SiRedux, text: "Redux", color: "danger" },
];

const cicd: ISkills[] = [
  { icon: SiGit, text: "Git", color: "danger" },
  { icon: SiGithub, text: "GitHub", color: "primary" },
  { icon: SiGitlab, text: "GitLab", color: "warning" },
  { icon: SiDocker, text: "Docker", color: "primary" },
  { icon: SiExpress, text: "Express", color: "success" },
  { icon: SiJenkins, text: "Jenkins", color: "danger" },
  { icon: SiClickup, text: "Clickup", color: "secondary" },
  { icon: SiFigma, text: "Figma", color: "primary" },
  { icon: SiPostman, text: "Postman", color: "danger" },
  { icon: SiNpm, text: "Npm", color: "danger" },
  { icon: SiVercel, text: "Vercel", color: "default" },
  { icon: SiStrapi, text: "Strapi CMS", color: "secondary" },
];

const SkillCard = ({
  icon,
  itsName,
}: {
  icon: any;
  itsName: string;
  key: string;
  color: "default" | "primary" | "secondary" | "success" | "warning" | "danger";
}) => {
  return (
    <Button
      title={itsName}
      isIconOnly
      aria-label={itsName}
      variant={"light"}
      className={`cursor-default h-20 my-4 w-20 bg-transparent rounded-lg flex flex-col justify-center items-center gap-4 `}
      radius="none"
    >
      {icon}
      <span className="text-xs mt-2">{itsName}</span>
    </Button>
  );
};

const Skills = ({ whatShow }: { whatShow: IWhatShow }) => {
  const switchy = (): ISkills[] => {
    switch (whatShow) {
      case "languages":
        return languages;
      case "cicd":
        return cicd;

      default:
        return languages;
    }
  };

  return (
    <>
      <div className="grid grid-cols-4 lg:grid-cols-6 place-items-center w-full">
        {switchy().map((icon) => {
          return (
            <motion.div key={icon.text} whileHover={{ scale: 1.1 }}>
              <SkillCard
                key={icon.text}
                itsName={icon.text}
                icon={<icon.icon size={30} />}
                color={icon.color}
              />
            </motion.div>
          );
        })}
      </div>
    </>
  );
};
export default Skills;

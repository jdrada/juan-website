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
  { icon: SiTailwindcss, text: "Tailwind", color: "success" },
  { icon: SiExpress, text: "Express", color: "success" },
];

const cicd: ISkills[] = [
  { icon: SiGit, text: "Git", color: "danger" },
  { icon: SiGithub, text: "GitHub", color: "primary" },
  { icon: SiGitlab, text: "GitLab", color: "warning" },
  { icon: SiDocker, text: "Docker", color: "primary" },
  { icon: SiJenkins, text: "Jenkins", color: "danger" },
  { icon: SiClickup, text: "Clickup", color: "secondary" },
  { icon: SiFigma, text: "Figma", color: "primary" },
  { icon: SiPostman, text: "Postman", color: "danger" },
  { icon: SiNpm, text: "Npm", color: "danger" },
  { icon: SiVercel, text: "Vercel", color: "default" },
  { icon: SiStrapi, text: "Strapi CMS", color: "secondary" },
];
const other: ISkills[] = [
  { icon: SiJest, text: "Jest", color: "success" },
  { icon: SiJasmine, text: "Jasmine", color: "secondary" },
  { icon: SiGraphql, text: "GraphQL", color: "primary" },
  { icon: SiApollographql, text: "Apollo", color: "primary" },
  { icon: SiRedux, text: "Redux", color: "danger" },
  { icon: SiGraphql, text: "GraphQL", color: "primary" },
  { icon: SiGraphql, text: "GraphQL", color: "primary" },
  { icon: SiGraphql, text: "GraphQL", color: "primary" },
  { icon: SiGraphql, text: "GraphQL", color: "primary" },
  { icon: SiGraphql, text: "GraphQL", color: "primary" },
  { icon: SiGraphql, text: "GraphQL", color: "primary" },
];

const SkillCard = ({
  icon,
  active,
  itsName,
  hover,
  key,
  color,
}: {
  icon: any;
  itsName: string;
  active: boolean;
  hover: (e: string) => void;
  key: string;
  color: "default" | "primary" | "secondary" | "success" | "warning" | "danger";
}) => {
  return (
    <Button
      key={key}
      onMouseEnter={() => {
        hover(itsName);
      }}
      title={itsName}
      isIconOnly
      color={`${active ? color : "default"}`}
      aria-label={itsName}
      variant="light"
      className="h-20 my-4 w-20 bg-transparent rounded-lg flex flex-col justify-center items-center gap-4"
      radius="none"
    >
      {icon}
      <span className="text-xs mt-2">{itsName}</span>
    </Button>
  );
};

const Skills = ({ whatShow }: { whatShow: IWhatShow }) => {
  const [text, setText] = useState({ text: "", color: "default" });
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
      <div className="grid grid-cols-3 md:grid-cols-6 place-items-center w-full">
        <div
          className={`col-span-1 md:col-span-1 flex items-center justify-center transition duration-150 ease-in-out`}
        >
          <p className={`text-xl md:text-2xl font-bold`}>{text.text}</p>
        </div>

        {switchy().map((icon) => {
          return (
            <SkillCard
              key={icon.text}
              itsName={icon.text}
              active={text.text === icon.text}
              hover={(e) => setText({ text: e, color: icon.color })}
              icon={<icon.icon size={30} />}
              color={icon.color}
            />
          );
        })}
      </div>
    </>
  );
};
export default Skills;

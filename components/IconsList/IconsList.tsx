import React from "react";
import {
  SiCss3,
  SiGit,
  SiGraphql,
  SiHtml5,
  SiJavascript,
  SiJest,
  SiNestjs,
  SiNextdotjs,
  SiNpm,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

const iconData = [
  { icon: SiTypescript, text: "TypeScript" },
  { icon: SiJavascript, text: "JavaScript" },
  { icon: SiReact, text: "React.js" },
  { icon: SiNextdotjs, text: "Next.js" },
  { icon: SiHtml5, text: "HTML" },
  { icon: SiCss3, text: "CSS" },
  { icon: SiTailwindcss, text: "Tailwind" },
  { icon: SiNestjs, text: "Nest.js" },
  { icon: SiGraphql, text: "GraphQL" },
  { icon: SiGit, text: "Git" },
  { icon: SiNpm, text: "Npm" },
  { icon: SiJest, text: "Jest" },
];

const IconList = () => {
  return (
    <div className="bg-white p-4 border rounded-lg w-full">
      <div className="grid content-evenly gap-6 grid-cols-3 sm:grid-cols-6 my-3">
        {iconData.map((item) => (
          <div className="grid gap-2" key={item.text}>
            <item.icon className="justify-self-center" fontSize="2rem" />
            <p className="text-slate-600 justify-self-center">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IconList;

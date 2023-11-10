import React from "react";
import TabsSkill from "../Skills/TabsSkill";
import { SiTypescript } from "react-icons/si";

function hello(): string[] {
  return ["Hello"];
}

export const Bio = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 border-t border-b py-6 border-neutral-700">
      <div className="p-3">
        <div className="border border-neutral-700 h-full rounded-lg">
          <div className="flex gap-2 mb-2 border-b border-neutral-700 p-4 items-center text-neutral-400 text-xs bg-neutral-900">
            <SiTypescript />
            ./juan/skills
          </div>
          <div className="flex flex-col p-2 gap-1 text-neutral-400 text-sm ">
            <p className="flex font-mono font-light ">
              <span className="mr-4 flex-none">1</span>
              <span>
                <span className="text-secondary">function</span>{" "}
                <strong className="font-bold text-sky-500">Languages</strong>
                <span className="text-yellow-400">{"()"}</span>:
                <span className="text-yellow-400">{" string[] {"}</span>
              </span>
            </p>
            <div className="flex font-mono font-light ">
              <p className="mr-10 flex-none ">2</p>
              <p>
                <span className="text-secondary">{"return ["}</span>{" "}
                <span className="text-lime-600">&quot;TypeScript&quot;</span>,{" "}
                <span className="text-lime-600">&quot;JavaScript&quot;</span>,{" "}
                <span className="text-lime-600">&quot;Python&quot;</span>,{" "}
                <span className="text-lime-600">&quot;Go&quot;</span>,{" "}
                <span className="text-lime-600">&quot;HTML&quot;</span>,{" "}
                <span className="text-lime-600">&quot;CSS&quot;</span>
                <span className="text-secondary">{" ]"}</span>;
              </p>
            </div>
            <p className=" font-mono font-light ">
              <span className="mr-4 ">3</span>{" "}
            </p>
            <p className="flex font-mono font-light ">
              <span className="mr-4 flex-none">4</span>
              <span>
                <span className="text-secondary">function</span>{" "}
                <strong className="font-bold text-sky-500">Frameworks</strong>
                <span className="text-yellow-400">{"()"}</span>:
                <span className="text-yellow-400">{" string[] {"}</span>
              </span>
            </p>
            <div className="flex font-mono font-light ">
              <p className="mr-10 flex-none ">5</p>
              <p>
                <span className="text-secondary">{"return ["}</span>{" "}
                <span className="text-lime-600">&quot;React&quot;</span>,{" "}
                <span className="text-lime-600">&quot;Next.js&quot;</span>,{" "}
                <span className="text-lime-600">&quot;Angular&quot;</span>,{" "}
                <span className="text-lime-600">&quot;Tailwind&quot;</span>
                <span className="text-secondary">{" ]"}</span>;
              </p>
            </div>
            <p className=" font-mono font-light ">
              <span className="mr-4 ">6</span>{" "}
            </p>
            <p className="flex font-mono font-light ">
              <span className="mr-4 flex-none">7</span>
              <span>
                <span className="text-secondary">function</span>{" "}
                <strong className="font-bold text-sky-500">Tools</strong>
                <span className="text-yellow-400">{"()"}</span>:
                <span className="text-yellow-400">{" string[] {"}</span>
              </span>
            </p>
            <div className="flex font-mono font-light ">
              <p className="mr-10 flex-none ">8</p>
              <p>
                <span className="text-secondary">{"return ["}</span>{" "}
                <span className="text-lime-600">&quot;Git&quot;</span>,{" "}
                <span className="text-lime-600">&quot;Docker&quot;</span>,{" "}
                <span className="text-lime-600">&quot;Node&quot;</span>,{" "}
                <span className="text-lime-600">&quot;Postman&quot;</span>
                <span className="text-secondary">{" ]"}</span>;
              </p>
            </div>
            <p className=" font-mono font-light ">
              <span className="mr-4 ">9</span>{" "}
            </p>
          </div>
        </div>
      </div>
      <TabsSkill />
    </div>
  );
};

import React from "react";
import TabsSkill from "../Skills/TabsSkill";
import { SiTypescript } from "react-icons/si";
import { motion } from "framer-motion";

export const Bio = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 border-t border-b py-6 md:py-10 px-6 border-neutral-800">
      <TabsSkill />
      <div className="">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              type: "spring",
              bounce: 0.2,
              duration: 0.8,
            },
          }}
          viewport={{ once: true, amount: 0.8 }}
          className="border border-neutral-700 h-full bg-dark rounded-lg"
        >
          <div className="flex bg-black rounded-t-lg gap-2 mb-2 border-b border-neutral-700 p-4 items-center text-neutral-400 text-xs ">
            <SiTypescript />
            juan/skills.ts
          </div>
          <div className="flex flex-col p-4 gap-1 text-neutral-400 text-xs lg:text-sm ">
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
        </motion.div>
      </div>
    </div>
  );
};

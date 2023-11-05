"use client";
import { Tab, Tabs } from "@nextui-org/react";
import React, { useState } from "react";
import Skills from "./Skills";

export type IWhatShow = "languages" | "cicd" | "others";

const TabsSkill = () => {
  const [whatShow, setWhatShow] = useState<IWhatShow>("languages");

  return (
    <>
      <div className="flex w-full flex-col gap-4 p-4 border border-neutral-700 rounded-lg items-center">
        <h2 className="text-4xl w-full font-bold text-center">
          Technologies I use
        </h2>
        <Tabs
          onSelectionChange={(k) => setWhatShow(k as IWhatShow)}
          aria-label="Options"
          color="primary"
          variant="bordered"
          className="w-fit"
          size="sm"
        >
          <Tab
            key={"languages" as IWhatShow}
            title={
              <div className="flex items-center space-x-2">
                <span className="hidden md:block">Languages & Frameworks</span>
                <span className=" md:hidden">Languages</span>
              </div>
            }
          />
          <Tab
            key={"cicd" as IWhatShow}
            title={
              <div className="flex items-center space-x-2">
                <span className="hidden md:block">
                  Version Control and CI/CD
                </span>
                <span className=" md:hidden">CI/CD</span>
              </div>
            }
          />
          <Tab
            key={"others" as IWhatShow}
            title={
              <div className="flex items-center space-x-2">
                <span className="hidden md:block">Testing and Others</span>
                <span className=" md:hidden">Others</span>{" "}
              </div>
            }
          />
        </Tabs>
        <Skills whatShow={whatShow} />
        {/* <AccordionComponent /> */}
      </div>
    </>
  );
};

export default TabsSkill;

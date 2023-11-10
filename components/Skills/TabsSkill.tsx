"use client";
import { Tab, Tabs } from "@nextui-org/react";
import React, { useState } from "react";
import Skills from "./Skills";

export type IWhatShow = "languages" | "cicd" | "others";

const TabsSkill = () => {
  const [whatShow, setWhatShow] = useState<IWhatShow>("languages");

  return (
    <>
      <div className="flex w-full flex-col gap-4 p-4 items-center">
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
                <span>Languages & Frameworks</span>
              </div>
            }
          />
          <Tab
            key={"cicd" as IWhatShow}
            title={
              <div className="flex items-center space-x-2">
                <span>Tools and others</span>
              </div>
            }
          />
        </Tabs>
        <Skills whatShow={whatShow} />
      </div>
    </>
  );
};

export default TabsSkill;

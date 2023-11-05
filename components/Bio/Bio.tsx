import React from "react";
import Timeline from "../Timeline/Timeline";
import Skills from "../Skills/Skills";
import { Tab, Tabs } from "@nextui-org/react";
import TabsSkill from "../Skills/TabsSkill";

export const Bio = () => {
  return (
    <div className="flex flex-col px-2">
      <TabsSkill />
    </div>
  );
};

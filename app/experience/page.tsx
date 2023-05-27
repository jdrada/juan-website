"use client";
import React, { useEffect, useState } from "react";
import ExperienceDisplay from "@/components/ExperienceSelect/ExperienceDisplay/ExperienceDisplay";
import ExperienceSelect from "@/components/ExperienceSelect/ExperienceSelect";
import {
  ExperienceType,
  experienceData,
} from "@/components/ExperienceSelect/experienceData";

const ExperiencePage = () => {
  const tabItems = ["ULedger", "Abstract", "Heimat"];
  const [currentTab, setCurrentTab] = useState(0);
  const [selectedCompany, setSelectedCompany] = useState<ExperienceType>(
    experienceData[0]
  );

  useEffect(() => {
    switch (currentTab) {
      case 0:
        setSelectedCompany(experienceData[0]);
        break;
      case 1:
        setSelectedCompany(experienceData[1]);
        break;
      case 2:
        setSelectedCompany(experienceData[2]);
        break;
      default:
        break;
    }
  }, [currentTab]);

  return (
    <div className="space-y-5 sm:max-w-6xl sm:mx-auto pb-8 h-screen overflow-auto">
      <div className="pb-10 sm:text-center">
        <h1 className="text-gray-800 text-3xl font-extrabold sm:text-4xl">
          Where I&apos;ve worked
        </h1>
        <p className="text-gray-600 mb-10">
          Blogs that are loved by the community. Updated every hour.
        </p>
      </div>
      <div className="flex">
        <ExperienceSelect tabItems={tabItems} selectedTab={setCurrentTab} />

        <ExperienceDisplay experienceData={selectedCompany} />
      </div>
    </div>
  );
};

export default ExperiencePage;

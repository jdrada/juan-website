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
    <section className="py-10">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="space-y-5 sm:max-w-6xl sm:mx-auto pb-8 h-screen overflow-auto">
          <div className="space-y-5 sm:text-center sm:max-w-md sm:mx-auto pb-10">
            <h1 className="text-gray-800 text-3xl font-extrabold sm:text-4xl">
              Where I&apos;ve Worked
            </h1>
            <p className="text-gray-600">
              Companies I&apos;ve worked for as a developer and the roles I
              performed in each.
            </p>
          </div>
          <div className="flex">
            <ExperienceSelect tabItems={tabItems} selectedTab={setCurrentTab} />
            <ExperienceDisplay experienceData={selectedCompany} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperiencePage;

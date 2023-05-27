import React from "react";
import { ExperienceType } from "../experienceData";

type ExperienceDisplayProps = {
  experienceData: ExperienceType;
};

const ExperienceDisplay = ({ experienceData }: ExperienceDisplayProps) => {
  return (
    <>
      <div className="px-4 md:px-8" key={experienceData.company}>
        <h2 className="text-2xl font-semibold">
          {experienceData.title}{" "}
          <b className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#4F46E5] to-[#E114E5]">
            @ {experienceData.company}
          </b>
        </h2>
        <span className="text-sm text-gray-500">{experienceData.duration}</span>
        <p className="mt-2">{experienceData.description}</p>
        <ul className="mt-4 text-sm text-gray-600 space-y-1">
          {experienceData.responsibilities.map((responsibility, idx) => (
            <li key={responsibility}>○ {responsibility}</li>
          ))}
        </ul>
        <h3 className="pt-4 pb-2">Technologies used:</h3>{" "}
        <p className="text-sm text-gray-600 space-y-1">
          {experienceData.technologies.join(" | ")}
        </p>
      </div>
    </>
  );
};

export default ExperienceDisplay;

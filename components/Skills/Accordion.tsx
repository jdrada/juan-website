import React from "react";
import {
  Accordion,
  AccordionItem,
  Card,
  CardBody,
  CardHeader,
} from "@nextui-org/react";

const SkillSection = ({ title, content }: any) => {
  return (
    <Card>
      <CardHeader className="text-neutral-400">{title}</CardHeader>
      <CardBody>
        <p>{content}</p>
      </CardBody>
    </Card>
  );
};

export default function AccordionComponent() {
  return (
    <Accordion
      variant="shadow"
      motionProps={{
        variants: {
          enter: {
            y: 0,
            opacity: 1,
            height: "auto",
            transition: {
              height: {
                type: "spring",
                stiffness: 500,
                damping: 30,
                duration: 1,
              },
              opacity: {
                easings: "ease",
                duration: 1,
              },
            },
          },
          exit: {
            y: -10,
            opacity: 0,
            height: 0,
            transition: {
              height: {
                easings: "ease",
                duration: 0.25,
              },
              opacity: {
                easings: "ease",
                duration: 0.3,
              },
            },
          },
        },
      }}
    >
      <AccordionItem
        key="1"
        aria-label="Accessible description of techologies and skills"
        title="Accessible description of techologies/skills"
      >
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 p-4">
          {skillSections.map((section, index) => (
            <SkillSection
              key={index}
              title={section.title}
              content={section.content}
            />
          ))}
        </div>
      </AccordionItem>
    </Accordion>
  );
}

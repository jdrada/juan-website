import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  ScrollShadow,
} from "@nextui-org/react";
import { motion } from "framer-motion";
import React, { useEffect, useRef } from "react";
const Dot = ({
  important = false,
  year,
  desc,
}: {
  important?: boolean;
  year: string;

  desc?: string;
}) => {
  return (
    <Popover
      className="w-fit"
      placement="bottom"
      showArrow={true}
      shouldCloseOnBlur
      color="primary"
    >
      <PopoverTrigger>
        <motion.div
          whileHover={{ scale: 1.5 }}
          className="flex flex-col items-center relative "
        >
          <p className="text-xs absolute -translate-y-6">{year}</p>
          <span
            className={`relative flex ${
              year ? "h-4 w-4" : "h-3 w-3"
            } cursor-pointer`}
          >
            {important ? (
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
            ) : null}
            <span
              className={`transition ease-in-out  relative inline-flex rounded-full ${
                year ? "h-4 w-4" : "h-3 w-3"
              } bg-primary hover:bg-sky-500`}
            ></span>
          </span>
        </motion.div>
      </PopoverTrigger>
      <PopoverContent>
        <div className="px-1 py-2">
          <div className="text-small font-bold">{year}</div>
          <div className="text-tiny break-word w-52">{desc}</div>
        </div>
      </PopoverContent>
    </Popover>
  );
};
const Line = ({ length }: { length: string | number }) => {
  return (
    <div
      className={`flex-none border-2 border-primary`}
      style={{ width: `${length}px` }}
    ></div>
  );
};
const Timeline = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      const { scrollWidth, clientWidth } = scrollRef.current;
      scrollRef.current.scrollLeft = scrollWidth - clientWidth;
    }
  }, []);
  return (
    <section
      id="experience-timeline"
      className="px-2 py-10 border-t border-b border-neutral-700"
    >
      <h2 className="text-4xl w-full font-bold text-center">
        What have I accomplished?
      </h2>
      <p className="w-full text-center font-light text-neutral-500 text-xs pt-2 mb-10">
        ← Scroll Timeline →
      </p>
      <ScrollShadow hideScrollBar orientation="horizontal" ref={scrollRef}>
        <div className="flex items-center h-full w-fit py-10 rounded-xl">
          <Line length={"120"} />
          <Dot
            important={false}
            year={"1997"}
            desc='I learned how to make an HTML website from a book my grandfather had, "El gran libro de HTML."'
          />
          <Line length={"120"} />
          <Dot
            important={false}
            year={"2011"}
            desc="Started Bachelor Degree at 'Catholic University of Honduras (UNICAH).'"
          />
          <Line length={"200"} />
          <Dot
            important={false}
            year={"2016"}
            desc="Graduated from University."
          />

          <Line length={"10"} />
          <Dot
            important={false}
            year={""}
            desc="Got my first job as a 3D Artist with Sketchup & 3Ds Max."
          />
          <Line length={"100"} />
          <Dot
            important={false}
            year={"2017"}
            desc="Moved back to Colombia and worked as a 3D artist/architect for various clients mostly on Sketchup, 3Ds Max and Blender."
          />
          <Line length={"40"} />
          <Dot
            important={false}
            year={""}
            desc="Started coding my own Sketchup Plugins with Ruby, still available on Sketchup Store."
          />

          <Line length={"30"} />
          <Dot
            important={false}
            year={""}
            desc="Development of small websites for clients (Morales & Ceballos, R&B Ingenieria)."
          />
          <Line length={"40"} />
          <Dot
            important={false}
            year={"2018"}
            desc="Worked for Pyramid Engineering as a 3D Artist (remote). Started learning web development."
          />
          <Line length={"30"} />
          <Dot
            important={false}
            year={""}
            desc="Become BIM Lead on Pyramid Engineering."
          />
          <Line length={"20"} />
          <Dot
            important={false}
            year={""}
            desc="Worked for Evolver Interactice as a 3D Modeler and Architect."
          />
          <Line length={"50"} />
          <Dot
            year={"2019"}
            desc="Got promoted to Unreal Engine Developer at Evolver Interactive."
          />
          <Line length={"100"} />
          <Dot
            important
            year={"2020"}
            desc="Got my first job as a Junior Frontend Developer at Heimat, a startup based in Berlin (Remote)."
          />
          <Line length={"100"} />
          <Dot
            important
            year={"2021"}
            desc="Started Working at AbstractDev Studio as a Frontend Developer on Contadito Project."
          />

          <Line length={"100"} />
          <Dot
            year={"2022"}
            desc="Assigned to Rasmus Auction Project as a Frontend Developer at AbstractDev Studio."
          />
          <Line length={"80"} />
          <Dot
            important
            year={""}
            desc="Started Working at ULedger as a Frontend Developer."
          />
          <Line length={"10"} />
          <Dot
            year={""}
            desc="Landed major ULedger Client in Spain with Versa Pilo PoC."
          />
          <Line length={"10"} />
          <Dot
            important
            year={"2023"}
            desc="Started Master in Software Engineering at University of Los Andes, Colombia. First ULedger release: ULedger Portal."
          />
          <Line length={"20"} />
          <Dot year={""} desc="Released ULedger Verify Beta version." />
          <Line length={"20"} />
          <Dot year={""} desc="Developed ULedger Design System." />
          <Line length={"20"} />
          <Dot year={""} desc="Developed ULedger Verify Outlook Add-in." />
          <Line length={"20"} />
          <Dot
            year={""}
            desc="Second Place on AI/Blockchain Hackaton with Owl-Guard App."
          />
          <Line length={"50"} />
        </div>
      </ScrollShadow>
    </section>
  );
};

export default Timeline;

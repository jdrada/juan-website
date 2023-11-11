import React from "react";

import {
  Accordion,
  AccordionItem,
  Avatar,
  Link,
  Image,
  Card,
  CardFooter,
  Button,
} from "@nextui-org/react";

const ProjectCard = ({
  isLink = true,
  img,
  title,
  url,
}: {
  isLink?: boolean;
  img: string;
  title: string;
  url: string;
}) => {
  return (
    <Card isFooterBlurred radius="md" className="border-none">
      <Image
        isZoomed
        alt="Woman listing to music"
        className="object-cover"
        src={img}
      />
      <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <p className="text-tiny text-white/80">{title}</p>
        {isLink ? (
          <Button
            isExternal
            showAnchorIcon
            as={Link}
            href={url}
            className="text-tiny text-white bg-black/20"
            variant="flat"
            color="default"
            radius="lg"
            size="sm"
          >
            Visit
          </Button>
        ) : (
          <></>
        )}
      </CardFooter>
    </Card>
  );
};

export default function Experience() {
  const [actives, setActives] = React.useState<string[]>([]);
  const ULedger = (
    <div className="mx-2 mb-4">
      <div className="flex justify-between">
        <h5 className="text-neutral-400 font-light mb-2">
          ULedger, Seattle USA
        </h5>
        <Link isExternal href="https://www.uledger.io" showAnchorIcon>
          uledger.io
        </Link>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <ul className="flex flex-col text-sm text-neutral-400 gap-4  md:pr-4 font-light">
          <li className="text-primary font-mono">
            {"> Achievments & contributions:"}
          </li>
          <li className="ml-4">
            Part of ULedger Verify development, a Blockchain-backed email
            explorer, securing adoption by leading companies (Basin Pacific,
            Sumadi, Yunity) managing 5,000+ daily emails.
          </li>
          <li className="ml-4">
            Developed ULedger Portal and Blockchain Explorers allows clients to
            manage memberships and transact with ULedger services. Successfully
            handling 10,000+ queries on performance tests.
          </li>
          <li className="ml-4">
            Led ULedger Verify Outlook Add-in development for enhanced email
            authentication and blockchain integration; achieved Microsoft Store
            listing. Currently benefiting 200+ users.
          </li>
          <li className="ml-4">
            Developed ULedger Design System a fully-accessible UI Kit, enhancing
            consistency across ULedger apps and resulting in a 20% faster
            development cycle compared to previously developed Apps.
          </li>
          <li className="ml-4">
            Single dev. of Versa PoC a React/Three.js 3D model web-app landing
            ULedger biggest client in Spain (Versa).
          </li>
        </ul>
        <div className="h-full w-full border border-neutral-700 rounded-xl p-4">
          <p className="text-sm text-primary font-mono">
            {"> Technologies used:"}
          </p>

          <p className="text-neutral-400 text-sm my-4 font-light ">
            TypeScript, SASS, React.js, Next.js, Redux, Git(GitLab), GraphQL,
            Strapi CMS, Stripe Payments, Agile (Scrum), Jest & Testing Lib.
          </p>
          <p className="text-sm text-primary font-mono">{"> Key projects:"}</p>

          <div className="grid grid-cols-2 mt-4 gap-4">
            <ProjectCard
              title="ULedger website"
              url="https://www.uledger.io/"
              img={"ul-website.png"}
            />
            <ProjectCard
              img={"uledger-portal.png"}
              title="ULedger Portal"
              url="https://portal.uledger.io/"
            />
            <ProjectCard
              img={"uledger-blockchain-explorer.png"}
              title="Blockchain Explorer"
              url="https://scan.uledger.io/"
            />
            <ProjectCard
              img={"uledger-verify.png"}
              title="ULedger Verify"
              url="https://verify.uledger.io"
            />
          </div>
        </div>
      </div>
    </div>
  );
  const Abstract = (
    <div className="mx-2 mb-4">
      <div className="flex justify-between">
        <h5 className="text-neutral-400 font-light mb-2">
          AbstractDev Studio, Tegucigalpa, Honduras
        </h5>
        <Link isExternal href="https://www.abstractdev.studio" showAnchorIcon>
          abstractdev.studio
        </Link>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <ul className="flex flex-col text-sm text-neutral-400 gap-4  md:pr-4 font-light">
          <li className="text-primary font-mono">
            {"> Achievments & contributions:"}
          </li>
          <li className="ml-4">
            Developed MyBidCloud a mobile-first live auction app for Rasmus
            Auctions one of the top online auctioneers in the US (rasmus.com).
          </li>
          <li className="ml-4">
            Successfully integrated streaming services handling 2000+ online
            users on Rasmus top auctions.
          </li>
          <li className="ml-4">
            Engineered dev-flow and achieved 100% code coverage on unit-tests.
          </li>
          <li className="ml-4">
            Development of Contadito App, a PYME Accounting SaaS in Honduras,
            with over 1500 users.
          </li>
          <li className="ml-4">
            Integrated CMS and Hubspot for all Contadito services, App, &
            commercial pages.
          </li>
        </ul>
        <div className="h-full w-full border border-neutral-700 rounded-xl p-4">
          <p className="text-sm text-primary font-mono">
            {"> Technologies used:"}
          </p>

          <p className="text-neutral-400 text-sm my-4 font-light ">
            TypeScript/JavaScript, CSS, NPM, React.js, Next.js, Git(GitHub),
            Strapi CMS, Agile (Kanban), Firebase, Express, Jest & Testing Lib.
          </p>
          <p className="text-sm text-primary font-mono">{"> Key projects:"}</p>

          <div className="grid grid-cols-2 mt-4 gap-4">
            <ProjectCard
              img={"bidcloud.png"}
              title="BidCloud"
              url="https://mybidcloud.com/"
            />
            <ProjectCard
              img={"rasmus.png"}
              title="Rasmus"
              url="https://rasmus.com"
            />
            <ProjectCard
              title="Contadito Landing"
              url="https://www.contadito.com/"
              img={"contadito-landing.png"}
            />
            <ProjectCard
              img={"contadito.png"}
              title="Contadito"
              url="https://app.contadito.com/"
            />
          </div>
        </div>
      </div>
    </div>
  );
  const Heimat = (
    <div className="mx-2 mb-4">
      <div className="flex justify-between">
        <h5 className="text-neutral-400 font-light mb-2">
          Heimat, Berlin, Germany
        </h5>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <ul className="flex flex-col text-sm text-neutral-400 gap-4  md:pr-4 font-light">
          <li className="text-primary font-mono">
            {"> Achievments & contributions:"}
          </li>
          <li className="ml-4">
            Part of the FE development of Genie App (React) focused on
            accessibility, internationalization and web performance.
          </li>
          <li className="ml-4">
            Frontend Development of Domus (Real Estate management App).
          </li>
        </ul>
        <div className="h-full w-full border border-neutral-700 rounded-xl p-4">
          <p className="text-sm text-primary font-mono">
            {"> Technologies used:"}
          </p>

          <p className="text-neutral-400 text-sm my-4 font-light ">
            TypeScript/JavaScript, CSS, Tailwind, React.js, Jest & Testing Lib,
            Git(GitHub), Agile (Kanban), Postman, HTTP, WCAG.
          </p>
          <p className="text-sm text-primary font-mono">{"> Key projects:"}</p>

          <div className="grid grid-cols-2 mt-4 gap-4">
            <ProjectCard
              img={"genie.png"}
              title="Genie (Not released)"
              url=""
              isLink
            />
            <ProjectCard
              img={"Genie.png"}
              title="Domus (Not released)"
              url=""
              isLink
            />
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section
      id="experience"
      className="flex flex-col justify-center items-center w-full px-2 md:px-10 border-t border-b border-neutral-800 md:py-10"
    >
      <h2 className="text-4xl w-full font-bold text-center">Work experience</h2>
      <Accordion selectionMode="multiple">
        <AccordionItem
          key="1"
          aria-label="Web Frontend Engineer"
          startContent={<Avatar color="success" src={"uledger-logo.png"} />}
          subtitle="ULedger | Aug. 2022 - Present"
          title={<p>Web Frontend Engineer</p>}
        >
          {ULedger}
        </AccordionItem>
        <AccordionItem
          key="2"
          aria-label="AbstractDev Studio"
          startContent={<Avatar color="warning" src={"abstract.png"} />}
          subtitle="AbstractDev Studio | Jan. 2021 - July 2022"
          title={<p>Web Frontend Engineer</p>}
        >
          {Abstract}
        </AccordionItem>
        <AccordionItem
          key="3"
          aria-label="Heimat (Startup)"
          startContent={<Avatar color="primary" src="heimat.png" />}
          subtitle="Heimat | Jan. 2020 - Aug 2020"
          title={<p>Jr. Web Frontend Engineer</p>}
        >
          {Heimat}
        </AccordionItem>
      </Accordion>
    </section>
  );
}

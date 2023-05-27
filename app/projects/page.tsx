import Image from "next/image";
import { FiExternalLink, FiGithub, FiGitlab } from "react-icons/fi";
import uledgerPortal from "../../public/uledger-portal.png";
import blockchainExplorer from "../../public/uledger-blockchain-explorer.png";
import verify from "../../public/uledger-verify.png";
const posts = [
  {
    title: "ULedger Blockchain Explorer",
    desc: "ULedger blockchain explorer provides a view of block and transactions on the ULedger blockchain. It enables users to track and access real-time and historical data.",
    img: blockchainExplorer,
    status: "Production",
    type: "Full-Stack Development",
    technologies:
      "TypeScript | Next.js | Nest.js | GraphQL | Strapi CMS | Scss",
    href: "https://blockchain-explorer.uledger.io/",
    linkIcon: FiExternalLink,
    githubIcon: false,
    githubLink: "https://gitlab.com/jdrada",
    gitlabIcon: true,
    gitlabLink: "https://gitlab.com/jdrada",
  },
  {
    title: "ULedger Portal",
    desc: "ULedger's one-stop platform for managing blockchain usage, administering user accounts, submitting support tickets, and enabling many more features.",
    img: uledgerPortal,
    status: "Production",
    type: "Full-Stack Development",
    technologies:
      "TypeScript | Next.js | Nest.js | GraphQL | Strapi CMS | Auth0",
    href: "https://portal.uledger.io/",
    linkIcon: FiExternalLink,
    githubIcon: false,
    githubLink: "https://gitlab.com/jdrada",
    gitlabIcon: true,
    gitlabLink: "https://gitlab.com/jdrada",
  },
  {
    title: "ULedger Verify",
    desc: "ULedger Verify is a secure email verification service that uses the ULedger blockchain to securely verify emails, leveraging the immutable nature of the blockchain to create tamper-proof records.",
    img: verify,
    status: "On development",
    type: "Full-Stack Development",
    technologies: "TypeScript | React.js | Nest.js | Scss | Auth0",
    href: "https://portal.uledger.io/",
    linkIcon: FiExternalLink,
    githubIcon: false,
    githubLink: "https://gitlab.com/jdrada",
    gitlabIcon: true,
    gitlabLink: "https://gitlab.com/jdrada",
  },
  // {
  //   title: "Contadito SaaS Landing Page",
  //   desc: "Landing page aimed at cold-selling Contadito SaaS and products, integrated with CRM ",
  //   img: "https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  //   status: "On development",
  //   type: "Frontend Development",
  //   technologies: "TypeScript | Next.js v13 | Tailwind CSS | Strapi CMS ",
  //   href: "https://contadito.hn/",
  //   linkIcon: FiExternalLink,
  //   githubIcon: true,
  //   githubLink: "https://gitlab.com/jdrada",
  //   gitlabIcon: false,
  //   gitlabLink: "https://gitlab.com/jdrada",
  // },
  // {
  //   title: "Contadito App",
  //   desc: "Accounting solution for PYMES in Honduras",
  //   img: "https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  //   status: "Production",
  //   type: "Frontend Development",
  //   technologies:
  //     "TypeScript | Next.js v13 | GraphQL | Chakra UI | Strapi CMS ",
  //   href: "https://contadito.hn/",
  //   linkIcon: FiExternalLink,
  //   githubIcon: true,
  //   githubLink: "https://gitlab.com/jdrada",
  //   gitlabIcon: false,
  //   gitlabLink: "https://gitlab.com/jdrada",
  // },
  // {
  //   title: "Genie App",
  //   desc: "Genie is a POC that let users in Berlin publish wishes and get free items from owners that don't need them anymore. (Not released yet.)",
  //   img: "https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  //   status: "On development",
  //   type: "Frontend Development",
  //   technologies:
  //     "TypeScript | Next.js v13 | GraphQL | Chakra UI | Strapi CMS ",
  //   href: "https://contadito.hn/",
  //   linkIcon: FiExternalLink,
  //   githubIcon: true,
  //   githubLink: "https://gitlab.com/jdrada",
  //   gitlabIcon: false,
  //   gitlabLink: "https://gitlab.com/jdrada",
  // },
];

const ProjectsPage = () => {
  return (
    <section className="py-10">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="space-y-5 sm:text-center sm:max-w-md sm:mx-auto">
          <h1 className="text-gray-800 text-3xl font-extrabold sm:text-4xl">
            Work
          </h1>
          <p className="text-gray-600">
            Blogs that are loved by the community. Updated every hour.
          </p>
        </div>
        <ul className="grid gap-x-8 gap-y-10 mt-16 sm:grid-cols-2 lg:grid-cols-3 ">
          {posts.map((items, key) => {
            return (
              <li
                className="w-full mx-auto group sm:max-w-sm border rounded-t-lg shadow"
                key={key}
              >
                {/*  eslint-disable-next-line @next/next/no-img-element */}

                <Image
                  style={{
                    height: "200px",
                    width: "auto",
                  }}
                  src={items.img}
                  alt={items.title}
                  className="w-full rounded-t-lg "
                />

                <div className="my-2 pt-1 space-y-2 px-3 mx-2">
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span className="block text-indigo-600 text-sm">
                      {items.type}
                    </span>
                    <span className="inline-block whitespace-nowrap rounded-[0.27rem] bg-primary-100 px-[0.65em] pb-[0.25em] pt-[0.35em] text-center align-baseline text-[0.75em] font-bold leading-none text-primary-700">
                      {items.status}
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <h3 className="text-lg text-gray-800 duration-150  font-semibold">
                      {items.title}
                    </h3>
                    <div className="flex gap-3">
                      <a href={items.href} target="_blank">
                        <items.linkIcon
                          className="justify-self-center "
                          fontSize="1.25rem"
                        />
                      </a>
                      {items.githubIcon && (
                        <a href={items.githubLink} target="_blank">
                          <FiGithub
                            className="justify-self-center "
                            fontSize="1.25rem"
                          />
                        </a>
                      )}
                      {items.gitlabIcon && (
                        <a href={items.gitlabLink} target="_blank">
                          <FiGitlab
                            className="justify-self-center "
                            fontSize="1.25rem"
                          />
                        </a>
                      )}
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm duration-150 group-hover:text-gray-800">
                    {items.desc}
                  </p>
                  <p className="py-2 text-gray-600 text-xs duration-150 group-hover:text-gray-800">
                    {items.technologies}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
export default ProjectsPage;

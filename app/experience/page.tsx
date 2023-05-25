import React from "react";

const ExperiencePage = () => {
  return (
    <section className="overflow">
      <div className="max-w-screen-xl mx-auto px-4 py-14 gap-12 text-gray-600 overflow-hidden md:px-8 md:flex">
        <ol className="border-l border-neutral-300 dark:border-neutral-500">
          <li>
            <div className="flex-start flex items-center pt-3">
              <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500" />
              <p className="text-sm text-neutral-500 dark:text-neutral-300">
                01.07.2021
              </p>
            </div>
            <div className="mb-6 ml-4 mt-2">
              <h4 className="mb-1.5 text-xl font-semibold">
                Web Developer at ULedger
              </h4>
              <ul className="mb-3 text-neutral-500 dark:text-neutral-300 hover:text-gray-600 transition">
                ULedger is a data integrity platform providing acess to Web 3.0
                for large companies. Developed ULedger Apps: User Portal, Dev
                Portal, UL-Verify, UL-CMS as part of ULedger CD Development
                team.
                <ul>
                  <li>
                    • Developed and maintained SSR (Server-Side Rendering) Apps
                    using Next.js + Typescript.
                  </li>
                  <li>
                    • Implemented unit testing to comply with the industry
                    standards.
                  </li>
                  • Implemented modern design patters, refactored code to be
                  maintainable with clean code practices. • Implemented CMS. •
                  Implemented ULedger SSO for all ULedger apps, integrated
                  Auth0. • Worked under SCRUM - Agile Methodologies Framework
                </ul>
              </ul>
            </div>
          </li>

          <li>
            <div className="flex-start flex items-center pt-2">
              <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500"></div>
              <p className="text-sm text-neutral-500 dark:text-neutral-300">
                13.09.2021
              </p>
            </div>
            <div className="mb-6 ml-4 mt-2">
              <h4 className="mb-1.5 text-xl font-semibold">
                Front-End developer at Heimat
              </h4>
              <p className="mb-3 text-neutral-500 dark:text-neutral-300">
                Libero expedita explicabo eius fugiat quia aspernatur autem
                laudantium error architecto recusandae natus sapiente sit nam
                eaque, consectetur porro molestiae ipsam an deleniti.
              </p>
            </div>
          </li>

          <li>
            <div className="flex-start flex items-center pt-2">
              <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500"></div>
              <p className="text-sm text-neutral-500 dark:text-neutral-300">
                25.11.2021
              </p>
            </div>
            <div className="ml-4 mt-2 pb-5">
              <h4 className="mb-1.5 text-xl font-semibold">
                Freelance Front-End Developer
              </h4>
              <p className="mb-3 text-neutral-500 dark:text-neutral-300">
                Voluptatibus temporibus esse illum eum aspernatur, fugiat
                suscipit natus! Eum corporis illum nihil officiis tempore.
                Excepturi illo natus libero sit doloremque, laborum molestias
                rerum pariatur quam ipsam necessitatibus incidunt, explicabo.
              </p>
            </div>
          </li>

          <li>
            <div className="flex-start flex items-center pt-2">
              <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500"></div>
              <p className="text-sm text-neutral-500 dark:text-neutral-300">
                25.11.2021
              </p>
            </div>
            <div className="ml-4 mt-2 pb-5">
              <h4 className="mb-1.5 text-xl font-semibold">
                Freelance Front-End Developer
              </h4>
              <p className="mb-3 text-neutral-500 dark:text-neutral-300">
                Voluptatibus temporibus esse illum eum aspernatur, fugiat
                suscipit natus! Eum corporis illum nihil officiis tempore.
                Excepturi illo natus libero sit doloremque, laborum molestias
                rerum pariatur quam ipsam necessitatibus incidunt, explicabo.
              </p>
            </div>
          </li>
        </ol>
      </div>
    </section>
  );
};

export default ExperiencePage;

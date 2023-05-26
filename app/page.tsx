import { Inter } from "next/font/google";
import HomeImage from "../public/homeimage.svg";
import Image from "next/image";
import ProfileImage from "../images/jc-profile.jpeg";
import IconList from "@/components/IconsList/IconsList";

const inter = Inter({ subsets: ["latin"] });

const HomePage = () => {
  return (
    <section className="relative">
      <div
        className="absolute inset-32 blur-xl h-[180px]"
        style={{
          background:
            "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)",
          filter: "blur(80px)",
        }}
      />
      <div className="relative">
        <section className="max-w-screen-xl mx-auto px-4 ">
          <div className="gap-12 text-gray-600 md:px-8 md:flex">
            <div className="flex-none space-y-5 max-w-xl">
              <p>👋 Hello World! My name is Juan and I&apos;m a:</p>
              <div className="flex gap-4">
                <h1 className="text-4xl text-gray-800 font-extrabold sm:text-5xl sm:mt-2">
                  <b className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F46E5] to-[#E114E5]">
                    Frontend{" "}
                  </b>
                  Web Developer
                </h1>
                {/* <Image
                  className="w-16 h-16 rounded-full hidden sm:block"
                  src={ProfileImage}
                  alt="Juan C. Drada"
                /> */}
              </div>

              <p>
                I&apos;m a test driven developer with a passion for solving
                problems. Who loves writing clean, maintainable and scalable
                code, learning and implementing modern design patterns.
              </p>

              {/* <a
                href="javascript:void(0)"
                className="flex items-center justify-center gap-x-1 py-2 px-4 text-white font-medium bg-gray-800 duration-150 hover:bg-gray-700 active:bg-gray-900 rounded-full md:inline-flex"
              >
                Experience
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                    clipRule="evenodd"
                  />
                </svg>
              </a> */}
              <p>
                Here are a few technologies I’ve been working with recently:
              </p>

              <div className="flex items-center gap-x-3 sm:text-sm">
                <IconList />
              </div>
            </div>
            <div className="flex-1 hidden md:block">
              {/* Image */}
              <Image src={HomeImage} alt="Home Image" className="max-w-xl" />
            </div>
          </div>
          {/* <div className="grid place-items-center w-full">
            <div className="animate-bounce bg-white dark:bg-slate-800 p-2 w-10 h-10 ring-1 ring-slate-900/5 dark:ring-slate-200/20 shadow-lg rounded-full">
              <svg
                className="w-6 h-6 text-slate-100"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </div>
          </div> */}
        </section>
      </div>
    </section>
  );
};
export default HomePage;

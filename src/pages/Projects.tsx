import { projectsData } from "../assets/projectsData";
import { useState } from "react";
import Category from "../components/Category";
import useMediaQuery from "../assets/hooks/useMediaQuery";
import { Navbar } from "../components/Navbar";
import { MobileNaveLinks, mobileUrl } from "./Home";
export const Projects = () => {
  const isSmallScreen = useMediaQuery("(max-width:600px)");

  const [selectedCategory, setSelectedCategory] = useState("All");
  const page =
    selectedCategory === "All"
      ? projectsData
      : projectsData.filter((project) => project.category === selectedCategory);
  const clickHandler = (category: string) => {
    setSelectedCategory(category);
  };
  return (
    <>
      <div>
        {isSmallScreen && (
          <Navbar
            navLinks={MobileNaveLinks}
            url={mobileUrl}
            className="fixed text-white text-xs w-screen h-auto bg-black font-normal flex justify-center cursor-pointer whitespace-nowrap top-0  z-10  gap-4 py-4 border-b-1 mr-2"
          />
        )}

        <div className="max-sm:pt-12 bg-black">
          <Category onClick={clickHandler} />
        </div>
      </div>
      <div className="w-auto min-h-screen bg-black text-white">
        <div
          className={
            isSmallScreen
              ? "grid grid-cols-1  max-w-[80vw] mx-auto  "
              : " grid grid-cols-3 gap-x-10 gap-y-6 mx-[6rem] pt-15"
          }
        >
          {page.map((project) => (
            <figure
              key={project.id}
              className={
                isSmallScreen
                  ? "flex flex-col justify-center items-center space-around mt-8"
                  : ""
              }
            >
              <img
                className={
                  isSmallScreen
                    ? "rounded-xl hover:border-2 border-[rgb(104,200,163)]   "
                    : "rounded-3xl hover:border-2 border-[rgb(104,200,163)]"
                }
                src={project.src}
                alt={project.name}
              />
              <figcaption className=" hover:text-sky-400 text-la text-center mt-2 ">
                {project.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </>
  );
};

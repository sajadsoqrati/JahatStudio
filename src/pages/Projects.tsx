import { projectsData } from "../assets/projectsData";
import { useState } from "react";
import Category from "../components/Category";
export const Projects = () => {
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
      <Category onClick={clickHandler} />
      <div className="fixed top-0 w-screen min-h-screen bg-black  text-white">
        <div className=" grid grid-cols-3  gap-10 mx-[6rem] mt-[9rem]">
          {page.map((project) => (
            <figure key={project.id}>
              <img
                className="rounded-3xl hover:border-2 border-sky-400"
                src={project.src}
                alt={project.name}
              />
              <figcaption className="relative bottom-10 hover:text-sky-400 text-xl  text-center">
                {project.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </>
  );
};

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
      <div>
        <Category onClick={clickHandler} />
      </div>
      <div className="w-screen min-h-screen bg-black text-white">
        <div className=" grid grid-cols-3 gap-x-10 gap-y-6 mx-[6rem] pt-15">
          {page.map((project) => (
            <figure key={project.id}>
              <img
                className="rounded-3xl hover:border-2 border-sky-400"
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

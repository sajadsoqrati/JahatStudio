import { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { desktopUrl, desktopNavLinks } from "../pages/Home";
import useMediaQuery from "../assets/hooks/useMediaQuery";
interface CategoryProps {
  onClick: (category: string) => void;
}
const Category = (props: CategoryProps) => {
  const isSmallScreen = useMediaQuery("(max-width:600px)");

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const categoryName: string[] = [
    "All",
    "Billboard",
    "Branding",
    "Photography",
    "Print",
    "Video",
    "Websites",
  ];
  const desktopCategory = (
    <div className="bg-black ">
      <Navbar
        navLinks={desktopNavLinks}
        url={desktopUrl}
        className="text-white font-normal flex flex-auto whitespace-nowrap justify-center gap-10 pt-6 mr-2"
      />
      <nav className="text-white text-sm gap-7 flex text-center items-start justify-center mt-6 mr-7">
        {categoryName.map((item, i) => (
          <Link key={i} to={"/Projects.tsx"}>
            <button
              onClick={() => {
                setActiveIndex(i);
                props.onClick(item);
              }}
              className={i === activeIndex ? "text-[#68c8a3]" : ""}
            >
              {item.toUpperCase()}
            </button>
          </Link>
        ))}
      </nav>
    </div>
  );
  const mobileCategory = (
    <div className="bg-black ">
      <nav className="text-white text-sm py-4 font-normal gap-4 flex text-center whitespace-nowra overflow-x-auto items-start mx-4 ">
        {categoryName.map((item, i) => (
          <Link key={i} to={"/Projects.tsx"}>
            <button
              onClick={() => {
                setActiveIndex(i);
                props.onClick(item);
              }}
              className={i === activeIndex ? "text-[#68c8a3]" : ""}
            >
              {item.toUpperCase()}
            </button>
          </Link>
        ))}
      </nav>
    </div>
  );
  return isSmallScreen ? mobileCategory : desktopCategory;
};

export default Category;

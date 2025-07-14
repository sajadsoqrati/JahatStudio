import { useState } from "react";
import { Link } from "react-router-dom";
interface CategoryProps {
  onClick: (category: string) => void;
}
const Category = (props: CategoryProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const categoryName: string[] = [
    "All",
    "Billboard",
    "Branding",
    "Digital",
    "Print",
    "Video",
    "Websites",
  ];
  return (
    <nav className="text-white relative z-10  bottom-18 text-sm  gap-7  flex text-center items-start justify-center">
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
  );
};

export default Category;

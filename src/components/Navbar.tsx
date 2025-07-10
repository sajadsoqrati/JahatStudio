import { Link } from "react-router-dom";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import "../index.css";
import { useState } from "react";

export function Navbar() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const navLinks: string[] = [
    "HOME",
    "ABOUT",
    "OUR TEAM",
    "CONTACT",
    "PROJECT",
    "EDUCATION",
    "FA",
  ];
  const url: string[] = [
    "/",
    "/About.tsx",
    "/About.tsx",
    "/Contact.tsx",
    "/Projects.tsx",
    "/Education.tsx",
    "/Fa.tsx",
  ];

  return (
    <>
      <nav className="text-white relative z-10 font-normal flex justify-center gap-10 mt-12  ">
        {navLinks.map((item, i) => (
          <Link key={i} to={url[i]}>
            <button
              onClick={() => setActiveIndex(i)}
              className={i === activeIndex ? "text-[rgb(104,200,163)]" : ""}
            >
              {item}
            </button>
          </Link>
        ))}
      </nav>
      <nav className=" relative z-10 items-start  font-large gap-4 flex flex-col items-center top-65 ml-[10rem] pointer-events: none">
        <a href="https://www.linkedin.com">
          <FaLinkedinIn color="white" size={24} />
        </a>
        <a href="https://telegram.org">
          <FaTelegram color="white" size={24} />
        </a>
        <a href="https://www.instagram.com/">
          <FaInstagram color="white" size={24} />
        </a>
      </nav>
    </>
  );
}

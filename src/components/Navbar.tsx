import { Link } from "react-router-dom";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import "../index.css";
import { useState } from "react";

export function Navbar() {
  const [className, setClassName] = useState<string>("text-white");
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

  function clickHandler() {
    setClassName(() => "text-green-300");
  }
  return (
    <>
      <nav className="relative z-10 font-normal flex justify-center gap-10 my-11">
        {navLinks.map((item, i) => (
          <Link key={i} to={url[i]}>
            <button className={className} onClick={clickHandler}>
              {item}
            </button>
          </Link>
        ))}
      </nav>
      <nav className=" relative z-20 items-start font-large gap-4 flex flex-col mt-[350px] ml-[2.5rem]">
        <FaLinkedinIn color="white" size={24} />
        <FaTelegram color="white" size={24} />
        <FaInstagram color="white" size={24} />
      </nav>
    </>
  );
}

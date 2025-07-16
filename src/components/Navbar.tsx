import { Link } from "react-router-dom";
import "../index.css";
import { useState } from "react";
interface NavbarProps {
  className: string;
}
export function Navbar(props: NavbarProps) {
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
    <nav className={props.className}>
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
  );
}
{
  /* <nav className=" relative z-10 items-start  font-large gap-4 flex flex-col items-center top-73 ml-[2.5rem] ">
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn color="white" size={24} />
        </a>
        <a
          href="https://telegram.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTelegram color="white" size={24} />
        </a>
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram color="white" size={24} />
        </a>
      </nav> */
}

import { Link } from "react-router-dom";
import "../index.css";
import { useState } from "react";

interface NavbarProps {
  className: string;
  url: string[];
  navLinks: string[];
}
export function Navbar(props: NavbarProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  return (
    <nav className={props.className}>
      {props.navLinks.map((item, i) => (
        <Link key={i} to={props.url[i]}>
          <button
            onClick={() => setActiveIndex(i)}
            className={
              i === activeIndex
                ? "text-[rgb(104,200,163)] cursor-pointer hover:text-[rgb(104,200,163)]"
                : "cursor-pointer hover:text-[rgb(104,200,163)] "
            }
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

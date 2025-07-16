import { FaLinkedin } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const SocialNav = () => {
  return (
    <nav className="  font-large gap-4 flex flex-col justify-center ml-[2.5rem]">
      <a
        href="https://www.linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin color="white" size={24} />
      </a>
      <a href="https://telegram.org" target="_blank" rel="noopener noreferrer">
        <FaTelegram color="white" size={24} />
      </a>
      <a
        href="https://www.instagram.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram color="white" size={24} />
      </a>
    </nav>
  );
};

export default SocialNav;

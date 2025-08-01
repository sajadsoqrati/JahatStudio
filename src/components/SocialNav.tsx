import { FaLinkedin } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import useMediaQuery from "../assets/hooks/useMediaQuery";
interface socialNave {
  className: string;
}
const SocialNav = (props: socialNave) => {
  const isSmallScreen = useMediaQuery("(max-width:600px)");

  return (
    <nav className={props.className}>
      <a
        href="https://linkedin.com/in/jahatstudio"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin color="white" size={isSmallScreen ? 16 : 24} />
      </a>
      <a
        href="https://t.me/jahatstudio"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaTelegram color="white" size={isSmallScreen ? 16 : 24} />
      </a>
      <a
        href="https://www.instagram.com/jahatstudio"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram color="white" size={isSmallScreen ? 16 : 24} />
      </a>
    </nav>
  );
};

export default SocialNav;

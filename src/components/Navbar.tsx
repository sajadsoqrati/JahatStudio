import { Link } from "react-router-dom";
import "../index.css";
export function Navbar() {
  return (
    <nav>
      <Link to="/">
        <button className="nav-link-btn">HOME</button>
      </Link>
      <Link to="src/pages/About.tsx">
        <button className="nav-link-btn">ABOUT</button>
      </Link>
      <Link to="src/pages/About.tsx">
        <button className="nav-link-btn">OUR TEAM</button>
      </Link>
      <Link to="src/pages/Contact.tsx">
        <button className="nav-link-btn">CONTACT</button>
      </Link>
      <Link to="src/pages/Projects.tsx">
        <button className="nav-link-btn">PROJECTS</button>
      </Link>
      <Link to="src/pages/Education.tsx">
        <button className="nav-link-btn">EDUCATION</button>
      </Link>
      <Link to="src/pages/Fa.tsx">
        <button className="nav-link-btn">FA</button>
      </Link>
    </nav>
  );
}

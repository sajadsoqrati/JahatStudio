import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Layout } from "./Layout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Projects } from "./pages/Projects";
import { Education } from "./pages/Education";
import { Fa } from "./pages/Fa";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="About.tsx" element={<About />} />
            <Route path="Contact.tsx" element={<Contact />} />
            <Route path="Projects.tsx" element={<Projects />} />
            <Route path="Education.tsx" element={<Education />} />
            <Route path="Fa.tsx" element={<Fa />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;

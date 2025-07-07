import { HashRouter as Router, Routes, Route } from "react-router-dom";
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
            <Route path="./pages/About.tsx" element={<About name="ali" />} />
            <Route path="./pages/Contact.tsx" element={<Contact />} />
            <Route path="./pages/Project.tsx" element={<Projects />} />
            <Route path="./pages/Education.tsx" element={<Education />} />
            <Route path="./pages/Fa.tsx" element={<Fa />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;

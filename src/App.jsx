import "./App.css";
import About from "./components/about/About";
import Footer from "./components/footer/Footer";
import Main from "./components/main/Main";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/navbar/Navbar";

import Resume from "./components/resume/Resume";
import Contact from "./components/contact/Contact";
import { Routes, Route } from "react-router-dom";
import Projects from "./components/projects/Projects";

function App() {
  const data = [
    { skill: "HTML", value: 100 },
    { skill: "CSS", value: 90 },
    { skill: "JavaScript", value: 85 },
    { skill: "React js", value: 80 },
    { skill: "node js", value: 80 },
    { skill: "SQL", value: 40 },
    { skill: "Mongo db", value: 70 },
    { skill: " Express js", value: 70 },
    { skill: " AWS", value: 40 },
  
  ];
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About data={data} />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;

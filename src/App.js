import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import About from "./components/About";
import FooterComponent from "./components/Footer";
import Projects from "./components/Projects";
import NavComponent from "./components/Nav";
import Resume from "./components/Resume";
import TagManager from "react-gtm-module";
import "bootstrap/dist/css/bootstrap.min.css";
import resumeFile from "./assets/resume.pdf";

// COMPONENT
export default function App() {
  const tagManagerArgs = {
    gtmId: "GTM-N6QXHVV",
  };
  TagManager.initialize(tagManagerArgs);
  return (
    <Router>
      <NavComponent />
      <main className="container flex-row p-2 align-items-center h-100">
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume resumeFile={resumeFile} />} />
          <Route path="*" element={<Navigate to="/about" />} />
        </Routes>
      </main>
      <FooterComponent />
    </Router>
  );
}

import React, { useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Nav from "./components/Nav";
import Resume from "./components/Resume";

function App() {
  const [pageSelected, setCurrentPage] = useState("about");
  return (
    <div>
      <Nav pageSelected={pageSelected} setCurrentPage={setCurrentPage}></Nav>
      <main>
        <About pageSelected={pageSelected}></About>
        <Contact pageSelected={pageSelected}></Contact>
        <Projects pageSelected={pageSelected}></Projects>
        <Resume pageSelected={pageSelected}></Resume>
      </main>
    </div>
  );
}

export default App;

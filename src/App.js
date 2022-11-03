import React, { useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Nav from "./components/Nav";
import Resume from "./components/Resume";

function App() {
  const [currentPage, setCurrentPage] = useState('about');
  return (
    <div>
      <Nav></Nav>
      <main>
        <About></About>
        <Contact></Contact>
        <Projects></Projects>
        <Resume></Resume>
      </main>
    </div>
  );
}

export default App;

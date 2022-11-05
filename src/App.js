import React, { useState } from "react";
import About from "./components/About";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Nav from "./components/Nav";
import Resume from "./components/Resume";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  const [pageSelected, setCurrentPage] = useState( 'about');
  return (
    <div className="flex">
      <Nav pageSelected={pageSelected} setCurrentPage={setCurrentPage}></Nav>
      <main className="container flex-row p-2 align-items-center">
        <About pageSelected={pageSelected}></About>
        <Contact pageSelected={pageSelected}></Contact>
        <Projects pageSelected={pageSelected}></Projects>
        <Resume pageSelected={pageSelected}></Resume>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;

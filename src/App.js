import React, { useState } from "react";
import About from "./components/About";
import FooterComponent from "./components/Footer";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import NavComponent from "./components/Nav";
import Resume from "./components/Resume";
import TagManager from "react-gtm-module";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const tagManagerArgs = {
    gtmId: "GTM-N6QXHVV",
  };
  TagManager.initialize(tagManagerArgs);

  const [pageSelected, setCurrentPage] = useState("about");
  return (
    <div className="flex mb-2">
      <NavComponent pageSelected={pageSelected} setCurrentPage={setCurrentPage}></NavComponent>
      <main className="container flex-row p-2 align-items-center h-100">
        <About pageSelected={pageSelected}></About>
        <Contact pageSelected={pageSelected}></Contact>
        <Projects pageSelected={pageSelected}></Projects>
        <Resume pageSelected={pageSelected}></Resume>
      </main>
      <FooterComponent></FooterComponent>
    </div>
  );
}

export default App;

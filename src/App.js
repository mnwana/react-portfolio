import React, { useState } from "react";
import About from "./components/About";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Nav from "./components/Nav";
import Resume from "./components/Resume";
import { GTMProvider } from '@elgorditosalsero/react-gtm-hook';

// import TagManager from 'react-gtm-module'

import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  //   const tagManagerArgs = {
  //     gtmId: 'GTM-N6QXHVV'
  // }
  // TagManager.initialize(tagManagerArgs)

  const gtmParams = { id: "GTM-N6QXHVV" };

  const [pageSelected, setCurrentPage] = useState("about");
  return (
    <GTMProvider state={gtmParams}>
      <div className="flex mb-2">
        <Nav pageSelected={pageSelected} setCurrentPage={setCurrentPage}></Nav>
        <main className="container flex-row p-2 align-items-center h-100">
          <About pageSelected={pageSelected}></About>
          <Contact pageSelected={pageSelected}></Contact>
          <Projects pageSelected={pageSelected}></Projects>
          <Resume pageSelected={pageSelected}></Resume>
        </main>
        <Footer></Footer>
      </div>
    </GTMProvider>
  );
}

export default App;

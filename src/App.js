import React, { useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Gallery from "./components/Gallery";
import Nav from "./components/Nav";

function App() {
  const [currentPage, setCurrentPage] = useState('about');
  return (
    <div>
      <Nav></Nav>
      <main>
        <About></About>
        <Contact></Contact>
        <Gallery></Gallery>
      </main>
    </div>
  );
}

export default App;

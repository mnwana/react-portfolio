import React, { useState } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack5";
import resumeFile from "../../assets/resume.pdf";
function Resume() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  return (
    <section>
      <iframe
        title="Resume"
        style={{ width: "100%", height: "100%" }}
        src={resumeFile}
      />
      <button>Download Resume</button>
    </section>
  );
}

export default Resume;

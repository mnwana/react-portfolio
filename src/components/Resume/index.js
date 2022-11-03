import React, { useState } from "react";
import resumeFile from "../../assets/resume.pdf";
function Resume() {
  function onDocumentLoadSuccess() {
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

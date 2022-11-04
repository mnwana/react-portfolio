import React, { useState } from "react";
import resumeFile from "../../assets/resume.pdf";
function Resume(props) {
  const {pageSelected} = props;
  if(pageSelected === 'resume'){
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
  );}
  return;
}

export default Resume;

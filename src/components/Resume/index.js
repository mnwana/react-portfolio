import React from "react";
import resumeFile from "../../assets/resume.pdf";
function Resume(props) {

  const {pageSelected} = props;
  if(pageSelected === 'resume'){
  return (
    <section className="col-md-6">
      <iframe
        title="Resume"
        style={{ width: "100%", height: "100%" }}
        src={resumeFile}
      />
      <button className="button" type="submit">
      <a href={resumeFile} download>Download</a>
      </button>
    </section>
  );}
  return;
}

export default Resume;

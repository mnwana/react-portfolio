import React from "react";
import resumeFile from "../../assets/resume.pdf";
function Resume(props) {
  const { pageSelected } = props;
  if (pageSelected === "resume") {
    return (
      <section className="col-md-6 text-center vh-100">
        <h2>Resume</h2>
        <iframe
          title="Resume"
          style={{ width: "100%", height: "75%" }}
          src={resumeFile}
        />
        <button className="button" type="submit">
          <a href={resumeFile} download="MarielleNwanaResume.PDF">
            Download
          </a>
        </button>
      </section>
    );
  }
  return;
}

export default Resume;

import React from "react";
import resumeFile from "../../assets/resume.pdf";
function Resume(props) {
  const { pageSelected } = props;
  if (pageSelected === "resume") {
    return (
      <section className="col-md-6 text-center vh-100 mx-auto justify-content-center">
        <h1 className="mnTextSecondary">Resume</h1>
        <h5>Proficiencies</h5>
        <p className="mnTextDark"> {`dbt | BigQuery | Airflow | Snowflake | SQL | NoSQL | MySQL | Fivetran | Python | Javascript`} </p>
        <iframe
          title="Resume"
          style={{ width: "100%" , height: "75%" }}
          src={resumeFile}
        />
        {/* <button className="btn mnButtonPrimary " type="submit">
          <a className=" text-reset text-decoration-none" href={resumeFile} download="MarielleNwanaResume.PDF">
            Download
          </a>
        </button> */}
      </section>
    );
  }
  return;
}

export default Resume;

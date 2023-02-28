import React from "react";
import { useState } from "react";
import { Container } from "react-bootstrap";
import { Document, Page } from "react-pdf";
// import resumeFile from "../../assets/resume.pdf";

function Resume(props) {
  const { pageSelected } = props;
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1); //setting 1 to show fisrt page
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  function changePage(offset) {
    setPageNumber(prevPageNumber => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }
  if (pageSelected === "resume") {
    return (
      <Container className="col-md-6 text-center vh-100 mx-auto justify-content-center">
        <h1 className="mnTextSecondary">Resume</h1>
        <h5>Proficiencies</h5>
        <p className="mnTextDark">
          {" "}
          {`dbt | BigQuery | Airflow | Snowflake | SQL | NoSQL | MySQL | Fivetran | Python | Javascript`}{" "}
        </p>
        <div className="all-page-container">
        <Document
          file={props.resumeFile}
          options={{ workerSrc: "/pdf.worker.js" }}
          onLoadSuccess={onDocumentLoadSuccess}
        >
          {Array.from(new Array(numPages), (el, index) => (
            <Page key={`page_${index + 1}`} pageNumber={index + 1} />
          ))}
        </Document>
        </div>
        {/* add back in download link */}
      </Container>
    );
  }
  return;
}

export default Resume;

import React from "react";
import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Document, Page } from "react-pdf";
// fix page breaks for resume file & sizing for mobile
function Resume(props) {
  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  }

  function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(
      getWindowDimensions()
    );

    useEffect(() => {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowDimensions;
  }

  const { height, width } = useWindowDimensions();

  const { pageSelected } = props;
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1); //setting 1 to show fisrt page
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  function changePage(offset) {
    setPageNumber((prevPageNumber) => prevPageNumber + offset);
  }

// switch proficiencies to left bullet
  if (pageSelected === "resume") {
    return (
      <Container className="col-sm-12 col-md-6 mb-4 text-center vh-100 mx-auto justify-content-center resumeHolder">
        <h1 className="mnTextSecondary">Resume</h1>
        <h6>Proficiencies</h6>
        <p className="mnTextDark">
          {" "}
          {`dbt | BigQuery | Airflow | Snowflake | SQL | NoSQL | MySQL | Fivetran | Python | Javascript`}{" "}
        </p>
        <div className="all-page-container">
          <Document
            className="justify-content-center mx-0"
            file={props.resumeFile}
            options={{ workerSrc: "/pdf.worker.js" }}
            onLoadSuccess={onDocumentLoadSuccess}
          >
            {Array.from(new Array(numPages), (el, index) => (
              <Page
                key={`page_${index + 1}`}
                pageNumber={index + 1}
                scale={width>500 ? 1 : 0.6}
                styles="width: window.innerWidth,height: window.innerHeight"
              ></Page>
            ))}
          </Document>
        </div>
        <Button href={props.resumeFile} download="MarielleNwanaResume.PDF">
          Download
        </Button>
      </Container>
    );
  }
  return;
}

export default Resume;

import React from "react";
import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Document, Page } from "react-pdf";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
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
      <Container className="text-center">
        <h1 className="">Resume</h1>
        <Row className="mb-0 pb-0 h-100 text-center mx-auto justify-content-center resumeHolder">
          <Col xs={12} id="profs">
            <h6>Proficiencies</h6>
            <p className="mb-0">
              {`dbt | BigQuery | Airflow | Snowflake | SQL | NoSQL | MySQL | Fivetran | Python | Javascript`}
            </p>
          </Col>
          <Col className="all-page-container mb-xl-0 p-0" xs={12} xl={6}>
          <Button href={props.resumeFile} download="MarielleNwanaResume.PDF" className="mt-2" >
              Download
            </Button>
            <Document
              className="justify-content-center mx-0 p-0"
              file={props.resumeFile}
              options={{ workerSrc: "/pdf.worker.js" }}
              onLoadSuccess={onDocumentLoadSuccess}
            >
              {Array.from(new Array(numPages), (el, index) => (
                <Page
                  key={`page_${index + 1}`}
                  pageNumber={index + 1}
                  scale={width > 500 ? 1 : 0.545}
                ></Page>
              ))}
            </Document>
          </Col>
        </Row>
      </Container>
    );
  }
  return;
}

export default Resume;

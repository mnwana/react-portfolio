import React, {useState} from "react";
import { Document,Page } from "react-pdf";
import resumeFile from '../../assets/resume.pdf';
function Resume() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  return (
    <section>
    <Document file="somefile.pdf" onLoadSuccess={onDocumentLoadSuccess}>
      <Page pageNumber={pageNumber} />
    </Document>
    <p>
      Page {pageNumber} of {numPages}
    </p>
  </section>
  );
}

export default Resume;

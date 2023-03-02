import React from "react";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function About(props) {
  const { pageSelected } = props;
  if (pageSelected === "about") {
    return (
      <Container className="align-center mx-auto about mb-2">
        <h1 className="text-center">About</h1>
        <Row className="d-flex justify-content-center align-items-center h-100 aboutBox">
          <Col xs={11} md={4}>
            <Image
              alt="Marielle Nwana"
              src={require(`../../assets/images/self-photo.jpeg`).default}
              id="self-photo"
              rounded
              fluid
              className="aboutImg"
            />
          </Col>
          <Col xs={11} md={5} className="text-center mt-2 aboutText">
            <div className="">
            <p> I'm Marielle Nwana and I'm an NYC-based Data Analyst.</p>
            <p>
              I have a proven understanding of data analytics and engineering
              tools and am an advocate for data accessibility and data literacy.
              My experience includes leading projects within data teams from
              data ingestion to analysis, presenting data driven insights to
              leadership, and partnering across engineering, business and sales
              teams to transform raw data into data tools and dashboards for
              internal and external measurement. I thrive in high-growth startup
              environments where there is a healthy balance of collaboration and
              autonomy.
            </p>
            <p>
              When I'm not working, I enjoy trying out new recipes, playing with
              my cat Molly, and exporing all that the Big Apple has to offer.
            </p>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
  return;
}

export default About;

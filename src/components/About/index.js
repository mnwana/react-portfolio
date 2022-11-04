import React from "react";

function About(props) {
  const {pageSelected} = props;
  if(pageSelected === 'about'){
    return (
      <section className="col-md-7 align-center mx-auto">
        <h1 className="text-center">About</h1>
        <p className="text-center">
          Marielle Nwana is and an NYC-based data analyst.
          <br></br><br></br>
          She has a proven understanding of data analytics and engineering tools and
          passionate about data accessibility and data literacy. Experience
          includes leading projects within data teams, presenting data driven
          insights to leadership, and partnering across engineering, business and
          sales teams to transform raw data into data tools and dashboards for
          internal and external measurement. Marielle thrives in high-growth startup
          environments where there is a good balance of collboration, autonomy,
          and contiuous learning.
          <br></br><br></br>
          When she is not working, Marielle enjoys trying out new recipes, playing with her
          cat Molly, and exporing all that the Big Apple has to offer.
        </p>
      </section>
    );
  };
  return

}

export default About;

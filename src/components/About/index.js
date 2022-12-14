import React from "react";

function About(props) {
  const { pageSelected } = props;
  if (pageSelected === "about") {
    return (
      <section className="col-sm-10 col-md-8 align-center mx-auto">
        <h1 className="text-center">About</h1>
        <div className="row flex-row">
        <img
                  alt="Marielle Nwana"
                  src={
                    require(`../../assets/images/self-photo.jpeg`).default
                  }
                  id="self-photo"
                  className="img mnBorderPrimary border rounded center col-md-6 p-0"
                />
        {/* change about me to be a code style block */}
        <div className="text-center border w-s-100 mnBorderPrimary mnBGLight rounded p-2 col-md-6">
          <p> I'm Marielle Nwana and I'm an NYC-based Data Analyst.</p>
          <p>
            I have a proven understanding of data analytics and engineering
            tools and passion for data accessibility and data literacy. My
            experience includes leading projects within data teams, presenting
            data driven insights to leadership, and partnering across
            engineering, client and sales teams to transform raw data into data
            tools and dashboards for internal and external measurement. I thrive
            in high-growth startup environments where there is a good balance of
            collboration, autonomy, and contiuous learning.
          </p>
          <p>
            When I'm not working, I enjoy trying out new recipes, playing with
            my cat Molly, and exporing all that the Big Apple has to offer.
          </p>
        </div>
        </div>
      </section>
    );
  }
  return;
}

export default About;

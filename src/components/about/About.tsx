import React from 'react';
import PropTypes from 'prop-types';

function About() {
  return (
    <>
      <div className=" w-full h-10 flex justify-center ">
        <div className="w-8 h-1 bg-gray-200"></div>
      </div>
      <section className="ml-32">
        <h2>About</h2>
        <section>
          <p>
            I am an English and Spanish speaking software engineer based in
            Mexico. I love music and travelling - I am passionate about
            technology, specifically its positive social impact on people's
            lives across different countries and cultures.
          </p>

          <p>
            Having an online presence nowadays, is imperative for business
            growth. If you have an idea for a project, I can make that idea come
            to life. I am also open to new opportunities to add my skills and
            grow within a team.
          </p>
        </section>

        <section>
          <h3>Skills</h3>
        </section>
      </section>
    </>
  );
}

About.propTypes = {};

export default About;

import React from 'react';


const Home = () => {
    return (
        <section className="home" id="home">
        <div className="home-content">
          <div className="container">
            <h1>Tej Sohal - <span className="element" data-text1="Web Developer" data-text2="Creative" data-loop="true"
              data-backdelay="3000"></span></h1>
            <div className="social">
              <a  rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/tej-sohal"><i className="fab fa-linkedin" aria-hidden="true"></i> </a>
              <a href="mailto:tej.sohal@hotmail.co.uk" ><i className="far fa-envelope" aria-hidden="true"></i> </a>
              <a  rel="noopener noreferrer" target="_blank" href="https://github.com/tejpal-sohal"><i className="fab fa-github" aria-hidden="true"></i> </a>
              <a  rel="noopener noreferrer" target="_blank" href="#"><i className="fab fa-instagram" aria-hidden="true"></i> </a>
            </div>
            <a className="home-down bounce" href="#about"><i className="fa fa-angle-down"></i></a>
          </div>
        </div>
        <svg className="diagonal home-left" width="21%" height="170" viewBox="0 0 100 102" preserveAspectRatio="none">
          <path d="M0 100 L100 100 L0 10 Z"></path>
        </svg>
        <svg className="diagonal home-right" width="80%" height="170" viewBox="0 0 100 102" preserveAspectRatio="none">
          <path d="M0 100 L100 100 L100 10 Z"></path>
        </svg>
      </section>
    )
}

export default Home

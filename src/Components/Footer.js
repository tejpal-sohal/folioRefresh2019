import React from 'react';

const Footer = () => {
    const date = new Date();
    return (
        <React.Fragment>
            <section className="contact" id="contact">
                <div className="container">

                    <div className="section-title dleft top_120">
                        <h2 className="bottom_30">GET IN TOUCH</h2>
                    </div>
                    <div className="col-md-3 wow fadeInUp" data-wow-delay="0.3s">

                        <div className="social-icons row">
                            <a href="mailto:tej.sohal@hotmail.co.uk"><i className="far fa-envelope" aria-hidden="true"></i> </a>
                            <a  rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/tej-sohal"><i className="fab fa-linkedin" aria-hidden="true"></i> </a>
                            <a  rel="noopener noreferrer" target="_blank" href="https://www.instagram.com/pixel_54/" ><i className="fab fa-instagram" aria-hidden="true"></i> </a>
                        </div>
                    </div>

                </div>
            </section>

            <footer>
                <div className="container">
                    <div className="social">
                        <a href="mailto:tej.sohal@hotmail.co.uk">Email </a>
                        <a  rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/tej-sohal">Linkedin</a>
                        <a  rel="noopener noreferrer" target="_blank" href="https://www.instagram.com/pixel_54/">Instagram</a>
                    </div>
                    <p>Copyright © {date.getFullYear()}, All rights Reserved. <br />
                        Tej Sohal</p>
                </div>
            </footer>
        </React.Fragment>

    )
}

export default Footer;


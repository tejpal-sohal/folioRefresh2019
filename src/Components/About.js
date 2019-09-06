import React from 'react';


const SlideCard = ({ title, icon, text }) => {
    return (
        <div className="area col-md-12 item">
            <div className="icon">
                <i className={icon} aria-hidden="true"></i>
            </div>
            <div className="text">
                <h6>{title}</h6>
                <p>{text}</p>
            </div>
        </div>
    )
}

const About = () => {
    return (
        <section className="about dgray-bg" id="about">
            <div className="about type-1 padbot_120">
                <div className="container">
                    <div className="col-md-4 col-sm-12 about-image top_30 wow fadeInUp" data-wow-delay="0.4s">
                        <div className="row">
                            <div className="momo" alt=""> </div>
                        </div>
                    </div>

                    <div className="col-md-7 col-md-offset-1 col-sm-12 about-text wow fadeInUp" data-wow-delay="0.6s">
                        <div className="section-title dleft bottom_30">
                            <br />
                            <h2>ABOUT ME</h2>
                        </div>
                        <p>I’ve greatly enjoyed the constant change and evolution of the internet industry and mobile apps.
                            One of my strongest assets is a diversity of real world experience working on all kinds of
                            projects with all kinds of clients (public and private organisations). To stick around in this
                            industry you have to be a quick learner, and I am constantly updating my skill set with new
                            strategies and technologies
                  </p>
                    </div>
                    <div className="owl-carousel work-areas bottom_120 wow fadeInUp" data-pagination="false"
                        data-autoplay="3000" data-items-desktop="3" data-items-desktop-small="3" data-items-tablet="2"
                        data-items-tablet-small="1" data-wow-delay="0.4s">
                            <SlideCard icon={"fa fa-code"} title= {"Web Design"} text={"The latest design standards to deliver a beautiful and functional digital product."} />
                            <SlideCard icon={"fab fa-sass"} title= {"Css/Sass"} text={"Sass is the most mature, stable, and powerful professional grade CSS extension language in the world."} />
                            <SlideCard icon={"fab fa-js"} title= {"JavaScript"} text={"JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions."} />
                            <SlideCard icon={"fab fa-react"} title= {"React"} text={"React makes it painless to create interactive UIs. Design simple views for each state in your application."} />
                            <SlideCard icon={"fab fa-node-js"} title= {"Node.js"} text={"As an asynchronous event driven JavaScript runtime, Node.js is designed to build scalable network applications."} />
                            <SlideCard icon={"fab fa-github"} title= {"Github"} text={"GitHub is a development platform inspired by the way you work."} />
                            <SlideCard icon={"fab fa-aws"} title= {"AWS"} text={"Amazon Web Services offers reliable, scalable, and inexpensive cloud computing services."} />
                            <SlideCard icon={"fab fa-wordpress"} title= {"Wordpress"} text={"WordPress is a content management system based on PHP and MySQL."} />
                            <SlideCard icon={"fab fa-php"} title= {"PHP"} text={"Scripting language that is especially suited for web development and can be embedded into HTML."} />
                            <SlideCard icon={"fab fa-linux"} title= {"Linux"} text={"Unix-like operating systems based on the Linux kernel, an operating system"} />
                            <SlideCard icon={"fas fa-database"} title= {"SQL"} text={"SQL is a domain-specific language used in programming and designed for managing data"} />
                    </div>
                </div>
                <svg className="diagonal-gray" width="100%" height="170" viewBox="0 0 100 102" preserveAspectRatio="none">
                    <path d="M0 0 L70 100 L100 0 Z"></path>
                </svg>
            </div>
        </section>

    )
}

export default About; 
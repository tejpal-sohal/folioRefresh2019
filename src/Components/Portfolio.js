import React from 'react';

const Projects = [
    { title:"Netflix", type: "NYC Times Square Bill Board", tech: "Javascript", prevImage: "img/netflixThumb.jpg", mainImage: "img/netflixBig.jpg"},
    { title:"BT Digital Marketing Hub", type: "application", tech: "Angular 2", prevImage: "img/btThumb.jpg", mainImage: "img/btBig.jpg"},
    { title:"Audio Mango", type: "website", tech: "HTML \u2022 Javascript", prevImage: "img/audioMangoThumb.jpg", mainImage: "img/audioMangoBig.jpg"},
    { title:"Love Denim", type: "website", tech: "Hybris \u2022 Javascript", prevImage: "img/newlookDenimwa.jpg", mainImage: "img/lovedenimbig.jpg"},
    { title:"Denim Fit Guide", type: "website", tech: "Hybris \u2022 Javascript", prevImage: "img/dfg.jpg", mainImage: "img/dfg.jpg"},
    { title:"London Fashion \n Week", type: "WebApp", tech: "Hybris \u2022 Javascript", prevImage: "img/LondonFashion.jpg", mainImage: "img/LondonFashion.jpg"},
    { title:"In Store \n App", type: "Store Wifi", tech: "PHP \u2022 CSS \u2022 Javascript", prevImage: "img/storewifiBig.jpg", mainImage: "img/storewifiBig.jpg"},
    { title:"Mail Subscriptions", type: "website", tech: "PHP \u2022 CSS \u2022 Javascript", prevImage: "img/mailSub.jpg", mainImage: "img/mailSub.jpg"},
    { title:"My Mail", type: "website", tech: "PHP \u2022 CSS \u2022 Javascript", prevImage: "img/mymail.jpg", mainImage: "img/mymail.jpg"},
    { title:"dmg::media", type: "website", tech: "Angular \u2022  HTML5", prevImage: "img/dmgmediac.jpg", mainImage: "img/dmgmediac.jpg"},
    { title:"Mail Finance", type: "website", tech: "Angular \u2022  HTML5", prevImage: "img/mailFi.jpg", mainImage: "img/mailFi.jpg"},
    { title:"Daily Mail Plus", type: "website", tech: "PHP \u2022   CSS \u2022   Javascript", prevImage: "img/dailymailplusPrev.jpg", mainImage: "img/dailymailplusPrev.jpg"},
    { title:"Coffee Break", type: "application", tech: "Angular", prevImage: "img/coffeebreak.jpg", mainImage: "img/coffeebreak.jpg"},
    { title:"Oscars 2014", type: "application", tech: "WordPress", prevImage: "img/oscars.jpg", mainImage: "img/oscars.jpg"},
    { title:"BBC News", type: "website", tech: "HTML5 \u2022 CSS \u2022  Javascript", prevImage: "img/bbc.jpg", mainImage: "img/bbc.jpg"},
    { title:"Centrica", type: "website", tech: "HTML5 \u2022 CSS \u2022  Javascript", prevImage: "img/centrica.jpg", mainImage: "img/centrica.jpg"},
    { title:"De Montfort Univeristy", type: "project", tech: "HTML5 \u2022 CSS \u2022  Javascript", prevImage: "img/coffeebreak.jpg", mainImage: "img/coffeebreak.jpg"},
    { title:"MC.Escher C++", type: "project", tech: "Povray", prevImage: "img/povray.jpg", mainImage: "img/povray.jpg"},
    { title:"Animation", type: "project", tech: "Maya 3D", prevImage: "img/bender.jpg", mainImage: "//www.youtube.com/watch?v=tCX_OH7kzH8"},
    { title:"Rendering  Maya 3D", type: "Maya 3D", tech: "Angular", prevImage: "img/bottle.jpg", mainImage: "img/bottle.jpg"},

]


const ProjectItem = ({mainImage,prevImage,type,title,tech}) => {
    return (
        <a href={mainImage} className={`single_item ${type} website link col-md-4 col-sm-6 wow fadeInUp" data-wow-delay="0.1s"`}>
        <figure>
            <img src={prevImage} alt="project" />
            <figcaption>
                <div className="outter">
                    <div className="inner">
                        <span>{type}</span>
                        <h3 className="title">{title}</h3>
                        <span><b>{tech}</b></span>
                    </div>
                </div>
            </figcaption>
        </figure>
    </a>
    )
}


const Protfolio = () => {
    return (
        <section className="portfolio" id="portfolio">
            <div className="container">
                <div className="section-title dleft top_120 bottom_90">
                    <h2>PORTFOLIO</h2>
                    <div className="portfolio_filter">
                        <ul>
                            <li className="select-cat" data-filter="*">All</li>
                            <li data-filter=".website">Website</li>
                            <li data-filter=".application">Applications</li>
                            <li data-filter=".project">Projects</li>
                        </ul>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12 col-sm-12 col-xs-12">
                        <div className="isotope_items row">
                            {
                                Projects.map((Project,key)=>{
                                    return (
                                        <ProjectItem key={key}
                                        mainImage={Project.mainImage}
                                        prevImage={Project.prevImage} 
                                        type={`${Project.type}`}
                                        title={`${Project.title}`}
                                        tech={`${Project.tech}`}
                                        />
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
            <svg className="diagonal-white" width="100%" height="170" viewBox="0 0 100 102" preserveAspectRatio="none">
                <path d="M0 0 L30 100 L100 0 Z"></path>
            </svg>
        </section>
    )

}

export default Protfolio;

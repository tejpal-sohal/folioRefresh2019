import React from 'react';

const NavItemList = ({href, title}) => {
    return(
        <li><a href={href} className="smoothScroll">{title}</a></li>
    )
}

const Navigation = () => {
    return (
        <nav>
        <div className="row">
          <div className="container">
            <div className="logo">
              <i className="fab fa-dev text"></i><span> | Tej Sohal</span>
            </div>
            <div className="responsive"><i data-icon="m" className="fas fa-hamburger"></i></div>
            <ul className="nav-menu">
              <NavItemList href="#home" title="Home" />
              <NavItemList href="#about" title="About" />
              <NavItemList href="#portfolio" title="Portfolio" />
              <NavItemList href="#contact" title="Contact" />
            </ul>
          </div>
        </div>
      </nav>
    )
}

export default Navigation; 
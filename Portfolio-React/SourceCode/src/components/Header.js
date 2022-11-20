import React from "react";
import { Outlet, Link } from "react-router-dom";

function Header(props) {
  return (
    // <!-- Header Start -->

    <header id='PStart'  className={props.mode}>
      {/* <!-- This is my navigation bar mead it from scratchs --> */}
      <div className="my_nav">
        <div id="home_icon">
        <Link to="/"><img className="nav_img_home" src="./icons_home.png" alt="" /></Link>
            
          
        </div>
        <div id="nav_nameSection">
          <h6>AlQassem Oweida</h6>
        </div>
        <div id="navArch1"></div>

        <div id="nav_contant">
          <ul className="contant_list">
            <li>
              <a href="#contact_Box">
                <h6>About Me</h6>
              </a>
            </li>
            <li>
            <a href="#contact_Box">    <h6>Qualification</h6>
              </a>
              {/* <Link to="/#Qualifications"><h6>Qualification</h6></Link> */}
             
              
            </li>
            <li>
            <Link to="/Project"><h6>Projects</h6></Link>
                
          
            </li>
            <li>
       
               <Link to="/contact"><h6>Contact Me</h6></Link>
           
           
            </li>
          </ul>
        </div>

        <div id="navArch2"></div>
        <div id="nav_social">
          <a
            href="https://web.facebook.com/alqassem.oweida?_rdc=1&_rdr"
            target="_blank" rel="noreferrer"
          >
            <img className="nav_imgs" src="./icons_facebook.svg" alt="" />
          </a>
          <a
            href="https://www.instagram.com/qasem_oweida/?fbclid=IwAR30eEO_vGwc5Z__DYIvwWv_lC3gOOUJXhu8faKzSHFeG6E9IpU8nlYpk2o"
            target="_blank" rel="noreferrer"
          >
            <img className="nav_imgs" src="./icons_instagram.svg" alt="" />
          </a>
          <a
            href="https://www.linkedin.com/in/alqassem-oweida?fbclid=IwAR2kLnjikBwsd1uLjYhvK1w6xdb9rVLYGLCqZLlK95hahBYfg6yAl27MJK0&original_referer=https%3A%2F%2Fl.facebook.com%2F"
            target="_blank" rel="noreferrer"
          >
            <img className="nav_imgs" src="./icons_linkedin.svg" alt="" />
          </a>
          <a href="https://twitter.com/?lang=en" target="_blank" rel="noreferrer">
            <img className="nav_imgs" src="./icons_twitter.svg" alt="" />
          </a>
        </div>
      </div>

      {/* <!-- End of the navigation bar --> */}
    </header>
  );
}

export default Header;

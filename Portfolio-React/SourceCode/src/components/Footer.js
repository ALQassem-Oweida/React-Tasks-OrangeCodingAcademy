import React from 'react'
import { Outlet, Link } from "react-router-dom";

function Footer(props) {
  return (

    <footer className={props.mode}>

        <p style={{color:props.color}}>© 2022 AlQassem Oweida</p>
        <ul>
            <li> <Link to="/#contact_Box"><h6>Projects</h6></Link></li>
            <li> <Link to="/Project"><h6>Projects</h6></Link></li>
            <li><Link to="/contact"><h6>Contact Me</h6></Link></li>
        </ul>
    </footer>
  )
}

export default Footer
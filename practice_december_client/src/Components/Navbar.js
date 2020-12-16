import React from 'react'
import { Link } from "react-scroll";
import '../App.css'

const Navbar = () => {
    return (
      <div className='navbar'>
        <Link
    activeClass="active"
    to="home"
    spy={true}
    smooth={true}
    offset={-70}
    duration={500}
        >home</Link>
        <br/>
        <Link
    activeClass="active"
    to="bodyslist"
    spy={true}
    smooth={true}
    offset={-70}
    duration={500}
        >bodyslist</Link>
        <br/>
        <Link
    activeClass="active"
    to="about"
    spy={true}
    smooth={true}
    offset={-70}
    duration={500}
        >about</Link>
      </div>
    )
}

export default Navbar

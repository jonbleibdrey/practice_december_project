import React from 'react'
import { Link } from "react-scroll";
import '../App.css'


const Navbar = () => {
    return (
      <div className='navbar' >
        
        <Link
    activeClass="active"
    to="home"
    spy={true}
    smooth={true}
    offset={-70}
    duration={1000}
        ><h1>Home</h1></Link>
        <br/>
        <Link
    activeClass="active"
    to="bodyslist"
    spy={true}
    smooth={true}
    offset={-70}
    duration={1000}
        ><h1>Body List</h1></Link>
        <br/>
        <Link
    activeClass="active"
    to="bodysform"
    spy={true}
    smooth={true}
    offset={-70}
    duration={1000}
        ><h1>Body Form</h1></Link>
        <br/>
        <Link
    activeClass="active"
    to="about"
    spy={true}
    smooth={true}
    offset={-70}
    duration={1000}
        ><h1>About</h1></Link>
       
      </div>
    )
}

export default Navbar

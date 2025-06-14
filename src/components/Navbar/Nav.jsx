import { useState } from 'react';
import logo from '../../assets/portfolio-logo.png';
import underline from "../../assets/underline.webp"
import "./Nav.css"

const Nav = () => {
  const [menu, setMenu] = useState("home");
  return (
    <>
      <div className='navbar'>
        <img src={logo} alt="logo" height={120} width={180} />
        <ul className='nav-menu'>
          <li>Home</li>
          <li>About me</li>
          <li>Services</li>
          <li>Portfolio</li>
          <li>Contact</li>
        </ul>
        <div className='nav-contact'>Connect With Me</div>
      </div>
    </>
  )
}

export default Nav
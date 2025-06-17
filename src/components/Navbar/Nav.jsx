import { useState, useRef } from 'react';
import logo from '../../assets/portfolio-logo.png';
import "./Nav.css"
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { IoMenu } from "react-icons/io5";
import { IoIosCloseCircleOutline } from "react-icons/io";

const Nav = () => {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  }

  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  }


  return (
    <>
      <div className='navbar'>
        <img src={logo} alt="logo" height={120} width={180} />
        <div><IoMenu className='nav-menu-open' onClick={openMenu} /></div>
        <ul className='nav-menu' ref={menuRef}>
          <div><IoIosCloseCircleOutline className='nav-menu-close' onClick={closeMenu} /></div>
          <li className={menu === "home" ? "active" : ""}><AnchorLink className='anchor-link' href='#home'><p onClick={() => setMenu("home")}>Home</p></AnchorLink></li>
          <li className={menu === "about" ? "active" : ""}><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={() => setMenu("about")}>About me</p></AnchorLink></li>
          <li className={menu === "services" ? "active" : ""}><AnchorLink className='anchor-link' offset={50} href='#services'><p onClick={() => setMenu("services")}>Services</p></AnchorLink></li>
          <li className={menu === "portfolio" ? "active" : ""}><AnchorLink className='anchor-link' offset={50} href='#work'><p onClick={() => setMenu("portfolio")}>Portfolio</p></AnchorLink></li>
          <li className={menu === "contact" ? "active" : ""}><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={() => setMenu("contact")}>Contact</p></AnchorLink></li>
        </ul>
        <div className='nav-contact'><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
      </div>
    </>
  )
}

export default Nav
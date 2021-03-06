import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.png';
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="sp__navbar">
      <div className="sp__navbar-links">
        <div className="sp__navbar-links_logo">
          <img src={logo} />
        </div>
        {/* <div className="sp__navbar-links_container">
          <p><a href="#home">Home</a></p>
          <p><a href="#wgpt3">Sandpark</a></p>
          <p><a href="#features">Calender</a></p>
          <p><a href="#blog">Blog</a></p>
        </div> */}
      </div>
      <div className="sp__navbar-sign">
        {/* <p>Sign in</p> */}
        <button type="button">Get into SandPark-></button>
      </div>
      <div className="sp__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="sp__navbar-menu_container scale-up-center">
          {/* <div className="sp__navbar-menu_container-links">
            <p><a href="#home">Home</a></p>
            <p><a href="#wgpt3">Sandpark</a></p>
            <p><a href="#features">Calender</a></p>
            <p><a href="#blog">Blog</a></p>
          </div> */}
          <div className="sp__navbar-menu_container-links-sign">
            {/* <p>Sign in</p> */}
            <button type="button">Get into SandPark -></button>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
import React from 'react';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import './header.css';

const Header = () => (
  <div className="sp__header section__padding" id="home">
    <div className="sp__header-content">
      <h1 className="gradient__text">Organized Learning</h1>
      <p>Organized Learning</p>

      <div className="sp__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div>
      
    </div>

    <div className="sp__header-image">
      <img src={ai} />
    </div>
  </div>
);

export default Header;

import React from 'react';
import HeaderItem from './HeaderItem';
import './Header.css';


const Header = (props) => {
  return (
    <div className="header-container">
      <header className="wrapper clearfix"><a href="./">
        <h1 className="title">Maurice Melchers</h1></a>
        <nav>
          <ul>
            <li><a href="mailto:contact@mauricemelchers.nl" target="_blank"><i className="fa fa-envelope"></i>Contact</a></li>
            <HeaderItem link="/resume" title="Resume" icon="fa-th-list"/>
            <HeaderItem link="/work" title="Work" icon="fa-briefcase"/>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
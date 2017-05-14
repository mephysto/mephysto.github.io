import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import HeaderItem from './HeaderItem';
import './Header.css';

class Header extends Component {

  // const Header = (props) => {
  render() {
    return (
      <div className="header-container">
        <header className="wrapper">
          <Link to="./" title="Maurice Melchers">
            <h1 className="title">
              <span>Maurice Melchers</span>
            </h1>
          </Link>
          <nav>
            <ul>
              <HeaderItem link="/work" title="Work" icon="fa-briefcase" />
              <HeaderItem link="/resume" title="Resume" icon="fa-th-list" />
              <li>
                <a href="mailto:contact@mauricemelchers.nl" target="_blank">
                  <i className="fa fa-envelope"></i>
                  <span>Contact</span>
                </a>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    );
  }
}

export default Header;
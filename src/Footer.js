import React from 'react';
import FooterSocialItem from './FooterSocialItem';

const Footer = () => {
  return (
    <div className="footer-container">
      <footer className="wrapper">
        <p>©	Maurice Melchers, 2017. </p>
        <p>
          <FooterSocialItem link="https://www.linkedin.com/in/mauricemelchers" title="LinkedIn" icon="fa-linkedin-square"/>
          <FooterSocialItem link="https://github.com/mephysto" title="Github" icon="fa-github-square"/>
          <FooterSocialItem link="https://twitter.com/mephysto" title="Twitter" icon="fa-twitter-square"/>
          <FooterSocialItem link="http://codepen.io/mephysto/" title="Codepen" icon="fa-codepen"/>
        </p>
      </footer>
    </div>
  );
}

export default Footer;
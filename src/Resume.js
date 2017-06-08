import React, { Component } from 'react';
import ResumeList from './ResumeList';

import './styles/resume.css';

import sitedata from './sitedata.json';

import profileImage from './img/maurice-melchers-profile.jpg'; // relative path to image 
import backgroundImage from './img/retro-bg.jpg';

class Resume extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <div className="main-container">
        <div className="hero" style={{ backgroundImage: 'url(' + backgroundImage + ')' }}>
          <h2 data-text="Resume">
            Resume
            <span data-text="Resume">Resume</span>
            <span data-text="Resume">Resume</span>
          </h2>
        </div>
        <div className="content-resume wrapper">
          <div className="resumain">
            <section className="intro clearfix">
              <h1><span className="fa fa-th-list"></span> Resume</h1>
              <ul className="resume-overview">
                <li><i className="fa fa-check"></i> Front-end web designer with over 8 years of professional experience.</li>
                <li><i className="fa fa-check"></i> Web Design, UI/UX design, Web Motion Grapher.</li>
                <li><i className="fa fa-check"></i> React, Angular, Node.js developer.</li>
              </ul>
              <div className="resume-picture" style={{ backgroundImage: 'url(' + profileImage + ')' }}>
                <img className="hidden" src={profileImage} alt="Profile of Maurice Melchers" />
              </div>
            </section>
            <section className="resume-skills">
              <h2>Technical Expertise</h2>
              <ul>
                <li><i className="fa fa-key"></i> Design ‐ <em>Design for web, Wireframing, Rapid Prototyping, UI/UX Design, animation for web.</em></li>
                <li><i className="fa fa-key"></i> Front-End ‐ <em>Front-end:	HTML5, CSS, JavaScript, SEO, Accessibility, Responsive, Cross-browser.</em></li>
                <li><i className="fa fa-key"></i> Dev Ops ‐ <em>Amazon AWS, LESS, SCSS, Node.js, Grunt, Gulp, Git, Angular, React, Google Maps, Facebook / Twitter Data.</em></li>
                <li><i className="fa fa-key"></i> Software ‐ <em>Sketch, Photoshop, Illustrator, After Effects, Axure, Silverstripe, Wordpress.</em></li>
                <li><i className="fa fa-key"></i> Other skills ‐ <em>Version Control. Proficient on both Mac and PC.</em></li>
              </ul>
            </section>
            <ResumeList items={sitedata.resume.companies} />

            <section className="references">
              <h2>References</h2>
              <ul>
                <li><p>References available on <a href="mailto:contact@mauricemelchers.nl" target="_blank">request</a>.</p></li>
              </ul>
            </section>
            <section className="onlineprofiles">
              <h2>Online Profiles</h2>
              <p>
                <a href="https://www.linkedin.com/in/mauricemelchers" target="_blank" title="view my Linkedin profile"><i className="fa fa-linkedin-square"></i>Linkedin</a>
                <a href="https://github.com/mephysto" target="_blank" title="view my Github profile"><i className="fa fa-github-square"></i>Github</a>
                <a href="https://twitter.com/mephysto" target="_blank" title="view my Twitter profile"><i className="fa fa-twitter-square"></i>Twitter</a>
                <a href="http://codepen.io/mephysto/" target="_blank" title="view my Codepen repository"><i className="fa fa-codepen"></i>Codepen</a>
              </p>
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default Resume;

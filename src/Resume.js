import React from 'react';
import ResumeList from './ResumeList';
// import './Resume.css';
import sitedata from './sitedata.json';


const Resume = (props) => {
  return (
    <div className="main-container">
      <div className="content-resume wrapper">
        <div className="resumain">
          <p className="name"><a href="./">Maurice Melchers</a></p>
          <p className="title">Front-end Web Developer</p>
          <section className="intro clearfix">
            <h1><span className="fa fa-th-list"></span> Resume</h1>
            <div className="resume-picture" style={{backgroundImage: 'url(img/build/maurice-melchers-profile.jpg)'}}>
              <img className="hidden" src="img/build/maurice-melchers-profile.jpg" alt="Profile of Maurice Melchers" />\
            </div>
            <ul className="resume-overview">
              <li><i className="fa fa-check"></i> Front-end web developer with over 8 years of professional experience.</li>
              <li><i className="fa fa-check"></i> Primary focus on front-end web site development.</li>
              <li><i className="fa fa-check"></i> Experience in Interaction Design, UX, and Motion Graphics.</li>
            </ul>
          </section>
          <section className="resume-skills">
            <h2>Technical Expertise</h2>
            <ul>
              <li><i className="fa fa-key"></i> Design ‐ <em>Wireframing, Rapid Prototyping, Interaction Design, UX Design, Motion Design.</em></li>
              <li><i className="fa fa-key"></i> Front-End ‐ <em>Front-end:	HTML5, CSS3, SCSS/LESS, JavaScript, SEO, Accessibility, Responsive, Cross-browser compatibility, PHP.</em></li>
              <li><i className="fa fa-key"></i> Frameworks/API's ‐ <em>LESS, SCSS, Node.js, Grunt, jQuery, Angular, Backbone, Bootstrap, Google Maps, Facebook / Twitter.</em></li>
              <li><i className="fa fa-key"></i> Software ‐ <em>Photoshop, Illustrator, After Effects, Flash, Axure, Word, Excel, <abbr title="Subversion">SVN</abbr>, Github, Silverstripe, Wordpress.</em></li>
              <li><i className="fa fa-key"></i> Other skills ‐ <em>Version Control (<abbr title="Subversion">SVN</abbr> and GIT). Can work on either Mac or PC.</em></li>
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

export default Resume;

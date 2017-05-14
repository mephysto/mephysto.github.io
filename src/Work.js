import React from 'react';
import WorkList from './WorkList';
import sitedata from './sitedata.json';
import './styles/work.css';

const Work = (props) => {
  return (
    <div className="main-container">
      <div className="hero">
          <h2 data-text="Work">
            Work
            <span data-text="Work">Work</span>
            <span data-text="Work">Work</span>
          </h2>
      </div>
      <div className="content-work wrapper">
        <div className="workmain">
          <section className="intro">
            <h1><i className="fa fa-briefcase"></i>Work</h1>
            <p>My specialty is Front-End web development. I enjoy developing aesthetic and functional websites, in line with approved designs. I also enjoy building prototypes for new concepts as an interactive designer, and work towards achieving optimal responsive design, accessibility, usability, and performance for all of my projects.</p>
            <p>Though I am most prolific on the technical side of a project, I have also participated in ideation with the creative department. Personally I believe that a front end developer has a more holistic role in web projects. Much like how a Creative Director ensures an idea doesn't deviate from its original conception to deployment. So should I be guiding the creatives what works and what doesn't.</p>
            <p>Here is a small selection some of my work.</p>
          </section>

          <WorkList items={sitedata.work.clients} />

          <section className="moreprojects">
            <h2>Various other work...</h2>
            <p>
              <a href="https://www.behance.net/gallery/11831357/ECU-Hits" target="_blank">ECU Hits (2013)</a>, <a href="http://www.ecucoursefinder.com.au/" target="_blank">ECU Coursefinder (2013)</a>, <a href="http://meetthemachines.ecu.edu.au/" target="_blank">ECU Meet the machines (2013)</a>, <a href="http://thebond.org.au" target="_blank">Lotterywest The Bond (2014)</a>, <a href="http://www.longtail.com.au/" target="_blank">Longtail (2013)</a>, <a href="http://kirkcaldies.co.nz/" target="_blank">Kirkcaldie &amp; Stains (2013)</a>, <a href="http://www.artandobject.co.nz/" target="_blank">Art + Object (2013)</a>, <a href="https://www.worldvision.org.nz/" target="_blank">World Vision New Zealand (2013)</a>, <a href="http://www.burgerking.co.nz/" target="_blank">Burger King New Zealand (2013)</a>. Mars Messages (2012), Tefal (2012), La Vache Qui Rit (2012), Danio (2012), Boursin (2012).
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Work;

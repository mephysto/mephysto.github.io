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
            <p>My code is fast, responsive, and compliant. It adheres to web standards and is accessible. I’ve worked in Silverstripe, Squarespace, Wordpress, and some random bespoke ones. I’ve worked in React, Angular, and Bootstrap. I know how to Webpack, until they update the heckin’ thing again. I’m fluent in the arts of web animation, Canvas, TweenMax. Oh, and sometimes I do a Hackathon for the NASA.</p>
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

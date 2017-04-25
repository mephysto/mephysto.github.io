import React from 'react';
import WorkList from './WorkList';
import sitedata from './sitedata.json';

const Work = (props) => {
  return (
    <div className="content-work wrapper clearfix">
      <div className="workmain">
        <p className="name">Maurice Melchers</p>
        <p className="title">Front-end Web Developer</p>
        <section className="intro">
          <h1><i className="fa fa-briefcase"></i>Work</h1>
          <p>My specialty is Front-End web development. I enjoy developing aesthetic and functional websites, in line with approved designs. I also enjoy building prototypes for new concepts as an interactive designer, and work towards achieving optimal responsive design, accessibility, usability, and performance for all of my projects.</p>
          <p>I'm not always a Lone Ranger, though! When working with agencies, I like to actively participate in creative ideation and concepting for large scale digital projects.</p>
          <p>Here is a selection of recently completed work.</p>
        </section>

        <WorkList items={sitedata.work.clients} />

        <section className="moreprojects">
          <h2>Various other work...</h2>
          <p>
            <a href="http://www.ecucoursefinder.com.au/" target="_blank">ECU Coursefinder</a>, <a href="http://meetthemachines.ecu.edu.au/" target="_blank">ECU Meet the machines</a>, <a href="http://thebond.org.au" target="_blank">Lotterywest The Bond</a>, <a href="http://www.longtail.com.au/" target="_blank">Longtail</a>, <a href="http://kirkcaldies.co.nz/" target="_blank">Kirkcaldie &amp; Stains</a>, <a href="http://www.artandobject.co.nz/" target="_blank">Art + Object</a>, <a href="https://www.worldvision.org.nz/" target="_blank">World Vision New Zealand</a>, <a href="http://www.burgerking.co.nz/" target="_blank">Burger King New Zealand</a>.
          </p>
        </section>
      </div>
    </div>

  );
}

export default Work;

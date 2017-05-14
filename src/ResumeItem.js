import React, { Component } from 'react';

class ResumeItem extends Component {
  // init function
  constructor(props) {
    // call Component, pass props
    super(props);
    // set state
    this.state = {
      companyname: props.companyData.title,
      description: props.companyData.description,
      url: props.companyData.link,
      date: props.companyData.date,
      location: props.companyData.location,
      geolocation: props.companyData.geo
    };
  }
  render() {
    return (
      <li className="client">
        <div className="client-data">
          <h3 className="client-name">
            <i className="fa fa-briefcase"></i><a href={this.state.url} target="_blank">{this.state.companyname}</a>
          </h3>
          <p className="client-description">
            <i className="fa fa-wrench"></i>
            <span>{this.state.description}</span>
          </p>
          <p className="client-location"><i className="fa fa-map-marker"></i><span>{this.state.location}</span></p>
          <p className="client-date"><i className="fa fa-calendar"></i><em>{this.state.date}</em></p>
        </div>
        <div className="location">
          <img src={"http://maps.googleapis.com/maps/api/staticmap?center=" + this.state.geolocation.x + "," + this.state.geolocation.y + "&markers=" + this.state.geolocation.x + "," + this.state.geolocation.y + "&zoom=2&size=180x100&sensor=false"} alt="map" />
          <img src={"http://maps.googleapis.com/maps/api/staticmap?center=" + this.state.geolocation.x + "," + this.state.geolocation.y + "&markers=" + this.state.geolocation.x + "," + this.state.geolocation.y + "&zoom=10&size=180x100&sensor=false"} alt="map" />
        </div>
      </li>
    );
  }
}

export default ResumeItem;
import React, { Component } from 'react';

class WorkItem extends Component {
  // init function
  constructor(props) {
    // call Component, pass props
    super(props);
    // set state
    this.state = {
      companyname: props.clientData.title,
      shortdescription: props.clientData.shortdescription,
      longdescription: props.clientData.longdescription,
      url: props.clientData.externalLink,
      urlTitle: props.clientData.externalLinkName,
      image: props.clientData.image
    };
  }
  render() {
    return (
      <section className="clearfix">
        <div className="text">
          <h2>{this.state.companyname}</h2>
          <p>{this.state.shortdescription}</p>
          <div className="work-more-info">
            <span>more info</span>
            <p>{this.state.longdescription}</p>
          </div>
          <a href={this.state.externalLink} target="_blank">{this.state.externalLinkName}<i className="fa fa-external-link"></i></a>
        </div>
        <a href={this.state.externalLink} target="_blank" className="image clearfix" style={{ backgroundImage: 'url(' + this.state.image + ')' }}>
          <img src={this.state.image} alt="Client logo" />
        </a>
      </section>
    );
  }
}

export default WorkItem;
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
    this.imageURL = props.clientData.image;    
  }
  render() {
    return (
      <section>
        <div className="text">
          <h2><a href={this.state.url} target="_blank">{this.state.companyname}</a></h2>
          <p>{this.state.shortdescription}</p>
        </div>
        <a href={this.state.url} target="_blank" className="image" style={{ backgroundImage: 'url(' + this.imageURL + ')' }}>
          <img alt="Client logo" src={this.imageURL}>
          </img>
        </a>
      </section>
    );
  }
}

export default WorkItem;
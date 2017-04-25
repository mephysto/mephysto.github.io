import React, { Component } from 'react';
import WorkItem from './WorkItem';

class WorkList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      clients: props.items
    }
  }
  renderWork() {
    return this.state.clients.map((client, index) => (
      <WorkItem clientData={client} key={index}/>
    ))
  }
  render() {
    return (
      <div>
        {this.renderWork()}
      </div>
    )
  }
}

export default WorkList;
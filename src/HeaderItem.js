import React, {Component} from 'react';

class HeaderItem extends Component {
  // init function
  constructor(props) {
    // call Component, pass props
    super(props);
    // set state
    this.state = {title: 'Title'}
  }
  render() {
    return (
      <li><a href={this.props.link}><i className={"fa " + this.props.icon}></i>{this.props.title}</a></li>
    );
  }
}

export default HeaderItem;
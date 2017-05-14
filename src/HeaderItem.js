import React, {Component} from 'react';
import { Link } from 'react-router-dom';

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
      <li>
        <Link to={this.props.link} title={this.props.title}>
          <i className={"fa " + this.props.icon}></i>
          <span>{this.props.title}</span>
        </Link>
      </li>
    );
  }
}

export default HeaderItem;
import React, {Component} from 'react';

class FooterSocialItem extends Component {
  constructor(props) {
    super(props);
    this.state = {title: 'Title'}
  }
  render() {
    return (
      <a className="footer__social" href={this.props.link} target="_blank" title={"view my" + this.props.title + "profile"}>
        <i className={"fa " + this.props.icon}></i><span>my {this.props.social} profile</span>
      </a>
    );
  }
}

export default FooterSocialItem;
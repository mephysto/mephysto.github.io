import React, {Component} from 'react';
import './HelloWorld.css';


class HelloWorld extends Component {
  // init function
  constructor(props) {
    // call Component, pass props
    super(props);
    // set state
    this.state = {
      pageview: 'RESUME',
      title: `G'day`
    };
    // bind functions to the class
    this.frenchify = this.frenchify.bind(this);
  }
  frenchify() {
    this.setState({title: 'Bonjour'});
  }
  render() {
    return (
      <div className="HelloWorld">
        {this.state.title} {this.props.name}
        <br/>
        <button onClick={this.frenchify}>frenchify</button>
      </div>
    )
  }
}

export default HelloWorld;
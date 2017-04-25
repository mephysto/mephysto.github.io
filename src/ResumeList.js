import React, { Component } from 'react';
import ResumeItem from './ResumeItem';
class ResumeList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      companies: props.items
    }
  }
  renderResume() {
    return this.state.companies.map((company, index) => (
      <ResumeItem companyData={company} key={index}/>
    ))
  }
  render() {
    return (
      <section className="agencies">
        <h2>Professional Experience</h2>
        <ul>
          {this.renderResume()}
        </ul>
      </section>
    )
  }
}

export default ResumeList;
/* eslint-disable react/prop-types */
import React from 'react';
import './education.css';

class Education extends React.Component {
  render() {
    return (
      <div className="education">
        <div className="title">
          <h2>{this.props.year}</h2>
        </div>
        <div className="education_content">
          <h2>{this.props.title}</h2>
          <p>{this.props.content}</p>
        </div>
      </div>
    );
  }
}

export default Education;

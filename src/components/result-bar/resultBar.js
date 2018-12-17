import React, { Component } from 'react';
import './result-bar.less';

export default class ResultBar extends Component {
  render () {
    return (
      <div className="result-bar-container">
        <div className="inner-container">
        <span className="result-count">3 movies found</span>
          <span className="filters">Rating</span>
          <span className="filters">Release Date</span>
          <span className="filters">Sort by</span>
        </div>
      </div>
    )
  }
}

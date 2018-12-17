import React, { Component } from 'react';
import './search-form.less';

export default class SearchForm extends Component {
  constructor () {
    super();
    this.state = {
      searchQuery: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState(
      {
        searchQuery: event.target.value
      }
    );
  }

  handleSubmit(event) {
    console.log('The title of the movie is: ' + this.state.searchQuery);
    event.preventDefault();
  }

  render () {
    return (
      <div className="search-form-container">
        <div className="inner-container">
          <form onSubmit={this.handleSubmit}>
            <label>Find your movie:</label>
            <input type ="text" onChange={this.handleChange} placeholder="Type anythig here" />
            <div className="form-buttons">
              <span>Search by </span>
              <button className="is-active btn">Title</button>
              <button class="btn">Genre</button>
              <input type="submit" value="Search" className="form-submit is-active btn"/>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

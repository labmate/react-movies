import React, { Component } from 'react';

export default class Search extends Component {
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
      <form onSubmit={this.handleSubmit}>
        <label>Search:</label>
        <input type ="text" onChange={this.handleChange}/>
        <input type="submit" value="Search"/>
      </form>
    );
  }
}

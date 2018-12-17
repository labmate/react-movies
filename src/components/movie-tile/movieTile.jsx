import React, { Component } from 'react';
import './movie-tile.less';

export default class MovieTile extends Component  {
  render () {
    const movie = this.props.details;
    return (
      <div className="movie-tile">
        <div className="movie-image">
          <img src={movie.img} />
        </div>
        <div className="movie-details">
          <span>{movie.year}</span>
          <div className="movie-title">{movie.title}</div>
          <div className="movie-description">{movie.description}</div>
        </div>
      </div>
    );
  }
}

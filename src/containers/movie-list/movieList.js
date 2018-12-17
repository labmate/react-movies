import React, { Component } from 'react';
import MovieTile from '../../components/movie-tile/movieTile.jsx';
import './movie-list.less';

class MovieList extends Component {
  render () {
    const movies = [{
      title: 'Kill Bill',
      year: '2003',
      img: 'https://images-na.ssl-images-amazon.com/images/I/41BVR9VEY2L.jpg',
      description: 'Example description'
    }, {
      title: 'Kill Bill',
      year: '2003',
      img: 'https://images-na.ssl-images-amazon.com/images/I/41BVR9VEY2L.jpg',
      description: 'Example description'
    },
    {
      title: 'Kill Bill',
      year: '2003',
      img: 'https://images-na.ssl-images-amazon.com/images/I/41BVR9VEY2L.jpg',
      description: 'Example description'
    }];

    const movieElements = movies.map(movie => <MovieTile details={ movie }/>);

    return (
      <div className="movie-list-container">
      {movieElements}
      </div>
    )
  }
}

export default MovieList;

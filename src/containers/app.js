import React, { Component } from 'react';
import SearchForm from '../components/search-form/searchForm';
import MovieList from './movie-list/movieList';
import Footer from '../components/footer/footer';
import ResultBar from '../components/result-bar/ResultBar';

class App extends Component {
  render() {
    return (
      <div>
        <SearchForm/>
        <ResultBar/>
        <MovieList/>
        <Footer />
      </div>
    );
  }
}

export default App;

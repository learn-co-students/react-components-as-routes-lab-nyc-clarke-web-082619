import React from 'react';
import { movies } from '../data';

const Movies = () => {
  function renderMovies(){
    return movies.map(movie => {
      return (<div className='movie'>
        <h3>Name: {movie.title}</h3>
        <p>Time: {movie.time}</p>
        Genres:{renderMovieGenres(movie)}
      </div>)
    })
  }

  function renderMovieGenres(movie){
    return movie.genres.map(genre => {
      return (<li>{genre}</li>)
    })
  }

  return (
    <div>
      <h1>Movies Page</h1>
      {renderMovies()}
    </div>
  );
};

export default Movies;

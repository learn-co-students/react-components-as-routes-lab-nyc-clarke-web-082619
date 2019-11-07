import React from 'react';
import { movies } from '../data';

const Movies = () => {
  function renderMovies(){
   return movies.map(movie=> <div>{movie.title} {movie.time} {movie.genres.map(genre=> <ul>{genre}</ul>)}</div>)
  }
  return (
    <div>
      <h1>Movies Page</h1>
        {renderMovies()}
    </div>
  );
};

export default Movies;

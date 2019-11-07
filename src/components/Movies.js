import React from 'react';
import { movies } from '../data';

const Movies = () => {

  const renderMovies = () =>{
    return movies.map(movie => {
      return ( 
        <div>
          {movie.title}
          {movie.time}
          Genres:
          {renderGenres(movie.genres)}
          {movie.metascore}
        </div>  
      )  
    })
  }

  const renderGenres = (genres) => {
    return genres.map(genre => <ul>{genre}</ul>)
  }
  return (
    <div>
      <h1>Movies Page</h1>
      {renderMovies()}
    </div>
  );
};

export default Movies;

import React from "react";
import { movies } from "../data";

const makeMovies = () => {
  return movies.map(movie => {
    return (
      <div>
        {movie.title}, {movie.time}, {makeMovieGenres(movie.genres)}
      </div>
    );
  });
};

const makeMovieGenres = arr => {
  return arr.map(genre => {
    return <ul>{genre}</ul>;
  });
};

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {makeMovies()}
    </div>
  );
};

export default Movies;

import React from "react";
import { directors } from "../data";

const makeDirectors = () => {
  return directors.map(director => {
    return (
      <div>
        {director.name}, {makeDirectorMovies(director.movies)}
      </div>
    );
  });
};

const makeDirectorMovies = arr => {
  return arr.map(movie => {
    return <ul>{movie}</ul>;
  });
};

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {makeDirectors()};
    </div>
  );
};

export default Directors;
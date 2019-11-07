import React from 'react';
import { directors } from '../data';

const Directors = () => {
  function renderDirectors(){
    return directors.map(director=><div>{director.name} {director.movies.map(movie=> <ul>{movie}</ul>)}</div>)
  }
  return (
    <div>
      <h1>Directors Page</h1>
      {renderDirectors()}
    </div>
  );
}

export default Directors

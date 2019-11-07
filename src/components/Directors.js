import React from 'react';
import { directors } from '../data';

const Directors = () => {
  function renderDirectors(){
    return directors.map(director => {
      return (<div className='director'>
        <h3>Name: {director.name}</h3>
        Movies:{renderDirectorMovies(director)}
      </div>)
    })
  }

  function renderDirectorMovies(director){
    return director.movies.map(movie => {
      return (<li>{movie}</li>)
    })
  }

  return (
    <div>
      <h1>Directors Page</h1>
      {renderDirectors()}
    </div>
  );
}

export default Directors

import React from 'react';
import { actors } from '../data';

const Actors = () => {

  function renderActors(){
    return actors.map(actor => <div><h1>{actor.name}</h1><ul>{actor.movies.map(movie => <li>{movie}</li>)}</ul></div>)
  }
  return (
    <div>
      <h1>Actors Page</h1>
      {renderActors()}
    </div>
  );
};

export default Actors;

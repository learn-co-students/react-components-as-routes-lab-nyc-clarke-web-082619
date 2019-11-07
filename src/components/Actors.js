import React from 'react';
import { actors } from '../data';

const Actors = () => {

  function renderActors(){
    return actors.map(actor => {
      return (<div className='actor'>
        <h3>Name: {actor.name}</h3>
        Movies:{renderActorMovies(actor)}
      </div>)
    })
  }

  function renderActorMovies(actor){
    return actor.movies.map(movie => {
      return (<li>{movie}</li>)
    })
  }

  return (
    <div>
      <h1>Actors Page</h1>
      {renderActors()}
    </div>
  );
};

export default Actors;

import React from "react";
import { actors } from "../data";

const makeActors = () => {
  return actors.map(actor => {
    return (
      <div>
        {actor.name}, {makeActorMovies(actor.movies)}
      </div>
    );
  });
};

const makeActorMovies = arr => {
  return arr.map(movie => {
    return <ul>{movie}</ul>;
  });
};

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {makeActors()}
    </div>
  );
};

export default Actors;
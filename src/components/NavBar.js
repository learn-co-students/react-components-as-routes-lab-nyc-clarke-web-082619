import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar">
      <NavLink
        to="/"
        exact
        // style={}
        // activeStyle={}
      >
        Home
      </NavLink>
      <br></br>
      <NavLink
        to="/movies"
        exact
        // style={}
        // activeStyle={}
      >
        Movies
      </NavLink>
      <br></br>
      <NavLink
        to="/directors"
        exact
        // style={}
        // activeStyle={}
      >
        Directors
      </NavLink>
      <br></br>
      <NavLink
        to="/actors"
        exact
        // style={}
        // activeStyle={}
      >
        Actors
      </NavLink>
      <br></br>
    </div>
  );
};

export default NavBar;

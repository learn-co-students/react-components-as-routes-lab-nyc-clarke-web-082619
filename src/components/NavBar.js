import React from "react";
import { NavLink } from "react-router-dom";

const link = {
  width: "100px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "blue",
  textDecoration: "none",
  color: "white"
};

const NavBar = () => {
  return (
    <div className="navbar">
      <NavLink
        to="/"
        exact
        style={link}
        activeStyle={{ background: "firebrick" }}
      >
        Home
      </NavLink>
      <NavLink
        to="/actors"
        exact
        style={link}
        activeStyle={{ background: "firebrick" }}
      >
        Actors
      </NavLink>
      <NavLink
        to="/directors"
        exact
        style={link}
        activeStyle={{ background: "firebrick" }}
      >
        Directors
      </NavLink>
      <NavLink
        to="/movies"
        exact
        style={link}
        activeStyle={{ background: "firebrick" }}
      >
        Movies
      </NavLink>
    </div>
  );
};

export default NavBar
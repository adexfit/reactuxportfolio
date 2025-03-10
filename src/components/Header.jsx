import React from "react";
import "./Header.css";
import { Link, NavLink } from "react-router-dom";
import { projectList } from "../data/data";

const Header = (props) => {
  return (
    <section className="header2">
      <h1>{props.title}</h1>
    </section>
  );
};

export default Header;

import React from "react";
import "./Header.css";
import { Link, NavLink } from "react-router-dom";
import { projectList } from "../data/data";

const Header = (props) => {
  return (
    <>
      <div className="lightbox">
        <div className="wrapper">
          <header>
            <div className="details">
              <i className="uil uil-camera"></i>
              <span>Image Preview</span>
            </div>
            <div className="buttons">
              <i className="close-icon uil uil-times"></i>
            </div>
          </header>
          <hr />
          <div className="preview-img">
            <div className="img">
              <img src="" alt="preview-img" />
            </div>
          </div>
        </div>
      </div>
      <section className="header2">
        <h1>{props.title}</h1>
      </section>
    </>
  );
};

export default Header;

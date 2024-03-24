import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} border-body`}
    >
      <div className="container-fluid">
   {/*      <Link className="navbar-brand" to="/">
          {props.title}
        </Link> */}
        <a className="navbar-brand" href="#"> {props.title}</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
       {/*      <li className="nav-item">
              <Link className="nav-link" to="/about">
                {props.aboutText}
              </Link>
            </li> */}
          </ul>
          {/* <div
            className={`form-check form-switch text-${
              props.mode === "light" ? "#042743" : "white"
            }`}
          >
            <input
              className="form-check-input custom-check"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckChecked"
              onClick={props.toggleMode}
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckChecked"
            >
              {props.lableMode}
            </label>
          </div> */}
          <div
            className={`form-check form-switch text-${
              props.mode === "light" ? "#042743" : "white"
            }`}
          >
            <input
              className="form-check-input custom-check"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckChecked"
              onClick={props.toggleMode}
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckChecked"
            >
              {props.lableMode}
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
};
Navbar.defaultProps = {
  title: "Set title Here",
  aboutText: "Set about text here",
};

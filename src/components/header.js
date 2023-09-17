import React from "react";
import logo from "./../images/logo.png";
import { Link } from "react-router-dom";
// import { Typewriter } from "react-simple-typewriter";
// import LanguageSwitcher from './translator'
export default class Header extends React.Component {
  handleClick = () => {
    const phoneNumber = "+971545599867";
    const telUrl = `tel:${phoneNumber}`;
    window.location.href = telUrl;
  };
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light text-primary">
        <span className="navbar-brand ms-2 p-0">
          <img
            className="navbar-brand rounded-circle"
            height={50}
            src={logo}
            alt="Logo"
          />
        </span>

        <span className="navbar-brand ms-5 p-0">
          <i
            onClick={this.handleClick}
            className="fa-solid fa-phone-volume fa-beat-fade text-primary fa-1xl"
            style={{ cursor: "pointer" }}
          ></i>
        </span>
        <button
          className="navbar-toggler  shadow-none"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse navbar-toggler-right custom-navbar"
          id="navbarNav"
        >
          <ul className="navbar-nav custom-navbar">
            <li className="nav-item active">
              <Link to="/" className="nav-link text-primary">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link text-primary">
                About
              </Link>
            </li>
            <li className="nav-item ">
              <div className="dropdown">
                <button
                  className="btn btn-primary btn-sm shadow-none"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Language
                </button>
                <div
                  className="dropdown-menu "
                  aria-labelledby="dropdownMenuButton"
                >
                  <button
                    type="button"
                    className={`btn btn-sm shadow-none rounded-0 form-control ${
                      this.props.lang === "English"
                        ? "btn-primary"
                        : "btn-light"
                    }`}
                    onClick={(e) => this.props.toggleLanguage("English")}
                  >
                    English
                  </button>
                  <br></br>
                  <button
                    type="button"
                    className={`btn btn-sm btn-primary shadow-none form-control rounded-0 ${
                      this.props.lang === "Arabic" ? "btn-primary" : "btn-light"
                    }`}
                    onClick={(e) => this.props.toggleLanguage("Arabic")}
                  >
                    Arabic
                  </button>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </nav>

    );
  }
}

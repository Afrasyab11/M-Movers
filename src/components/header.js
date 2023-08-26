import React from "react";
import logo from "./../images/logo.png";
import { Typewriter } from "react-simple-typewriter";
// import LanguageSwitcher from './translator'
export default class Header extends React.Component {
  render() {
    return (
      <div className="container-fluid bg-dark">
        <div className="row">
          <div className="col-3">
            <img
              className="navbar-brand rounded-circle"
              height={100}
              src={logo}
              alt="Logo"
            />
          </div>
          <div className="col-9 text-end d-flex align-items-center  text-light">
              <Typewriter
                className="nav-link"
                words={["Email : zkmovers112@gmail.com"]}
                loop={50}
                typeSpeed={70}
                deleteSpeed={100}
                delaySpeed={5000}
              />
          </div>
        </div>
      </div>
    );
  }
}

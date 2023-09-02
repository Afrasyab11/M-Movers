import React from "react";
import logo from "./../images/logo.png";
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
      <div className="container-fluid bg-dark">
        <div className="row">
          <div className="col-6">
            <img
              className="navbar-brand rounded-circle"
              height={100}
              src={logo}
              alt="Logo"
            />
          </div>
          <div className="col-6 text-primary d-flex flex-column align-items-end justify-content-center pe-5">
            <i onClick={this.handleClick} class="fa-solid fa-phone-volume fa-beat-fade fa-2xl" style={{cursor:"pointer"}}></i>
          </div>
        </div>
      </div>
    );
  }
}

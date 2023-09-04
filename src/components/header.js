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
          <div className="col-5">
            <img
              className="navbar-brand rounded-circle"
              height={100}
              src={logo}
              alt="Logo"
            />
          </div>

          <div className="col-1 text-primary d-flex flex-column align-items-center justify-content-center ">
            <i
              onClick={this.handleClick}
              className="fa-solid fa-phone-volume fa-beat-fade fa-2xl"
              style={{ cursor: "pointer" }}
            ></i>
          </div>
          <div className="col-6 d-flex flex-column align-items-end justify-content-center">
            <label className="text-light">Select Language</label>
            <div className="btn-group btn-group-sm" role="group" aria-label="Basic example">
              <button type="button" className={`btn  shadow-none ${this.props.lang ==='English' ? "btn-primary":"btn-light"}`}
              onClick={(e) => this.props.toggleLanguage("English")}>
                English
              </button>
              <button type="button" className={`btn btn-primary shadow-none ${this.props.lang ==='Arabic' ? "btn-primary":"btn-light"}`}
              onClick={(e) => this.props.toggleLanguage("Arabic")}>
                Arabic
              </button>
             
            </div>
            {/* <select className="form-select btn-sm">
              <option>select</option>
              <option onClick={(e) => this.props.toggleLanguage("English")}>
                English
              </option>
              <option onClick={(e) => this.props.toggleLanguage("Arabic")}>
                Arabic
              </option>
            </select> */}
          </div>
        </div>
      </div>
    );
  }
}

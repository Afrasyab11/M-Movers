import React, { Component } from "react";
import contact from "./../images/contact.jpg";
import Aos from "aos";
import "aos/dist/aos.css";

export default class contactComp extends Component {
    constructor(){
        super()
        Aos.init();
    }
//   componentDidMount() {
//     Aos.init();
//   }
  handleClick = (e) => {
    e.preventDefault()
    const phoneNumber = "+971545599867";
    const telUrl = `tel:${phoneNumber}`;
    window.location.href = telUrl;
  };
  render() {
    return (
      <div className="container-fluid">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-sm-12 col-md-6 " data-aos="fade-right">
            <div className="">
              <p className="mt-3 text-center text-primary fw-bold fs-1">
                CONTACT US
              </p>
              <div className="mt-5 ps-5">
                <i className="fa-solid fa-phone-volume fa-beat"></i>{" "}
                <span className="text-primary" style={{textDecoration:"none", cursor:"pointer"}}  onClick={this.handleClick}>+971545599867</span>
              </div>
              <div className="mt-2 ps-5">
                <i className="fa-solid fa-envelope fa-beat"></i>{" "}
                <span>zkmovers112@gmail.com</span>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6" data-aos="flip-left">
            <img className="img-fluid p-0 m-0" src={contact} alt="" />
          </div>
        </div>
      </div>
    );
  }
}

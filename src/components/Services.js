import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "animate.css";

export default class Service extends React.Component {
 
  componentDidMount() {
    Aos.init({ duration: 1000 });
  }

  render() {
    return (
      <div className="container-fluid ">
        <div className="row mt-5">
          <div
            className="col-12 text-center"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <p>WELCOME TO</p>
            <p className="fs-3 fw-bold">OUR SERVICES</p>
          </div>
          <div className="row">
            <div className="col-sm-12 col-md-2"></div>
            <div className="col-sm-12 col-md-8 text-center">
              <p className="fs-5">
                with Professional Movers we provide the following Services at
                offordable rates, to suit yout pocket and smooth your pocket
              </p>
              <div className="col-sm-12 col-md-2"></div>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div
            className="col-sm-12 col-md-4 text-center text-dark mb-5 "
            data-aos="fade-right"
          >
            <i
              className="fa-solid fa-location-dot fs-1"
              style={{ color: "rgb(25, 116, 207)" }}
            ></i>
            <p className="fs-4 fw-bold mt-3">LOCAL MOVING</p>
            <p className=" text-center">
              We will happily transport your household from one location to
              another.
            </p>
            {/* <p className="fs-5  lh-1">from one location to another.</p/> */}
          </div>
          <div
            className="col-sm-12 col-md-4 text-center mb-5"
            data-aos="flip-left"
          >
            <i
              className="fa-solid fa-globe fs-1"
              style={{ color: "rgb(25, 116, 207)" }}
            ></i>
            <p className="fs-4 fw-bold mt-3">LONG DISTANCE MOVING</p>
            <p className="">
              Mover will make you long distance moving experience stress-free
            </p>
          </div>
          <div
            className="col-sm-12 col-md-4 text-center mb-5"
            data-aos="fade-down"
          >
            <i
              className="fa-solid fa-cart-shopping fs-1"
              style={{ color: "rgb(25, 116, 207)" }}
            ></i>
            <p className="fs-4 fw-bold mt-3">MOVING KITS</p>
            <p className="">
              We offer several different moving kits so you don't have to worry
              about the details.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

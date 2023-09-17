import React, { Component } from "react";
import image1 from "./../images/slider2.jpg";
import contact from "./../images/contact.jpg";

export default class About extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-sm-12 col-md-6 text-center">
            <p className="">{this.props.texts.aboutP1}</p>
            <p className="pt-3">{this.props.texts.aboutP2}</p>
          </div>
          <div className="col-sm-12 col-md-6">
            <img src={image1} className="img-fluid carouselHeight" alt="..." />
          </div>
        </div>
        <div className="row mt-3 align-items-center">
          <div className="col-sm-12 col-md-6 text-center">
            <span className="fs-4 fw-bold text-center text-primary">
              {this.props.texts.whyChooseQ}
            </span>
            <p className="mt-2">
              <strong className="text-primary">
                {this.props.texts.Experience } 
              </strong>
              {this.props.texts.whyChoose1}
            </p>
            <p className="mt-2">
              <strong className="text-primary">
                {this.props.texts.DedicatedTeam} 
              </strong>
              {this.props.texts.whyChoose2}
            </p>
            <p className="mt-2">
              <strong className="text-primary">
                {this.props.texts.CustomerApproach}{" "}
              </strong>
              {this.props.texts.whyChoose3}
            </p>
            <p className="mt-2">
              <strong className="text-primary">{this.props.texts.SafetyFirst} </strong>
              {this.props.texts.whyChoose4}
            </p>
          </div>
          <div className="col-sm-12 col-md-6">
            <img className="img-fluid p-0 m-0" src={contact} alt="" />
          </div>
        </div>
      </div>
    );
  }
}

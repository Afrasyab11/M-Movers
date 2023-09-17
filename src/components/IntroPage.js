import React from "react";
// import slider1 from './../images/s-cartoon.jpg'
import slider1 from "./../images/slider2.png";
import "animate.css";

// import { withTranslation } from 'react-i18next';
class IntroPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     
    };
  }
  render() {
    // const { t } = this.props;
    return (
      <div className="container-fluid">
        {this.props.lang === "English" ? (
          <div className="row align-items-center">
            <div className="col-sm-12 col-md-6 text-dark ">
              <p className="animate__animated animate__backInLeft ">
                {this.props.texts.intro}
              </p>
              <div className="row">
                <div className="col-sm-12 col-md-6 mb-3 animate__animated animate__backInRight">
                  <div className="row ">
                    <div className="col-2">
                      <i
                        className="fa-solid fa-square-check fs-4"
                        style={{ color: "rgb(25, 116, 207)" }}
                      ></i>
                    </div>
                    <div className="col-10">
                      <span>{this.props.texts.intro1}</span>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-2">
                      <i
                        className="fa-solid fa-square-check fs-4"
                        style={{ color: "rgb(25, 116, 207)" }}
                      ></i>
                    </div>
                    <div className="col-10">
                      <span>{this.props.texts.intro2}</span>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-2">
                      <i
                        className="fa-solid fa-square-check fs-4"
                        style={{ color: "rgb(25, 116, 207)" }}
                      ></i>
                    </div>
                    <div className="col-10">
                      <span>{this.props.texts.intro3}</span>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-6 animate__animated animate__backInUp">
                  <div
                    className="py-4 px-2"
                    style={{ backgroundColor: "rgb(25, 116, 207)" }}
                  >
                    <i className="fa-solid fa-truck-fast fs-1 mb-2"></i>
                    <br></br>
                    <span className="fw-bold">
                      {this.props.texts.intro4}{" "}
                      <strong className="text-light">
                        {this.props.texts.intro5}
                      </strong>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 ">
              <img
                src={slider1}
                className="img-fluid carouselHeight"
                alt="..."
              />
            </div>
          </div>
        ) : (
          <div className="row align-items-center">
            <div className="col-sm-12 col-md-6 order-2 order-sm-1">
              <img
                src={slider1}
                className="img-fluid carouselHeight"
                alt="..."
              />
            </div>
            <div className="col-sm-12 col-md-6 text-dark order-1 order-sm-2">
              <p className="animate__animated animate__backInLeft text-end">
                {this.props.texts.intro}
              </p>
              <div className="row">
                <div className="col-sm-12 col-md-6 animate__animated animate__backInUp order-2 order-sm-1">
                  <div
                    className="py-4 px-2 text-end"
                    style={{ backgroundColor: "rgb(25, 116, 207)" }}
                  >
                    <i class="fa-solid fa-truck-fast fs-1  fa-flip-horizontal mb-2"></i>{" "}
                    <br></br>
                    <span className="fw-bold">
                      {this.props.texts.intro4}{" "}
                      <strong className="text-light">
                        {this.props.texts.intro5}
                      </strong>
                    </span>
                  </div>
                </div>
                <div className="col-sm-12 col-md-6 mb-3 animate__animated animate__backInRight order-1 order-sm-2">
                  <div className="row ">
                    <div className="col-10 text-end">
                      <span>{this.props.texts.intro1}</span>
                    </div>
                    <div className="col-2">
                      <i
                        className="fa-solid fa-square-check fs-4"
                        style={{ color: "rgb(25, 116, 207)" }}
                      ></i>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-10 text-end">
                      <span>{this.props.texts.intro2}</span>
                    </div>
                    <div className="col-2">
                      <i
                        className="fa-solid fa-square-check fs-4"
                        style={{ color: "rgb(25, 116, 207)" }}
                      ></i>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-10 text-end">
                      <span>{this.props.texts.intro3}</span>
                    </div>
                    <div className="col-2">
                      <i
                        className="fa-solid fa-square-check fs-4"
                        style={{ color: "rgb(25, 116, 207)" }}
                      ></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
export default IntroPage;
// export default withTranslation('translation')(IntroPage);

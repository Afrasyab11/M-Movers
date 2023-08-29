import React from "react";
// import slider1 from './../images/s-cartoon.jpg'
import slider1 from "./../images/slider2.png";
import "animate.css";

// import { withTranslation } from 'react-i18next';
class IntroPage extends React.Component {
  render() {
    // const { t } = this.props;
    return (
      <div className="container-fluid  mt-2">
        <div className="row align-items-center">
          <div className="col-sm-12 col-md-6 text-dark ">
            <p className="animate__animated animate__backInLeft ">
              Our main objective is to offer quality service ensuring 100%
              satisfaction to customers without any unexpected costs or hidden
              agendas. Our high-qualitly service at economical rates have won
              the hearts of millions of clients and continues to do so.
            </p>
            {/* <p className="fs-5">{t('translation')}</p> */}
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
                    <span>Trusted Mover's in all over the UAE</span>
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
                    <span>Exceeding expectations with professionalism</span>
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
                    <span>Competitive prices for affordable services.</span>
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
                    WE'RE TRUSTED BY MORE THAN{" "}
                    <strong className="text-light">1300 CLIENTS</strong>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 ">
            <img src={slider1} className="img-fluid carouselHeight" alt="..." />
          </div>
        </div>
      </div>
    );
  }
}
export default IntroPage;
// export default withTranslation('translation')(IntroPage);

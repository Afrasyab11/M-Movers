import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import studioApartment from "./../images/studionApartment.jpg";
import oneBHK from "./../images/oneBHK.jpeg";
import twoBHK from "./../images/twoBHK.jpeg";
import threeBHK from "./../images/threeBHK.jpeg";
import fourBHK from "./../images/fourBHK.jpeg";
import five from "./../images/five.jpeg";
import sixVilla from "./../images/sixvilla.jpeg";
import fourVilla from "./../images/fourVilla.jpeg";
// import fiveVilla from './../images/fiveVilla.jpeg'
import halfTruc from "./../images/halfTruck.jpeg";
import fullTruck from "./../images/fullTruck.jpeg";
import secondLast from "./../images/secondLastImage.jpeg";
export default class RateListComp extends React.Component {
  componentDidMount() {
    Aos.init({ duration: 1000 });
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 text-center">
            <p className="fs-5">Apartment Moving</p>
          </div>
        </div>
        <div className="row">
          <div
            className="col-sm-12 col-md-4 "
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <div className="p-2">
              <div className="row border rounded">
                <div className="col-6">
                  <p>Studio Apartment</p>
                  <p>AED780</p>
                  <ul>
                    <li>Handled by highly expectations packers and overs</li>
                    <li>Includes 1 Truck and 3 Workers</li>
                  </ul>
                </div>
                <div className="col-6 pt-2 text-center">
                  <div className="row">
                    <div className="col-12">
                      {" "}
                      <img
                        className="img-fluid rounded"
                        src={studioApartment}
                        alt="studio Apartment"
                      />
                    </div>
                    <div className="col-12 my-2">
                      <a
                        className="btn btn-sm btn-primary shadow-none"
                        href={`https://wa.me/+971545599867/?text=Hello! Monsoor Movers I want to move Studio Apartment`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        contact
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-sm-12 col-md-4 "
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <div className="p-2">
              <div className="row border rounded">
                <div className="col-6">
                  <p>1 BHK Apartment</p>
                  <p>AED1,100</p>
                  <ul>
                    <li>Handled by highly expectations packers and overs</li>
                    <li>Includes 1 Truck and 4 Workers</li>
                  </ul>
                </div>
                <div className="col-6 pt-2 text-center">
                  <div className="row">
                    <div className="col-12">
                      <img
                        className="img-fluid rounded"
                        src={oneBHK}
                        alt="studio Apartment"
                      />
                    </div>
                    <div className="col-12 my-2">
                      <a
                        className="btn btn-sm btn-primary shadow-none"
                        href={`https://wa.me/+971545599867/?text=Hello! Monsoor Movers I want to move 1 BHK Apartment`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        contact
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-sm-12 col-md-4"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <div className="p-2">
              <div className="row border rounded">
                <div className="col-6">
                  <p>2 BHK Apartment</p>
                  <p>AED1,900</p>
                  <ul>
                    <li>Handled by highly expectations packers and overs</li>
                    <li>Includes 2 Trucks and 6 Workers</li>
                  </ul>
                </div>
                <div className="col-6 pt-2 text-center">
                  <div className="row">
                    <div className="col-12">
                      <img
                        className="img-fluid rounded"
                        src={twoBHK}
                        alt="studio Apartment"
                      />
                    </div>
                    <div className="col-12 my-2">
                      <a
                        className="btn btn-sm btn-primary shadow-none"
                        href={`https://wa.me/+971545599867/?text=Hello! Monsoor Movers I want to move 2 BHK Apartment`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        contact
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6" data-aos="flip-right">
            <div className="p-2">
              <div className="row border rounded">
                <div className="col-6">
                  <p>3 BHK Apartment</p>
                  <p>AED2,600</p>
                  <ul>
                    <li>Handled by highly expectations packers and overs</li>
                    <li>Includes 3 Trucks and 8 Workers</li>
                  </ul>
                </div>
                <div className="col-6 pt-2 text-center gap-2">
                  <div className="row">
                    <div className="col-12">
                      <img
                        className="img-fluid rounded"
                        src={threeBHK}
                        alt="studio Apartment"
                      />
                    </div>
                    <div className="col-12 my-2">
                      <a
                        className="btn btn-sm btn-primary shadow-none "
                        href={`https://wa.me/+971545599867/?text=Hello! Monsoor Movers I want to move 3 BHK Apartment`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        contact
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6" data-aos="flip-left">
            <div className="p-2">
              <div className="row border rounded">
                <div className="col-6">
                  <p>4 BHK Apartment</p>
                  <p>AED3,600</p>
                  <ul>
                    <li>Handled by highly expectations packers and overs</li>
                    <li>Includes 4 Trucks and 10 Workers</li>
                  </ul>
                </div>
                <div className="col-6 pt-2 text-center">
                  <div className="row">
                    <div className="col-12">
                      <img
                        className="img-fluid rounded"
                        src={fourBHK}
                        alt="studio Apartment"
                      />
                    </div>
                    <div className="col-12 my-2">
                      <a
                        className="btn btn-sm btn-primary shadow-none"
                        href={`https://wa.me/+971545599867/?text=Hello! Monsoor Movers I want to move 4 BHK Apartment`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        contact
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5"></div>
        <div className="mt-5"></div>
        <div className="mt-5"></div>
        <div className="row">
          <div className="col-12 text-center">
            <p className="fs-5">Villa Moving</p>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-6 " data-aos="zoom-in-right">
            <div className="p-2">
              <div className="row border rounded">
                <div className="col-6">
                  <p>2 Bedroom Villa</p>
                  <p>AED 2,200</p>
                  <ul>
                    <li>Handled by highly expectations packers and overs</li>
                    <li>Includes 2 Truck and 6 Workers</li>
                  </ul>
                </div>
                <div className="col-6 pt-2 text-center">
                  <div className="row">
                    <div className="col-12">
                      <img
                        className="img-fluid rounded"
                        src={five}
                        alt="studio Apartment"
                      />
                    </div>
                    <div className="col-12 my-2">
                      <a
                        className="btn btn-sm btn-primary shadow-none"
                        href={`https://wa.me/+971545599867/?text=Hello! Monsoor Movers I want to move 2 Bedroom Villa`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        contact
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 " data-aos="flip-up">
            <div className="p-2">
              <div className="row border rounded">
                <div className="col-6">
                  <p>3 Bedroom Villa</p>
                  <p>AED3,200</p>
                  <ul>
                    <li>Handled by highly expectations packers and overs</li>
                    <li>Includes 3 Truck and 8 Workers</li>
                  </ul>
                </div>
                <div className="col-6 pt-2 text-center">
                  <div className="row">
                    <div className="col-12">
                      <img
                        className="img-fluid rounded"
                        src={sixVilla}
                        alt="studio Apartment"
                      />
                    </div>
                    <div className="col-12 my-2">
                      <a
                        className="btn btn-sm btn-primary shadow-none"
                        href={`https://wa.me/+971545599867/?text=Hello! Monsoor Movers I want to move Three Bedroom Villa`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        contact
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6" data-aos="flip-up">
            <div className="p-2">
              <div className="row border rounded">
                <div className="col-6">
                  <p>4 Bedroom Villa</p>
                  <p>AED4,500</p>
                  <ul>
                    <li>Handled by highly expectations packers and overs</li>
                    <li>Includes 4 Trucks and 10 Workers</li>
                  </ul>
                </div>
                <div className="col-6 pt-2 text-center">
                  <div className="row">
                    <div className="col-12">
                      <img
                        className="img-fluid rounded"
                        src={secondLast}
                        alt="studio Apartment"
                      />
                    </div>
                    <div className="col-12 my-2">
                      <a
                        className="btn btn-sm btn-primary shadow-none"
                        href={`https://wa.me/+971545599867/?text=Hello! Monsoor Movers I want to move Four Bedroom Villa`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        contact
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6" data-aos="flip-up">
            <div className="p-2">
              <div className="row border rounded">
                <div className="col-6">
                  <p>5 Bedroom Villa</p>
                  <p>AED5,000</p>
                  <ul>
                    <li>Handled by highly expectations packers and overs</li>
                    <li>Includes 4 Trucks and 10 Workers</li>
                  </ul>
                </div>
                <div className="col-6 pt-2 text-center">
                  <div className="row">
                    <div className="col-12">
                      <img
                        className="img-fluid rounded"
                        src={fullTruck}
                        alt="studio Apartment"
                      />
                    </div>
                    <div className="col-12 my-2">
                      <a
                        className="btn btn-sm btn-primary shadow-none"
                        href={`https://wa.me/+971545599867/?text=Hello! Monsoor Movers I want to move Five Bedroom Villa`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        contact
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5"></div>
        <div className="mt-5"></div>
        <div className="mt-5"></div>
        <div className="row">
          <div className="col-12 text-center">
            <p className="fs-5">Addon Truck</p>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-6 " data-aos="flip-up"  data-aos-duration="2000">
            <div className="p-2">
              <div className="row border rounded">
                <div className="col-6">
                  <p>Half Load Truck</p>
                  <p>AED399</p>
                  <ul>
                    <li>
                      Charges for Extra truck would be over the fixed rates
                    </li>
                  </ul>
                </div>
                <div className="col-6 pt-2 text-center">
                  <div className="row">
                    <div className="col-12">
                      <img
                        className="img-fluid rounded"
                        src={halfTruc}
                        alt="studio Apartment"
                      />
                    </div>
                    <div className="col-12 my-2">
                      <a
                        className="btn btn-sm btn-primary shadow-none"
                        href={`https://wa.me/+971545599867/?text=Hello! Monsoor Movers I want to Load Half Truck`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        contact
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 " data-aos="flip-up"  data-aos-duration="2000">
            <div className="p-2">
              <div className="row border rounded">
                <div className="col-6">
                  <p>Full Load Truck</p>
                  <p>AED799</p>
                  <ul>
                    <li>
                      Charges for Extra truck would be over the fixed rates
                    </li>
                  </ul>
                </div>
                <div className="col-6 pt-2 text-center">
                  <div className="row">
                    <div className="col-12">
                      <img
                        className="img-fluid rounded"
                        src={fourVilla}
                        alt="studio Apartment"
                      />
                    </div>
                    <div className="col-12 my-2">
                      <a
                        className="btn btn-sm btn-primary shadow-none"
                        href={`https://wa.me/+971545599867/?text=Hello! Monsoor Movers I want to Load Full truck`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        contact
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

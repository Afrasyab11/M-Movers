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
        {this.props.lang === "English" ? (
          <>
            <div className="row">
              <div className="col-12 text-center">
                <p className="fs-5">{this.props.texts.apartmentTitle}</p>
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
                      <p>{this.props.texts.apartmentcard1Title}</p>
                      <p>{this.props.texts.apartmentcard1price}</p>
                      <ul>
                        <li>{this.props.texts.apartmentcard1Desc}</li>
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
                      <p>{this.props.texts.apartmentcard2Title}</p>
                      <p>{this.props.texts.apartmentcard2price}</p>
                      <ul>
                        <li>{this.props.texts.apartmentcard2Desc}</li>
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
                      <p>{this.props.texts.apartmentcard3Title}</p>
                      <p>{this.props.texts.apartmentcard3price}</p>
                      <ul>
                        <li>{this.props.texts.apartmentcard3Desc}</li>
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
                      <p>{this.props.texts.apartmentcard4Title}</p>
                      <p>{this.props.texts.apartmentcard4price}</p>
                      <ul>
                        <li>{this.props.texts.apartmentcard4Desc}</li>
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
                      <p>{this.props.texts.apartmentcard5Title}</p>
                      <p>{this.props.texts.apartmentcard5price}</p>
                      <ul>
                        <li>{this.props.texts.apartmentcard5Desc}</li>
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
                <p className="fs-5">{this.props.texts.villaTitle}</p>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12 col-md-6 " data-aos="zoom-in-right">
                <div className="p-2">
                  <div className="row border rounded">
                    <div className="col-6">
                      <p>{this.props.texts.villacard1Title}</p>
                      <p>{this.props.texts.villacard1price}</p>
                      <ul>
                        <li>{this.props.texts.villacard1Desc}</li>
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
              <div className="col-sm-12 col-md-6 " data-aos="zoom-in-down">
                <div className="p-2">
                  <div className="row border rounded">
                    <div className="col-6">
                      <p>{this.props.texts.villacard2Title}</p>
                      <p>{this.props.texts.villacard2price}</p>
                      <ul>
                        <li>{this.props.texts.villacard2Desc}</li>
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
              <div className="col-sm-12 col-md-6" data-aos="flip-left">
                <div className="p-2">
                  <div className="row border rounded">
                    <div className="col-6">
                      <p>{this.props.texts.villacard3Title}</p>
                      <p>{this.props.texts.villacard3price}</p>
                      <ul>
                        <li>{this.props.texts.villacard3Desc}</li>
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
              <div className="col-sm-12 col-md-6" data-aos="flip-left">
                <div className="p-2">
                  <div className="row border rounded">
                    <div className="col-6">
                      <p>{this.props.texts.villacard4Title}</p>
                      <p>{this.props.texts.villacard4price}</p>
                      <ul>
                        <li>{this.props.texts.villacard4Desc}</li>
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
                <p className="fs-5">{this.props.texts.addonTruckTitle}</p>
              </div>
            </div>
            <div className="row">
              <div
                className="col-sm-12 col-md-6 "
                data-aos="flip-left"
                data-aos-duration="2000"
              >
                <div className="p-2">
                  <div className="row border rounded">
                    <div className="col-6">
                      <p>{this.props.texts.addoncard1Title}</p>
                      <p>{this.props.texts.addoncard1price}</p>
                      <ul>
                        <li>{this.props.texts.addoncard1Desc}</li>
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
              <div
                className="col-sm-12 col-md-6 "
                data-aos="flip-left"
                data-aos-duration="2000"
              >
                <div className="p-2">
                  <div className="row border rounded">
                    <div className="col-6">
                      <p>{this.props.texts.addoncard2Title}</p>
                      <p>{this.props.texts.addoncard2price}</p>
                      <ul>
                        <li>{this.props.texts.addoncard2Desc}</li>
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
          </>
        ) : (
          <>
            <div className="row">
              <div className="col-12 text-center">
                <p className="fs-5">{this.props.texts.apartmentTitle}</p>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12 col-md-4 text-end"
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
              >
                <div className="p-2">
                  <div className="row border rounded">
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
                            {this.props.texts.contactbtn}
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-6 text-end">
                      <p>{this.props.texts.apartmentcard3Title}</p>
                      <p>{this.props.texts.apartmentcard3price}</p>
                      <li className="nav-link p-0">
                        {this.props.texts.apartmentcard3Desc}
                      </li>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-4"  data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
              >
                <div className="p-2">
                  <div className="row border rounded">
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
                            {this.props.texts.contactbtn}
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-6 text-end">
                      <p>{this.props.texts.apartmentcard2Title}</p>
                      <p>{this.props.texts.apartmentcard2price}</p>
                      <li className="nav-link p-0">
                        {this.props.texts.apartmentcard2Desc}
                      </li>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-4"
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
              >
                <div className="p-2">
                  <div className="row border rounded">
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
                            {this.props.texts.contactbtn}
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-6 text-end">
                      <p>{this.props.texts.apartmentcard1Title}</p>
                      <p>{this.props.texts.apartmentcard1price}</p>
                      <li className="nav-link p-0">
                        {this.props.texts.apartmentcard1Desc}
                      </li>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-6" data-aos="flip-left">
                <div className="p-2">
                  <div className="row border rounded">
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
                            {this.props.texts.contactbtn}
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-6 text-end">
                      <p>{this.props.texts.apartmentcard5Title}</p>
                      <p>{this.props.texts.apartmentcard5price}</p>
                      <li className="nav-link p-0">
                        {this.props.texts.apartmentcard5Desc}
                      </li>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-6" data-aos="flip-right">
                <div className="p-2">
                  <div className="row border rounded">
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
                            {this.props.texts.contactbtn}
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-6 text-end">
                      <p>{this.props.texts.apartmentcard4Title}</p>
                      <p>{this.props.texts.apartmentcard4price}</p>
                      <li className="nav-link p-0">
                        {this.props.texts.apartmentcard4Desc}
                      </li>
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
                <p className="fs-5">{this.props.texts.villaTitle}</p>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12 col-md-6 " data-aos="zoom-in-down">
                <div className="p-2">
                  <div className="row border rounded">
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
                            {this.props.texts.contactbtn}
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-6 text-end">
                      <p>{this.props.texts.villacard2Title}</p>
                      <p>{this.props.texts.villacard2price}</p>
                      <li className="nav-link p-0">
                        {this.props.texts.villacard2Desc}
                      </li>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 " data-aos="zoom-in-right">
                <div className="p-2">
                  <div className="row border rounded">
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
                            {this.props.texts.contactbtn}
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-6 text-end">
                      <p>{this.props.texts.villacard1Title}</p>
                      <p>{this.props.texts.villacard1price}</p>
                      <li className="nav-link p-0">
                        {this.props.texts.villacard1Desc}
                      </li>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-6" data-aos="flip-left">
                <div className="p-2">
                  <div className="row border rounded">
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
                            {this.props.texts.contactbtn}
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-6 text-end">
                      <p>{this.props.texts.villacard4Title}</p>
                      <p>{this.props.texts.villacard4price}</p>
                      <li className="nav-link p-0">
                        {this.props.texts.villacard4Desc}
                      </li>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-6" data-aos="flip-left">
                <div className="p-2">
                  <div className="row border rounded">
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
                            {this.props.texts.contactbtn}
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-6 text-end">
                      <p>{this.props.texts.villacard3Title}</p>
                      <p>{this.props.texts.villacard3price}</p>
                      <li className="nav-link p-0">
                        {this.props.texts.villacard3Desc}
                      </li>
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
                <p className="fs-5">{this.props.texts.addonTruckTitle}</p>
              </div>
            </div>
            <div className="row">
              <div
                className="col-sm-12 col-md-6 "
                data-aos="flip-left"
                data-aos-duration="2000"
              >
                <div className="p-2">
                  <div className="row border rounded">
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
                            {this.props.texts.contactbtn}
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-6 text-end">
                      <p>{this.props.texts.addoncard2Title}</p>
                      <p>{this.props.texts.addoncard2price}</p>
                      <li className="nav-link p-0">
                        {this.props.texts.addoncard2Desc}
                      </li>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-sm-12 col-md-6 "
                data-aos="flip-left"
                data-aos-duration="2000"
              >
                <div className="p-2">
                  <div className="row border rounded">
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
                            {this.props.texts.contactbtn}
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-6 text-end">
                      <p>{this.props.texts.addoncard1Title}</p>
                      <p>{this.props.texts.addoncard1price}</p>
                      <li className="nav-link text-end">
                        {this.props.texts.addoncard1Desc}
                      </li>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    );
  }
}

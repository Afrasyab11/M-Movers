import React from "react";
import slider1 from './../images/s-Person.jpg'
import client from './../images/clientImage.jpg'
import client2 from './../images/clientimage2.jpg'
import client3 from './../images/clientImage3.jpg'
import Aos from "aos";
import 'aos/dist/aos.css'
export default class ClientReview extends React.Component {
    constructor(){
        super()
        // Aos.init();
    }
    componentDidMount() {
        Aos.init({ duration: 1000 })
    }
    render() {
        return (
            <div className="container-fluid">
                <div className="row mt-5 px-3 d-flex justify-content-center align-items-center">
                    <div className="col-sm-12 col-md-6 pt-5 " data-aos="fade-right">
                        <p className="text-center fs-1 ">What Our Client Say</p>
                        <div className="">
                            <div id="carouselDark" className="carousel carousel-dark slide " data-bs-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active" data-bs-interval="2000">
                                        <div className="row ">
                                            <div className="col-sm-12 col-md-12  text-dark  p-4">
                                                <p className="">It was a nice experience with Mansoor Movers for my house shifting. Very Professional team. They did things quickly and hassle-free. Prices were also competitive. Highly recommended for all those who wants Shifting Service.Best of Luck</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12">
                                                <img className="rounded-circle border border-warning" width={50} height={50} src={client} alt="" /> &nbsp;&nbsp;
                                                <span>NEBU ZAC MATHEW</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item" data-bs-interval="5000">
                                        <div className="row ">
                                            <div className="col-sm-12 col-md-12  p-4">
                                                <p className="">I used the service from Mansoor Movers for Shifting my Apartment from Sharjah to Dubai last week. Their service was excellent, Packing and handling of all the stuffs they did very professionally. Highly recommended for all those who wants Shifting Service.</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12">
                                                <img className="rounded-circle border border-warning" width={50} height={50} src={client2} alt="" /> &nbsp;&nbsp;
                                                <span>MICHAEL A</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item" data-bs-interval="5000">
                                        <div className="row ">
                                            <div className="col-sm-12 col-md-12  p-4">
                                                <p className="">These guys are the best movers that I have ever used! With all of the positive reviews, how could I go wrong? I called them and had constant communication with direct via phone and email and felt reassured that everything was going to be taken care of.</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12">
                                                <img className="rounded-circle border border-warning" width={50} height={50} src={client3} alt="" /> &nbsp;&nbsp;
                                                <span>Lakisha Knaus</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-indicators ">
                                    <button type="button" data-bs-target="#carouselDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                    <button type="button" data-bs-target="#carouselDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                    <button type="button" data-bs-target="#carouselDark" data-bs-slide-to="2" aria-label="Slide 2"></button>
                                </div>.
                            </div>

                        </div>

                    </div>
                    <div className="col-sm-12 col-md-6 bg-body" data-aos="fade-right" >
                        <div><img src={slider1} className="img-fluid form-control" alt="..." /></div>
                    </div>

                </div>
            </div>
        )
    }
}
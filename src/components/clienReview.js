import React from "react";
import slider1 from './../images/s-Person.jpg'
import client from './../images/clientImage.jpg'
import client2 from './../images/clientimage2.jpg'
import client3 from './../images/clientImage3.jpg'
import Aos from "aos";
import 'aos/dist/aos.css'
export default class ClientReview extends React.Component {
   
    componentDidMount() {
        Aos.init({ duration: 1000 })
    }
    render() {
        return (
            <div className="container-fluid">
                <div className="row mt-5 px-3 d-flex justify-content-center align-items-center">
                    <div className="col-sm-12 col-md-6 pt-5 " data-aos="fade-right">
                        <p className="text-center fs-1 ">{this.props.texts.clientReviewTitle}</p>
                        <div className="">
                            <div id="carouselDark" className="carousel carousel-dark slide " data-bs-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active" data-bs-interval="2000">
                                        <div className="row ">
                                            <div className="col-sm-12 col-md-12  text-dark  p-4">
                                                <p className="">{this.props.texts.client1ReviewDesc}</p>
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
                                                <p className="">{this.props.texts.client2ReviewDesc}</p>
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
                                                <p className="">{this.props.texts.client3ReviewDesc}</p>
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
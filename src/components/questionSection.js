import React from "react";
import Aos from "aos";
import 'aos/dist/aos.css'
export default class QuestionSection extends React.Component {
    constructor(){
        super()
        // Aos.init({ duration: 1000 });
    }
    componentDidMount() {
        Aos.init({ duration: 1000 })
    }
    render() {
        return (
            <div className="container-fluid">
                <div className="row text-center mt-5 ">
                    <div className="col-md-12 col-lg-12 ">FAQ</div>
                    <div className="col-md-12 col-lg-12 fs-3 fw-bold">FREQUENTLY ASKED QUESTIONS</div>
                </div>
                <div className="row text-center mt-3">
                    <div className="col-sm-12 col-md-4 mt-5" data-aos="fade-right">
                        <div className="border  p-4">
                            <i className="fa-solid fa-circle-question fs-1 questionIcon" style={{ "color": "rgb(25, 116, 207)" }}></i>
                            <p className="fs-5 fw-bold ">Do you move unique or very lare items?</p>
                            <p className="">Yes! We move almost all items.Be sure to let you Gorilla Movers Representative know ahead of time in case requirs a third mover or special equipment</p>
                            {/* <div className="py-1">&nbsp;</div> */}
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-4 mb-2 mt-5" data-aos="flip-left">
                        <div className="border p-4">
                            <i className="fa-solid fa-circle-question fs-1 questionIcon" style={{ "color": "rgb(25, 116, 207)" }}></i>
                            <p className="fs-5 fw-bold">How do you take care of fragile items/antiques?</p>
                            <p className="">its your mission to move your belongings safely and securely.To ensure your items are moved unharmed, we carefully pad and shrink wrap them.</p>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-4 mt-5" data-aos="fade-down">
                        <div className="border p-4">
                            <i className="fa-solid fa-circle-question fs-1 questionIcon" style={{ "color": "rgb(25, 116, 207)" }}></i>
                            <p className="fs-5 fw-bold">Can you pack my stuff or does it have to be packed?</p>
                            <p className="">We are happy to pack your stuff! Be sure to tell us prior to the move to ensure efficeincy. To minimize costs, customer have the opinion to pack their belongings.</p>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
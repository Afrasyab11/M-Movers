import React from "react";
import Aos from "aos";
import 'aos/dist/aos.css'
export default class QuestionSection extends React.Component {
 
    componentDidMount() {
        Aos.init({ duration: 1000 })
    }
    render() {
        return (
            <div className="container-fluid">
                <div className="row text-center mt-5 ">
                    <div className="col-md-12 col-lg-12 ">{this.props.texts.faq}</div>
                    <div className="col-md-12 col-lg-12 fs-3 fw-bold">{this.props.texts.faqStandFor}</div>
                </div>
                <div className="row text-center mt-3">
                    <div className="col-sm-12 col-md-4 mt-5" data-aos="fade-right">
                        <div className="border  p-4">
                            <i className="fa-solid fa-circle-question fs-1 questionIcon" style={{ "color": "rgb(25, 116, 207)" }}></i>
                            <p className="fs-5 fw-bold ">{this.props.texts.faqcard1Ques}</p>
                            <p className="">{this.props.texts.faqcard1Ans}</p>
                            {/* <div className="py-1">&nbsp;</div> */}
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-4 mb-2 mt-5" data-aos="flip-left">
                        <div className="border p-4">
                            <i className="fa-solid fa-circle-question fs-1 questionIcon" style={{ "color": "rgb(25, 116, 207)" }}></i>
                            <p className="fs-5 fw-bold">{this.props.texts.faqcard2Ques}</p>
                            <p className="">{this.props.texts.faqcard2Ans}</p>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-4 mt-5" data-aos="fade-down">
                        <div className="border p-4">
                            <i className="fa-solid fa-circle-question fs-1 questionIcon" style={{ "color": "rgb(25, 116, 207)" }}></i>
                            <p className="fs-5 fw-bold">{this.props.texts.faqcard3Ques}</p>
                            <p className="">{this.props.texts.faqcard3Ans}</p>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
import React, { Component } from "react";
import IntroPage from "./IntroPage";
import Service from "./Services";
import RateListComp from "./RateListComp";
import ContactComp from "./contactComp";
import ClientReview from "./clienReview";
import QuestionSection from "./questionSection";
import ReviewForm from "./reviewForm";


export default class HomePage extends Component {
 

  render() {
    return (
      <div>
        
        <IntroPage texts={this.props.texts} lang={this.props.lang} />
        <Service texts={this.props.texts} />
        <RateListComp texts={this.props.texts} lang={this.props.lang} />
        <ContactComp texts={this.props.texts} />
        <QuestionSection texts={this.props.texts} />
        <ReviewForm texts={this.props.texts} />
        <ClientReview texts={this.props.texts} />
      </div>
    );
  }
}

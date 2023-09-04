import "./App.css";
import React, { Component } from "react";
import Header from "./components/header";
import IntroPage from "./components/IntroPage";
import Service from "./components/Services";
import QuestionSection from "./components/questionSection";
import ClientReview from "./components/clienReview";
import Footer from "./components/footer";
import RateListComp from "./components/RateListComp";
import ReviewForm from "./components/reviewForm";
import ContactComp from "./components/contactComp";
import Arabic from "./components/translate/ar.json";
import English from "./components/translate/en.json";

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentLanguage: {}, 
      lang: 'English',
      texts: English,
    };
  }
  toggleLanguage = (item) => {
    console.log(item)
    const newLanguage = item === "English" ? English : Arabic;
    this.setState({
      texts: newLanguage,
      lang:item
    });
  };
  render() {
    return (
      <div>
        <Header toggleLanguage={(item) => this.toggleLanguage(item)} lang={this.state.lang}/>
        <IntroPage texts={this.state.texts} lang={this.state.lang} />
        <Service texts={this.state.texts} />
        <RateListComp texts={this.state.texts} lang={this.state.lang} />
        <ContactComp texts={this.state.texts}/>
        <QuestionSection texts={this.state.texts}/>
        <ReviewForm texts={this.state.texts}/>
        <ClientReview texts={this.state.texts}/>
        <Footer />
      </div>
    );
  }
}

export default App;

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
import { Routes, Route } from "react-router-dom";
import Arabic from "./components/translate/ar.json";
import English from "./components/translate/en.json";
import HomePage from "./components/HomePage";
import About from "./components/aboutUs";

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentLanguage: {},
      lang: "English",
      texts: English,
    };
  }
  toggleLanguage = (item) => {
    console.log(item);
    const newLanguage = item === "English" ? English : Arabic;
    this.setState({
      texts: newLanguage,
      lang: item,
    });
  };
  render() {
    return (
      <div>
        <Header
          toggleLanguage={(item) => this.toggleLanguage(item)}
          lang={this.state.lang}
        />
        <Routes>
          <Route
            path="*"
            element={
              <HomePage texts={this.state.texts} lang={this.state.lang} />
            }
          />
          <Route
            path="/intro"
            element={
              <IntroPage texts={this.state.texts} lang={this.state.lang} />
            }
          />
          <Route
            path="/service"
            element={<Service texts={this.state.texts} />}
          />
          <Route
            path="/rateListPage"
            element={
              <RateListComp texts={this.state.texts} lang={this.state.lang} />
            }
          />
          <Route
            path="/contactPage"
            element={<ContactComp texts={this.state.texts} />}
          />
          <Route
            path="/questionPage"
            element={<QuestionSection texts={this.state.texts} />}
          />
          <Route
            path="/clientPage"
            element={<ClientReview texts={this.state.texts} />}
          />
          <Route
            path="/reviewPage"
            texts={this.state.texts}
            element={<ReviewForm />}
          />
          <Route path="/footer" element={<Footer texts={this.state.texts} />} />
          <Route path="/about" element={<About texts={this.state.texts} lang={this.state.lang}/>} />
        </Routes>
      </div>
    );
  }
}

export default App;

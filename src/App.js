import './App.css';
import Header from './components/header';
import IntroPage from './components/IntroPage';
import Service from './components/Services';
import QuestionSection from './components/questionSection';
import ClientReview from './components/clienReview';
import Footer from './components/footer';
import RateListComp from './components/RateListComp';
import ReviewForm from './components/reviewForm';
// import i18n from 'i18next';

function App() {
  return (
    <div>
      <Header />
      {/* <div className='whatsappIcon'>
        <a href={`https://wa.me/+971545599867/?text=Hello! Monsoor Movers`} target="_blank"
          rel="noreferrer" className="fa-brands fa-square-whatsapp" style={{ "color": "#23c92c", fontSize: "50px" }}></a>
      </div> */}
      <IntroPage />
      <Service />
      <RateListComp />
      <QuestionSection />
      <ReviewForm/>
      <ClientReview />
      <Footer />
    </div>
  );
}

export default App;
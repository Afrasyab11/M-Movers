import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
// import { I18nextProvider } from 'react-i18next';
// import i18n from 'i18next';
// import en from './components/translate/en.json'
// import ar from './components/translate/ar.json'
// import LanguageDetector from 'i18next-browser-languagedetector';
// i18n.use(LanguageDetector)
//   .init({
//     lang: 'en',
//     fallbackLng: 'en', 
//     resources: {
//       en: {
//         translation: en,
//       },
//       ar: {
//         translation: ar,
//       },
//     },
//   });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <I18nextProvider i18n={i18n}>
    <React.StrictMode>
      <Router>
        <App />
      </Router>
    </React.StrictMode>
  // </I18nextProvider>
);

reportWebVitals();

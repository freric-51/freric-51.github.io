import React, {useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import ReactGA from "react-ga4";

const root = ReactDOM.createRoot(document.getElementById('root'));
// const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement );

//Initialize GA4
ReactGA.initialize("G-4W0ESB57EC");

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
//   ,  document.getElementById('root')
);

const SendAnalytics = ()=> {
    ReactGA.send({
      hitType: "pageview",
      page: window.location.pathname,
    });
  }

  reportWebVitals(SendAnalytics);

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// function sendToAnalytics({ id, name, value }) {
//     reportWebVitals.ga('send', 'event', {
//       eventCategory: 'Web Vitals',
//       eventAction: name,
//       eventValue: Math.round(name === 'CLS' ? value * 1000 : value), // values must be integers
//       eventLabel: id, // id unique to current page load
//       nonInteraction: true, // avoids affecting bounce rate
//     });
//   }
// // name: 'CLS' | 'FCP' | 'FID' | 'LCP' | 'TTFB'


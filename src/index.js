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



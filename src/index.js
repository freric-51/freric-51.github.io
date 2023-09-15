import React from 'react';

// eslint-disable-next-line
import {useEffect} from 'react';

import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import reportWebVitals from './reportWebVitals';

// eslint-disable-next-line
import { BrowserRouter } from 'react-router-dom';

import ReactGA from "react-ga4";

const root = ReactDOM.createRoot(document.getElementById('root'));

//Initialize GA4
ReactGA.initialize("G-4W0ESB57EC");
const SendAnalytics = ()=> {
    ReactGA.send({
      hitType: "pageview",
      page: window.location.pathname,
    });
  }

reportWebVitals(SendAnalytics);

root.render(
  <React.StrictMode>
        <App />
  </React.StrictMode>
);


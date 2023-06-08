import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
function sendToAnalytics({ id, name, value }) {
    reportWebVitals.ga('send', 'event', {
      eventCategory: 'Web Vitals',
      eventAction: name,
      eventValue: Math.round(name === 'CLS' ? value * 1000 : value), // values must be integers
      eventLabel: id, // id unique to current page load
      nonInteraction: true, // avoids affecting bounce rate
    });
  }

// function sendToAnalytics(metric) {
//     const body = JSON.stringify(metric);
//     const url = 'https://freric-51.github.io/analytics';

//     // Use `navigator.sendBeacon()` if available, falling back to `fetch()`
//     if (navigator.sendBeacon) {
//       navigator.sendBeacon(url, body);
//     } else {
//       fetch(url, { body, method: 'POST', keepalive: true });
//     }
//   }



reportWebVitals(sendToAnalytics('G-4W0ESB57EC'));


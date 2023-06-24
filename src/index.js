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

// import {IntlProvider, FormattedMessage, FormattedNumber} from 'react-intl'
// addLocaleData é uma função que provê uma maneira de registrar os dados locais da biblioteca
import { addLocaleData } from 'react-intl'
// IntlProvider é usado para configurar o contexto i18n,
//              deve ser registrado na raiz para que toda a aplicação possa ser internacionalizada
import { IntlProvider }  from 'react-intl'

// flattenMessages é a função que nivela os textos
// e messages é o objeto com as mensagens de acordo com o idioma
import { flattenMessages } from './_i18n/utils'
import messages from './_i18n/messages'

const root = ReactDOM.createRoot(document.getElementById('root'));
// const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement );

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
    <IntlProvider locale='pt' defaultLocale="pt">
        <App />
    </IntlProvider>
  </React.StrictMode>
);


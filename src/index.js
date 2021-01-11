import React from 'react';
import ReactDOM from 'react-dom';
import { Helmet } from 'react-helmet';
import App from './components/App';
import GlobalStyles from './styles/GlobalStyles';

ReactDOM.render(
  <>
    <Helmet>
      <title>Recruitment Task</title>
      <meta name="Recruitment Task" content="Recruitment Task" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@500;700&display=swap"
        rel="stylesheet"
      />
    </Helmet>
    <React.StrictMode>
      <GlobalStyles />
      <App />
    </React.StrictMode>
  </>,
  document.getElementById('root')
);

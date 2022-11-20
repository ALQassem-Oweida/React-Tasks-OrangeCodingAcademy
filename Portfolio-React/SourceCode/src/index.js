import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const main = ReactDOM.createRoot(document.getElementById('main'));
main.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);



reportWebVitals();

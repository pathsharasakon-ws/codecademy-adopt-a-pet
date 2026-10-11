import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

const { worker } = require('./mocks/browser');

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
worker.start().then(() => {
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
}).catch((error) => {
  console.error('Unable to start the mock API:', error);
  container.textContent = 'Unable to load the app. Please refresh and try again.';
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

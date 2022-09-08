import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './contextAPI/App';
// import App from './redux-ecommerce/App';
import App from './saga/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

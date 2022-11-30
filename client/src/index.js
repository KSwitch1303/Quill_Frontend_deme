import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Text from './Text';
import './style.css'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Text />
  </React.StrictMode>
)
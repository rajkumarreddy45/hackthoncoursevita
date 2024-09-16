// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App'; // Ensure the path is correct

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import './main.scss';
import App from './App';

const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors({
  origin: ["http://localhost:3000/"]
}))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
//import Fontawesome from "react-fontawesome";
//import  Bootstrap from "react-bootstrap";

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

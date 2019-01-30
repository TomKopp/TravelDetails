import './main.css';
import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import Trips from 'tripslist';


const [trip] = Trips;

window.addEventListener(
    'load',
    () => ReactDOM.render(<App title={document.title} trip={trip} />, document.getElementById('root'))
);

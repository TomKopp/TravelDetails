import './main.css';
import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import Trips from 'tripslist';


const [trip] = Trips;

window.TravelDetailsRender = function TravelDetailsRender(DomNode) {
    return ReactDOM.render(<App title={document.title} trip={trip} />, DomNode);
};

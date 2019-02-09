/* eslint-disable no-underscore-dangle */
import './main.css';
import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import Trips from 'tripslist';


const [trip] = Trips;

window.TravelDetailsRender = function TravelDetailsRender(DocumaComponentsTravelDetails) {
    ReactDOM.render(
        <App travelDetails={DocumaComponentsTravelDetails} trip={trip} />
        , document.getElementById(DocumaComponentsTravelDetails._renderTargetId)
    );
};

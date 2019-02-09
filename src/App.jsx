import { AppBar, CssBaseline, Toolbar, Typography } from '@material-ui/core';
import React, { Component } from 'react';
import Trip from './Trip';
import TripSection from './TripSection';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.travelDetails = props.travelDetails;
        this.state = {
            trip: props.trip
            , title: props.trip.title || 'Generic Title'
            , sectionsList: props.trip.sections || []
        };
    }

    render() {
        return <>
            <CssBaseline />
            <AppBar position="static">
                <Toolbar>
                    <Typography component="h1" variant="h6" color="inherit">{this.state.title}</Typography>
                </Toolbar>
            </AppBar>
            <div style={{ padding: '16px', maxWidth: '1050px', margin: 'auto' }}>
                {/* eslint-disable-next-line no-magic-numbers */}
                {this.state.sectionsList.length > 1 ? <Trip {...this.state.trip} /> : <></>}
                {this.state.sectionsList.map((el) => <TripSection key={el.id} {...el} />)}
            </div>
            </>;
    }
};

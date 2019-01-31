import { AppBar, CssBaseline, Grid, Toolbar, Typography } from '@material-ui/core';
import React, { Component } from 'react';
import Trip from './Trip';
import TripSection from './TripSection';

export default class App extends Component {
    constructor(props) {
        super(props);

        const notRated = -1;
        const sectionList = props.trip.sections || [];

        this.state = {
            isCurrentTrip: false
            , id: props.trip.id
            , title: props.trip.title || 'Generic Title'
            , startDate: props.trip.startDate
            , endDate: props.trip.endDate
            , rating: props.trip.rating || notRated
            , sectionList
            , mediaList: sectionList.reduce((carry, el) => carry.concat(el.mediaList), [])
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
            <div style={{ padding: '16px' }}>
                <Trip {...this.props.trip} />
                {this.state.sectionList.map((el) => <TripSection key={el.id} {...el} />)}
            </div>
            </>;
    }
};

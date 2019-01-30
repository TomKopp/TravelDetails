import { AppBar, CssBaseline, Grid, Toolbar, Typography } from '@material-ui/core';
import React, { Component } from 'react';

export default class App extends Component {
    constructor(props) {
        super(props);

        const notRated = -1;

        this.state = {
            isCurrentTrip: false
            , id: props.id
            , title: props.title || 'Generic Title'
            , startDate: props.startDate
            , endDate: props.endDate
            , rating: props.rating || notRated
            , sectionList: props.sections || []
        };
    }

    handleChange(name) {
        return (event) => this.setState({ [name]: event.target.value });
    }

    render() {
        return <>
            <CssBaseline />
            <AppBar position="static">
                <Toolbar>
                    <Typography component="h1" variant="h6" color="inherit">{this.props.title}</Typography>
                </Toolbar>
            </AppBar>
            <div style={{ padding: '16px' }}>
                <Grid container spacing={16}>
                    {this.state.sectionList.map((el) => <Grid key={el.id} item className="app-grid-item"></Grid>)}
                </Grid>
            </div>
            </>;
    }
};

import { Business, Class, EuroSymbol, Flight, FlightLand, FlightTakeoff, Timer } from '@material-ui/icons';
import { Grid, Paper, Typography } from '@material-ui/core';
import React from 'react';

export default ({ type, flights }) => {
    const title = type;
    const price = 'drölf';

    return <Paper className="paper" component="article">
        <Grid container spacing={16}>
            <Grid item xs={12}>
                <Typography gutterBottom variant="h5" component="h1">{title}</Typography>
            </Grid>
            {flights.map(({ startDate, endDate, flightNo, airline, cabinClass, travelTime }, key) => <Grid key={key} item container spacing={16}>
                <Grid item xs={12}><Typography gutterBottom>{flightNo && <span className="ico-string"><Flight />Flight number: {flightNo}</span>}</Typography></Grid>
                <Grid item xs={12} sm={6}>
                    <Typography gutterBottom>
                        {startDate && <span className="ico-string"><FlightTakeoff />Begin: {startDate.toDateString()}</span>}
                        {endDate && <span className="ico-string"><FlightLand />End: {endDate.toDateString()}</span>}
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography gutterBottom>
                        {travelTime && <span className="ico-string"><Timer />Travel time: {travelTime}min</span>}
                        {cabinClass && <span className="ico-string"><Class />Cabin class: {cabinClass}</span>}
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography gutterBottom>
                        {airline && <span className="ico-string"><Business />Airline: {airline.name}</span>}
                        {price && <span className="ico-string"><EuroSymbol />Price: {price}</span>}
                    </Typography>
                </Grid>
            </Grid>)}

            {/* eslint-disable-next-line no-inline-comments */}
            {/* <Grid>
                <Typography gutterBottom>{location && <span className="ico-string"><Place />{location}</span>}</Typography>

                <Typography gutterBottom>
                    {content.map((el, key) => <Typography key={key} gutterBottom component="span">{el}</Typography>)}
                </Typography>
            </Grid>
            <Grid item container justify="flex-end">
                <Button variant="contained" color="primary">Change</Button>
            </Grid> */}
        </Grid>
    </Paper>;
};

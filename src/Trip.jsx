import { Button, Grid, Paper, Typography } from '@material-ui/core';
import { FlightLand, FlightTakeoff, Hotel, Star } from '@material-ui/icons';
import MediaList from './MediaList';
import React from 'react';

export default ({ title = 'Generic Title', startDate, endDate, rating, sections = [] }) => {

    const mediaList = sections
        .reduce((carry, el) => carry.concat(el.mediaList), []);
    const hotelsNameList = sections
        .filter((el) => Boolean(el.hotel))
        .map((el) => el.hotel.name)
        .join(', ');

    return <Paper className="section" component="article">
        <Grid container spacing={16}>
            <Grid item xs={12} sm={5}>
                <MediaList children={mediaList} />
            </Grid>
            <Grid item container xs={12} sm={7}>
                <Grid item xs={12}><Typography gutterBottom variant="h4" component="h1">{title}</Typography></Grid>
                <Grid item xs={6}><Typography gutterBottom>{startDate && <span className="ico-string"><FlightTakeoff />{startDate.toDateString()}</span>}</Typography></Grid>
                <Grid item xs={6}><Typography gutterBottom>{endDate && <span className="ico-string"><FlightLand />{endDate.toDateString()}</span>}</Typography></Grid>
                <Grid item xs={6}><Typography gutterBottom>{hotelsNameList && <span className="ico-string"><Hotel />{hotelsNameList}</span>}</Typography></Grid>
                <Grid item xs={6}><Typography gutterBottom>{rating && <span className="ico-string"><Star />Rating: {rating}</span>}</Typography></Grid>
                <Grid item xs={12} container justify="flex-end">
                    <Button variant="contained" color="primary">Select</Button>
                </Grid>
            </Grid>
        </Grid>
    </Paper>;
};

import { Button, Grid, Paper, Typography } from '@material-ui/core';
import { FlightLand, FlightTakeoff, Hotel, Star } from '@material-ui/icons';
import MediaList from './MediaList';
import React from 'react';

export default (props) => {
    const sectionList = props.sections || [];
    const sectionHotel = sectionList.find((el) => Boolean(el.hotel));
    const mediaList = sectionList.reduce((carry, el) => carry.concat(el.mediaList), []);
    const title = props.title || 'Generic Title';
    const hotel = sectionHotel ? sectionHotel.hotel : null;
    const content = props.content || [];
    const { startDate, endDate, rating } = props;

    return <Paper className="section" component="article">
        <Grid container spacing={16}>
            <Grid item xs={12} sm={5}>
                <MediaList children={mediaList} />
            </Grid>
            <Grid item container xs={12} sm={7}>
                <Grid item xs={12}><Typography gutterBottom variant="h4" component="h1">{title}</Typography></Grid>
                <Grid item xs={6}><Typography gutterBottom>{startDate && <span className="ico-string"><FlightTakeoff />{startDate.toDateString()}</span>}</Typography></Grid>
                <Grid item xs={6}><Typography gutterBottom>{endDate && <span className="ico-string"><FlightLand />{endDate.toDateString()}</span>}</Typography></Grid>
                <Grid item xs={6}><Typography gutterBottom>{hotel && <span className="ico-string"><Hotel />{hotel.name}</span>}</Typography></Grid>
                <Grid item xs={6}><Typography gutterBottom>{rating && <span className="ico-string"><Star />Rating: {rating}</span>}</Typography></Grid>
                <Grid item xs={12}>
                    <Typography gutterBottom>
                        {content.map((el, id) => <Typography key={id} gutterBottom component="span">{el}</Typography>)}
                    </Typography>
                </Grid>
                <Grid item container justify="flex-end">
                    <Button variant="contained" color="primary">Select</Button>
                </Grid>
            </Grid>
        </Grid>
    </Paper>;
};

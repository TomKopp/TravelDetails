import { Button, Grid, Paper, Typography } from '@material-ui/core';
import { CalendarToday, EuroSymbol, Place, Star } from '@material-ui/icons';
import MediaList from './MediaList';
import React from 'react';

export default ({ name, city: location, bookingStart: startDate, bookingEnd: endDate, offers, hotelImageUrls, rating }) => <Paper className="paper" component="article">
    <Grid container spacing={16}>
        <Grid item xs={12}>
            <Typography gutterBottom variant="h5" component="h1">{name}</Typography>
        </Grid>
        <Grid item xs={12} sm={5}>
            <MediaList children={hotelImageUrls.map((el) => ({ type: 'img', src: el }))} />
        </Grid>
        <Grid item xs={12} sm={7}>
            <Typography gutterBottom>
                {startDate && <span className="ico-string"><CalendarToday />Begin: {startDate.toDateString()}</span>}
                {endDate && <span className="ico-string"><CalendarToday />End: {endDate.toDateString()}</span>}
            </Typography>
            <Typography gutterBottom>
                {rating && <span className="ico-string"><Star />Rating: {rating}</span>}
            </Typography>
            <Typography gutterBottom>{location && <span className="ico-string"><Place />{location}</span>}</Typography>

            {offers.map((el, key) => <Typography key={key} gutterBottom>
                <span className="ico-string">{el.name}</span>
                <span className="ico-string"><EuroSymbol />{el.pricePerNight}</span>
            </Typography>)}
        </Grid>
        <Grid item container justify="flex-end">
            <Button variant="contained" color="primary">Change</Button>
        </Grid>
    </Grid>
</Paper>;

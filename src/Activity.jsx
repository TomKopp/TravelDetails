import { Button, Grid, Paper, Typography } from '@material-ui/core';
import { CalendarToday, EuroSymbol, Place, Star } from '@material-ui/icons';
import MediaList from './MediaList';
import React from 'react';

export default ({ location, startDate, endDate, content, mediaList, rating, price }) => {
    const title = content.shift();

    return <Paper className="paper" component="article">
        <Grid container spacing={16}>
            <Grid item xs={12}>
                <Typography gutterBottom variant="h5" component="h1">{title}</Typography>
            </Grid>
            <Grid item xs={12} sm={5}>
                <MediaList children={mediaList} />
            </Grid>
            <Grid item xs={12} sm={7}>
                <Typography gutterBottom>
                    {startDate && <span className="ico-string"><CalendarToday />Begin: {startDate.toDateString()}</span>}
                    {endDate && <span className="ico-string"><CalendarToday />End: {endDate.toDateString()}</span>}
                </Typography>
                <Typography gutterBottom>
                    {rating && <span className="ico-string"><Star />Rating: {rating}</span>}
                    {price && <span className="ico-string"><EuroSymbol />Price: {price}</span>}
                </Typography>
                <Typography gutterBottom>{location && <span className="ico-string"><Place />{location}</span>}</Typography>

                <Typography gutterBottom>
                    {content.map((el, key) => <Typography key={key} gutterBottom component="span">{el}</Typography>)}
                </Typography>
            </Grid>
            <Grid item container justify="flex-end">
                <Button variant="contained" color="primary">Change</Button>
            </Grid>
        </Grid>
    </Paper>;
};

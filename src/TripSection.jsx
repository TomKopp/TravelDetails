import React from 'react';

// export default class TripSection extends Component {}

// Rating component
// Transportation component
// Accomodation component

export default ({ content, mediaList, location, rating }) => {
    const [contentFirst, ...contentRest] = content;

    return <section className="trip-section">
        <h1>{contentFirst}</h1>
        {rating && <b className="rating">Rating: {rating}</b>}
        {location && <p className="location">{location}</p>}
        {contentRest && <p className="content">{contentRest.map((el, key) => <span key={key}>{el}</span>)}</p>}
    </section>;
};

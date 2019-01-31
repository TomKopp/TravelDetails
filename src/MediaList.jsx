import { GridList, GridListTile, GridListTileBar } from '@material-ui/core';
import React from 'react';

export default ({ children }) => <GridList className="media-list" cols={1} cellHeight={'auto'}>
    {children.map(({ type, src, description }, key) => {
        const Content = type ? type : 'img';
        return <GridListTile key={key} className="media-list-tile">
            <Content className="media-list-tile-media" src={src} />
            {description && <GridListTileBar className="media-list-tile-description" title={description} />}
        </GridListTile>;
    })}
</GridList>;

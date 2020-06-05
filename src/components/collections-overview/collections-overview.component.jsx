import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionsPreview } from '../../redux/shop/shop.selector';
import PreviewCollection from '../preview-collection/preview-collection.component';
import './collections-overview.styles.scss';

const CollectionOverview = ({collections}) => {
    return (

        <div className="collections-overview">
            {
                collections.map(({id, ...CollectionProps })=> (
                <PreviewCollection key='id' {...CollectionProps}>
                </PreviewCollection>
                ))
            }

        </div>
        
    );
}

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsPreview
})


export default connect(mapStateToProps)(CollectionOverview);
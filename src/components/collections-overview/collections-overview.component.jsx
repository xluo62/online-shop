import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionsPreview } from '../../redux/shop/shop.selector';
import CollectionPreview from '../preview-collection/preview-collection.component';
import './collections-overview.styles.scss';

const CollectionOverview = ({collections}) => {
    return (
        <div className="collections-overview">
            { //Trade off, we can 
                collections.map(({id, ...CollectionProps })=> (
                <CollectionPreview key='id' {...CollectionProps}>
                </CollectionPreview>
                ))
            }
        </div>
        
    );
}

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsPreview
})


export default connect(mapStateToProps)(CollectionOverview);
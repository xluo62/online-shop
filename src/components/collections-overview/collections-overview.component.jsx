import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionsPreview } from '../../redux/shop/shop.selector';
import CollectionPreview from '../preview-collection/preview-collection.component';
import './collections-overview.styles.scss';


const changeCollections = (collections) => {
   const array1 =  collections.filter(({title}) => title !== "Womens" && title !== "Mens");
   
   const array2 =  collections.filter(({title}) => title === "Womens" || title === "Mens");
   return array2.concat(array1);
}


const CollectionOverview = ({collections}) => {

    const reorderedCollections = changeCollections(collections);
   

    return (
        <div className="collections-overview">
            { //Trade off, we can 
                reorderedCollections.map(({id, ...CollectionProps })=> (
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
import React from 'react';
import CollectionItem from '../../components/collection-item/collection-item.component';
import { connect } from 'react-redux';
import './collection.styles.scss';
import { selectCollection } from '../../redux/shop/shop.selector';

const CollectionPage = (props) => {
    console.log(props.collection);
    const { title, items } = props.collection;
    return(
        <div className="collection-page">
            <h2 className="title">{ title }</h2>
            <div className="items">
                {//here we use the same component collectionItem as before.
                    items.map( item => 
                        <CollectionItem key={item.id} item={item}/>
                        )
                }
            </div>
        </div>
    );
}




const mapStateToProps = (state, ownProps) => {
    console.log('i am called');
    return (
        {
            
            collection: selectCollection(ownProps.match.params.collectionId)(state)
        }
    );
}
    
export default connect(mapStateToProps)(CollectionPage);
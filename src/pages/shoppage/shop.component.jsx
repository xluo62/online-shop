import React from 'react';
import { Route } from 'react-router-dom';

import { connect } from 'react-redux';


import CollectionPage from '../collection/collection.component';
import CollectionOverView from '../../components/collections-overview/collections-overview.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

import { createStructuredSelector } from 'reselect';
import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';
import { selectIsCollectionFetching, selectIsCollectionLoaded } from '../../redux/shop/shop.selector';
// class ShopPage extends React.Component{
//     constructor(props){
//         super(props);

//         this.state = {
//             collections: SHOP_DATA
//         };
//     }

//     render() {
//        // const {collections} = this.state;
//         return (

//             <div className="shop-page">
//                 {
//                     this.state.collections.map(({id, ...CollectionProps })=> (
//                     <PreviewCollection key='id' {...CollectionProps}>
//                     </PreviewCollection>
//                     ))
//                 }

//             </div>
            
//         );
//     }
// }
const CollectionOverViewWithSpinner = WithSpinner(CollectionOverView);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);
class  ShopPage extends React.Component {
   
   //unsubscribe
   //unsubscribeFromSnapshot = null;
   componentDidMount() {
      const { fetchCollectionsStartAsync } = this.props;
       fetchCollectionsStartAsync();

    //    const {updateCollections} = this.props;
    //    const collectionRef = firestore.collection('collections');
    
    //    //建立第二个observer 返回一个querySnapShot
    //    collectionRef.onSnapshot( async snapshot => {
    //        const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
    //        updateCollections(collectionsMap);
    //        this.setState({loading: false});
    //        console.log(collectionsMap);
    //    } );
   }
   render() {
    const {match, isCollectionFetching, isCollectionLoaded} = this.props;
    
    return (
        <div className="shop-page">
            <Route exact path={`${match.path}`} render={props => (
                <CollectionOverViewWithSpinner isLoading={isCollectionFetching} {...props} />
            )}/> 
            <Route path={`${match.path}/:collectionId`} render={props => (
                <CollectionPageWithSpinner isLoading={!isCollectionLoaded} {...props} />
            )}/> 
        </div>
    );
   }
   
}
const mapDispatchToProps = dispatch => ({
    fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
})
const mapStateToProps = createStructuredSelector({
    isCollectionFetching: selectIsCollectionFetching,
    isCollectionLoaded: selectIsCollectionLoaded
})
export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);



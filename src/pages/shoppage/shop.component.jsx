import React, { useEffect} from 'react';
import { Route } from 'react-router-dom';

import { connect } from 'react-redux';

import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
import CollectionPageContainer from '../../pages/collection/collection.container';
import { fetchCollectionsStart } from '../../redux/shop/shop.actions';

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


const ShopPage = ({ fetchCollectionsStart, match }) => {

   //unsubscribe
   //unsubscribeFromSnapshot = null;

   useEffect(() => {
    fetchCollectionsStart();
   }, [fetchCollectionsStart]);
   
       

    //    const {updateCollections} = this.props;
    //    const collectionRef = firestore.collection('collections');
    
    //    //建立第二个observer 返回一个querySnapShot
    //    collectionRef.onSnapshot( async snapshot => {
    //        const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
    //        updateCollections(collectionsMap);
    //        this.setState({loading: false});
    //        console.log(collectionsMap);
    //    } );
   
   
    
    
    return (
        <div className="shop-page">
            {/* <Route exact path={`${match.path}`} render={props => (
                <CollectionOverViewWithSpinner isLoading={isCollectionFetching} {...props} />
            )}/>  */}
            <Route exact path={`${match.path}`} component={CollectionsOverviewContainer} />
            
            {/* <Route path={`${match.path}/:collectionId`} render={props => (
                <CollectionPageWithSpinner isLoading={!isCollectionLoaded} {...props} />
            )}/>  */}
             <Route path={`${match.path}/:collectionId`} component={CollectionPageContainer}/>
           
        </div>
    );
   
   
}
const mapDispatchToProps = dispatch => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
})

export default connect(null, mapDispatchToProps)(ShopPage);



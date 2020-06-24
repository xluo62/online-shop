import React from 'react';
import { Route } from 'react-router-dom';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';

import { updateCollections } from '../../redux/shop/shop.actions';
import CollectionPage from '../collection/collection.component';
import CollectionOverView from '../../components/collections-overview/collections-overview.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

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
   constructor(props) {
       super(props);
       this.state = {
        loading: true
       };
   }
   //unsubscribe
   unsubscribeFromSnapshot = null;
   componentDidMount() {
       const {updateCollections} = this.props;
       const collectionRef = firestore.collection('collections');
    
       //建立第二个observer 返回一个querySnapShot
       collectionRef.onSnapshot( async snapshot => {
           const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
           updateCollections(collectionsMap);
           this.setState({loading: false});
           console.log(collectionsMap);
       } );
   }
   render() {
    const {match} = this.props;
    const {loading} = this.state;
    return (
        <div className="shop-page">
            <Route exact path={`${match.path}`} render={props => (
                <CollectionOverViewWithSpinner isLoading={loading} {...props} />
            )}/> 
            <Route path={`${match.path}/:collectionId`} render={props => (
                <CollectionPageWithSpinner isLoading={loading} {...props} />
            )}/> 
        </div>
    );
   }
   
}
const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})

export default connect(null, mapDispatchToProps)(ShopPage);



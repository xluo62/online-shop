import React from 'react';
import { Route } from 'react-router-dom';
import CollectionPage from '../collection/collection.component';
import CollectionOverView from '../../components/collections-overview/collections-overview.component';

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

const ShopPage = ({match}) => {
    return (

        <div className="shop-page">
            <Route exact path={`${match.path}`} component={CollectionOverView}/> 
            <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
        </div>
        
    );
}


export default (ShopPage);



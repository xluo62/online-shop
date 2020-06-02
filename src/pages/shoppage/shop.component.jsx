import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollections } from '../../redux/shop/shop.selector';
import PreviewCollection from '../../components/preview-collection/preview-collection.component';

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

const ShopPage = ({collections}) => {
    return (

        <div className="shop-page">
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
    collections: selectCollections
})
export default connect(mapStateToProps)(ShopPage);



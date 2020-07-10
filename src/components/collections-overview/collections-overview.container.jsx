import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
//compose the component from right to left.
import { selectIsCollectionFetching } from '../../redux/shop/shop.selector';

import CollectionsOverview from './collections-overview.component';
import WithSpinner from '../with-spinner/with-spinner.component';
//we need to make sure that the mapStatetoProps is the name that our wrapped component needed. Beacuse it is passed automatically as props
//we cannot intercept in the middle.
const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCollectionFetching
})
const CollectionsOverviewContainer = compose(
    connect(mapStateToProps), WithSpinner)(CollectionsOverview);


export default CollectionsOverviewContainer;


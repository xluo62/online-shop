import ShopActionTypes from './shop.types';
import { firestore ,convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';
export const fetchCollectionsStart = () => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_START
});

export const fetchCollectionsSuccess = collectionsMap => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap
})
export const fetchCollectionsFailure = errorMessage => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload: errorMessage
})
// the functionality of redux-thunk
//We can dispatch multiple actions and handle async code inside of it
export const fetchCollectionsStartAsync = () => {
    return dispatch => {
        const collectionRef = firestore.collection('collections');
        dispatch(fetchCollectionsStart());
        //    //建立第二个observer 返回一个querySnapShot
        collectionRef.onSnapshot( (async snapshot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
            dispatch(fetchCollectionsSuccess(collectionsMap));
        }), (async error => dispatch(fetchCollectionsFailure(error.message))) );
    }
}
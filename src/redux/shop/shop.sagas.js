import { takeLatest, call, put, all } from 'redux-saga/effects';
//listen every action of specified types we passed in
import ShopActionTypes from './shop.types';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';
import { fetchCollectionsSuccess, fetchCollectionsFailure } from './shop.actions';

export function* fetchCollectionsAsync() {

    try {
        yield console.log('I am fired');
        //get collectionRef
        const collectionRef = firestore.collection('collections');
        const snapShot = yield collectionRef.get();
        //use yield to prevent the function from running too long
        //adding more yield as we can, make us easier to debug.
        const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapShot);
        //put is the saga effect to dispatch actions
        yield put(fetchCollectionsSuccess(collectionsMap));
    } catch(error) {
        yield put(fetchCollectionsFailure(error.message));
    }
    
}


export function* fetchCollectionsStart() {
    //this is how we actually are able to trigger more code to run. The second param is another generator function  
    yield takeLatest(ShopActionTypes.FETCH_COLLECTIONS_START, fetchCollectionsAsync);
}

export function* shopSagas() {
    yield all([call(fetchCollectionsStart)]);
}
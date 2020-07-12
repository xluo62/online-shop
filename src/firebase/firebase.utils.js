import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDL20i1Wyz1B9gxQoI57tsNxKdR44-s4B4",
    authDomain: "online-shop-db-cfbd3.firebaseapp.com",
    databaseURL: "https://online-shop-db-cfbd3.firebaseio.com",
    projectId: "online-shop-db-cfbd3",
    storageBucket: "online-shop-db-cfbd3.appspot.com",
    messagingSenderId: "1082932872140",
    appId: "1:1082932872140:web:5881aef9387b7f09109369",
    measurementId: "G-HHLKJQT7HZ"
  };
  //这个function负责存储数据库
  export const createUserProfileDocument = async (userAuth, additionalData) => {
      if (!userAuth){
          return;
      }
      //get back docRef from firebase;
      const userRef =  firestore.doc(`user/${userAuth.uid}`);
      //get back docSanpShotObj by using .get()
      const snapShot = await userRef.get();
      //console.log(userRef);
      if(!snapShot.exists){
          //add this
          const { displayName, email } = userAuth;
          const createdAt = new Date();
          try {
              await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
              })
          } catch(error){
            console.log("error creating user", error.message);
          }
      }
      return userRef;
  }

  //this function is not async. Only change the array to object.
  export const convertCollectionsSnapshotToMap = (collections) => {
    const transformCollection = collections.docs.map(doc => {
      const { title, items} = doc.data();
      return {
        title,
        items,
        routeName: encodeURI(title.toLowerCase()),
        id: doc.id
      };
    });
    return transformCollection.reduce( (accumulator, collection) => {
      accumulator[collection.title.toLowerCase()] = collection;
      return accumulator;}, {}
   );
  }
  firebase.initializeApp(firebaseConfig);
  export const addCollectionsAndDocuments = async (CollectionKey, ObjectToAdd) => {
    const collectionRef = firestore.collection(CollectionKey);
    //upload in a batch. 
    const batch = firestore.batch();
    //objectToADD is an array of objects. use for each to manipulate each object
    ObjectToAdd.forEach(obj => {
      //generate a new docRef obj for me, with a random id.
     const newDocRef = collectionRef.doc();
     batch.set(newDocRef, obj);
    });
    //this returns promise;
    return await batch.commit();
  }
  export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
      const unsubscribe = auth.onAuthStateChanged(userAuth => {
        unsubscribe();
        resolve(userAuth);
      }, reject);
    })
  }
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  export const googleProvider = new firebase.auth.GoogleAuthProvider();
  googleProvider.setCustomParameters({ prompt: 'select_account' });

  export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

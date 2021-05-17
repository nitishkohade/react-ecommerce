import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyBbNWpn_1T5Z4_cPIjTBcEI8JAENsExky0",
    authDomain: "online-shop0.firebaseapp.com",
    projectId: "online-shop0",
    storageBucket: "online-shop0.appspot.com",
    messagingSenderId: "997325830572",
    appId: "1:997325830572:web:3307e27cd017fc7f9f6209",
    measurementId: "G-LPNFSYG996"
  };

  firebase.initializeApp(config)
  
  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)

    const snapShot = await userRef.get()

    if(!snapShot.exists) {
      const {displayName, email} = userAuth
      const createdAt = new Date();

      try{
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      } catch(error) {
        console.log('error creating user', error.message)
      }
    }

    return userRef
  }

  export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey)

    const batch = firestore.batch()
    objectsToAdd.forEach(
      obj => {
        const newDocRef = collectionRef.doc(obj.title)
        console.log(newDocRef)
        batch.set(newDocRef, obj)
      }
    )
    return await batch.commit()
  }
 
  export const convertCollectionsSnapshotToMap = (collections) => {
    const transformedCollection = collections.docs.map(
      doc => {
        const {title, items} = doc.data()

        return {
          routeName: encodeURI(title.toLowerCase()),
          id: doc.id,
          title, items
        }
      }
    )

    return transformedCollection.reduce((accumulator, collection) => {
      accumulator[collection.title.toLowerCase()] = collection
      return accumulator
    }, {})
  }

  export const auth = firebase.auth()
  export const firestore = firebase.firestore()

  const provider = new firebase.auth.GoogleAuthProvider()
  provider.setCustomParameters({ prompt: 'select_account' })
  export const signInWithGoogle = () => auth.signInWithPopup(provider)

  export default firebase
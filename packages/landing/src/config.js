import firebase from 'firebase'
import '@firebase/firestore'

const config = {
  apiKey: 'AIzaSyBSEpbcnBdE3VXVNc_xQY4wgCvy--wLFS4',
  authDomain: 'responsivy.firebaseapp.com',
  databaseURL: 'https://responsivy.firebaseio.com',
  projectId: 'responsivy',
  storageBucket: 'responsivy.appspot.com',
  messagingSenderId: '306264440116',
  appId: '1:306264440116:web:0184cd55716a1842a57961',
  measurementId: 'G-6MT6M77K4Z'
}

!firebase.apps.length && firebase.initializeApp(config)

const db = firebase.firestore()
const auth = firebase.auth()

export { db, auth }

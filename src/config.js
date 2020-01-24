import Firebase from 'firebase'
let config = {
    apiKey: 'AIzaSyDeFDkoGOGPMIuwVgQnJwM7mppHq1YF8OE',
    authDomain: 'grocerystore-7754e.firebaseapp.com',
    databaseURL: 'https://grocerystore-7754e.firebaseio.com',
    projectId: 'grocerystore-7754e',
    storageBucket: 'grocerystore-7754e.appspot.com',
    messagingSenderId: '669220771059',
    appId: '1:669220771059:web:ce1a5989f57fefee9f9386',
    measurementId: 'G-EPJP4YPWDF',
}
let app = Firebase.initializeApp(config)
export const db = app.database()

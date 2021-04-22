
// const firebaseConfig = {
//           apiKey: "AIzaSyD1DPShTzDTnMM4wH59DjnU9IVRoqiwzzk",
//           authDomain: "todo-app-d8a24.firebaseapp.com",
//           projectId: "todo-app-d8a24",
//           storageBucket: "todo-app-d8a24.appspot.com",
//           messagingSenderId: "1053496967638",
//           appId: "1:1053496967638:web:81d2481305abfb432e2477",
//           measurementId: "G-DWX004N67H"
//         };

        import firebase from 'firebase'

        const firebaseApp = firebase.initializeApp({
          apiKey: "AIzaSyD1DPShTzDTnMM4wH59DjnU9IVRoqiwzzk",
          authDomain: "todo-app-d8a24.firebaseapp.com",
          projectId: "todo-app-d8a24",
          storageBucket: "todo-app-d8a24.appspot.com",
          messagingSenderId: "1053496967638",
          appId: "1:1053496967638:web:81d2481305abfb432e2477",
          measurementId: "G-DWX004N67H"
        })

        const db = firebaseApp.firestore()

  export default db
//         export {db}
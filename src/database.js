
//       var config = {
//         apiKey: "AIzaSyAc14wfNVZScC-9u1YPqwEfCC09v3KE49Q",
//         authDomain: "conuhacks2019-d7b13.firebaseapp.com",
//         databaseURL: "https://conuhacks2019-d7b13.firebaseio.com",
//         projectId: "conuhacks2019-d7b13",
//         storageBucket: "conuhacks2019-d7b13.appspot.com",
//         messagingSenderId: "992278114219"
//       };
//       firebase.initializeApp(config);
// const admin = require('firebase-admin');
// const functions = require('firebase-functions');

// var db = firebase.database();
var db = firebase.firestore();
// admin.initializeApp(functions.config().firebase);

// <script src="https://www.gstatic.com/firebasejs/5.5.5/firebase-app.js"></script>;
// <script src="https://www.gstatic.com/firebasejs/5.5.5/firebase-firestore.js"></script>;

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        // User is signed in.  
        
        var displayName = user.displayName;
        var email = user.email;
        var emailVerified = user.emailVerified;
        var photoURL = user.photoURL;
        var isAnonymous = user.isAnonymous;
        var uid = user.uid;
        var providerData = user.providerData;
        // ...
    } else {
        // User is signed out.
        // ...
    }
});


function submitOrderData () {
   //need to get the company/store name here
   let item = document.querySelector("#nameField").value;
   let quantity = document.querySelector("#quantField").value;
   let temp = [item, quantity];
   var setDoc = db.collection('Receivers').doc(uid).set(temp);
   toOrders();

}

//
// var docData = {
//     stringExample: "Hello world!",
//     booleanExample: true,
//     numberExample: 3.14159265,
//     dateExample: new Date("December 10, 1815"),
//     arrayExample: [5, true, "hello"],
//     nullExample: null,
//     objectExample: {
//         a: 5,
//         b: {
//             nested: "foo"
//         }
//     }
// };



firebase.auth().signOut().then(function() {
  // Sign-out successful.
}).catch(function(error) {
  // An error happened.
});



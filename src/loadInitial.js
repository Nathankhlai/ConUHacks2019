
//       var config = {
//         apiKey: "AIzaSyAc14wfNVZScC-9u1YPqwEfCC09v3KE49Q",
//         authDomain: "conuhacks2019-d7b13.firebaseapp.com",
//         databaseURL: "https://conuhacks2019-d7b13.firebaseio.com",
//         projectId: "conuhacks2019-d7b13",
//         storageBucket: "conuhacks2019-d7b13.appspot.com",
//         messagingSenderId: "992278114219"
//       };
//       firebase.initializeApp(config);
// // const admin = require('firebase-admin');
// // const functions = require('firebase-functions');

// // var db = firebase.database();
// var db = firebase.firestore();
// // admin.initializeApp(functions.config().firebase);

// <script src="https://www.gstatic.com/firebasejs/5.5.5/firebase-app.js"></script>;
// <script src="https://www.gstatic.com/firebasejs/5.5.5/firebase-firestore.js"></script>;


firebase.initializeApp({
 apiKey: "AIzaSyAc14wfNVZScC-9u1YPqwEfCC09v3KE49Q",
        authDomain: "conuhacks2019-d7b13.firebaseapp.com",
//         databaseURL: "https://conuhacks2019-d7b13.firebaseio.com",
        projectId: "conuhacks2019-d7b13",
});

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();


function hideAll () {

	if (document.querySelector("#swipePost").classList.contains("inactive") == false) {
		document.querySelector("#swipePost").classList.add("inactive");
	}

	if (document.querySelector("#settings").classList.contains("inactive") == false) {
		document.querySelector("#settings").classList.add("inactive");
	}

	if (document.querySelector("#orders").classList.contains("inactive") == false) {
		document.querySelector("#orders").classList.add("inactive");
	}

}


var docData = {
   stringExample: "Hello world!",
   booleanExample: true,
   numberExample: 3.14159265,
   dateExample: new Date("December 10, 1815"),
   arrayExample: [5, true, "hello"],
   nullExample: null,
   objectExample: {
       a: 5,
       b: {
           nested: "foo"
       }
   }
};


function submitData () {
	//need to get the company/ store name here
	let name = current.name;
	let item = document.querySelector("#nameField").value;
	let quantity = document.querySelector("#quantField").value;
	var setDoc = db.collection('Donors').doc("hi").set(docData);
	console.log(setDoc);


	// write item name to database
	// write item quantity to databases
}


function toSwipePost (event) {
	hideAll();
	document.body.style.backgroundColor = "#00BCD4";
	document.querySelector("#swipePost").classList.remove("inactive");

}

function toSettings (event) {
	hideAll();
	document.body.style.backgroundColor = "#8BC34A";
	document.querySelector("#settings").classList.remove("inactive");
}


function toOrders(event) {
	hideAll();
	document.body.style.backgroundColor = "rgb(203, 138, 243)";
	document.querySelector("#orders").classList.remove("inactive");
}

var displayName;
var email;
var emailVerified;
var photoURL;
var isAnonymous;
var uid
var providerData;

firebase.initializeApp({
	apiKey: "AIzaSyAc14wfNVZScC-9u1YPqwEfCC09v3KE49Q",
	authDomain: "conuhacks2019-d7b13.firebaseapp.com",
	projectId: "conuhacks2019-d7b13",
});

function hideAll () {

	if (document.querySelector("#loginSignup").classList.contains("inactive") == false) {
		document.querySelector("#loginSignup").classList.add("inactive");
	}

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
	document.body.style.backgroundColor = "rgb(247, 240, 152)";
	document.querySelector("#orders").classList.remove("inactive");
}
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


function submitData () {
	//need to get the company/ store name here
	let name = current.name;
	let item = document.querySelector("#nameField").value;
	let quantity = document.querySelector("#quantField").value;
	var setDoc = db.collection('Donors').doc("hi").set(docData);
	console.log(setDoc);
	toOrders();


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
	document.body.style.backgroundColor = "rgb(247, 240, 152)";
	document.querySelector("#orders").classList.remove("inactive");
}

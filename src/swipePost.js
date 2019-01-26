// Pulls information from database
var current = new User ("donor", "storeName", "location");

function submitData () {
	//need to get the company/ store name here
	let name = current.name;
	let item = document.querySelector("#nameField").value;
	let quantity = document.querySelector("#quantField").value;
	var setDoc = db.collection('Donor').doc(name).set(item + ';' + quantity);


	// write item name to database
	// write item quantity to databases
}

// Get current user from login
let container = document.querySelector("#swipePost");


if (current.userType === "donor") {
	container.innerHTML = "";

	let namePrompt = document.createElement("p");
	namePrompt.appendChild(document.createTextNode("Item name:"));
	let nameField = document.createElement("input");
	nameField.setAttribute("type","text");
	nameField.id = "nameField";

	container.appendChild(namePrompt);
	container.appendChild(nameField);

	let quantPrompt = document.createElement("p");
	quantPrompt.appendChild(document.createTextNode("Quantity"));
	let quantField = document.createElement("input");
	quantField.setAttribute("type","text");
	quantField.id = "quantField";

	container.appendChild(quantPrompt);
	container.appendChild(quantField);

	let buttonCont = document.createElement("div");
	let enterButton = document.createElement("button");
	enterButton.innerHTML = "Enter";
	
	buttonCont.appendChild(enterButton);

	enterButton.addEventListener("click", submitData);

	container.appendChild(buttonCont);
} else {

}
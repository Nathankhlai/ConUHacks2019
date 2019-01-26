// Get current user from login
let container = document.querySelector("#swipePost");

let current = new User ("donor", "location");

if (current.userType === "donor") {
	container.innerHTML = "";

	let namePrompt = document.createElement("p");
	namePrompt.appendChild(document.createTextNode("Item name:"));
	let nameField = document.createElement("input");
	nameField.setAttribute("type","text");

	container.appendChild(namePrompt);
	container.appendChild(nameField);

	let quantPrompt = document.createElement("p");
	quantPrompt.appendChild(document.createTextNode("Quantity"));
	let quantField = document.createElement("input");
	quantField.setAttribute("type","text");

	container.appendChild(quantPrompt);
	container.appendChild(quantField);
} else {

}
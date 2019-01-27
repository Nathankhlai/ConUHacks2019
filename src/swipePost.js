// Get current user from login
let container = document.querySelector("#swipePost");

// Pulls information from database
let current = new User ("donor", "location");

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

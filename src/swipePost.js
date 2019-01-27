document.querySelector("#swipePostButton").addEventListener("click", toSwipePost);
document.querySelector("#settingsButton").addEventListener("click", toSettings);
document.querySelector("#ordersButton").addEventListener("click", toOrders);

// Get current user from login
let container = document.querySelector("#swipePost");

let test = true;
// currentStatus = "asd";
if (currentStatus === "Donor") {
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
	enterButton.classList.add("nonMenu");

	buttonCont.appendChild(enterButton);

	enterButton.addEventListener("click", submitOrderData);

	container.appendChild(buttonCont);
} else {
	container.innerHTML = "";
	let item = document.createElement("div");
	// item.appendChild(orders[index]);
	item.innerHTML = orders[index];
	container.addEventListener('pointerdown', dragStart);
	container.addEventListener('pointermove', dragMove);
    container.addEventListener('pointerup', dragEnd);
    container.appendChild(item);

	// // Stores offers turned into dom elements
	// let offers = [];

	// // ***** Loop through users, then their offers
	// offers.push(new Offer(donor, item, quantity,location));
}

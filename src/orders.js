for (let i = 0; i < current.orders.length; i ++) {
	let container = document.querySelector("#orders");
	let item = document.createElement("div");
	item.classList.add("order");
	let textNode = document.createElement("p");
	textNode.innerHTML = "<strong>Donor Name:</strong> " + current.orders[i].donor;
	textNode.innerHTML += "<br><strong>Product:</strong> " + current.orders[i].product;
	textNode.innerHTML += "<br><strong>Quantity:</strong> " + current.orders[i].quantity;
	item.appendChild(textNode);
	container.appendChild(item);
}
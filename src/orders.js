var orders = [];
var currentOrders = [
];


for (let i = 0; i < currentOrders.length; i ++) {
	let container = document.querySelector("#orders");
	let item = document.createElement("div");
	item.classList.add("order");
	let textNode = document.createElement("p");
	textNode.innerHTML = "<strong>Donor Name:</strong> " + currentOrders[i].donor;
	textNode.innerHTML += "<br><strong>Product:</strong> " + currentOrders[i].product;
	textNode.innerHTML += "<br><strong>Quantity:</strong> " + currentOrders[i].quantity;
	item.appendChild(textNode);
	item.style.touchAction = "none";
	container.appendChild(item);
    orders.push(item);
}



function queryOrders () {
    db.collection("Donors").get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
        	// console.log(doc.data.name);
        	currentOrders.push({donor:doc.data().name, product:doc.data().product, quantity:doc.data().quantity});
            // doc.data() is never undefined for query doc snapshots
            // console.log(doc.id, " => ", doc.data());
        });
    });

}

queryOrders();

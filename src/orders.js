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
        	for (let i = 0; i < doc.data().orders.length; i ++) {
        		currentOrders.push({location: doc.location, donor:doc.data().name, product:doc.data().orders[i].product, quantity:doc.data().orders[i].quantity});
	        	let container = document.querySelector("#orders");
				let item = document.createElement("div");
				item.classList.add("order");
				let textNode = document.createElement("p");
				textNode.innerHTML = "<strong>Donor Name:</strong> " + doc.data().name;
				textNode.innerHTML += "<br><strong>Product:</strong> " + doc.data().orders[i].product;
				textNode.innerHTML += "<br><strong>Quantity:</strong> " + doc.data().orders[i].quantity;
				textNode.innerHTML += "<br><strong>Location:</strong> " + doc.data().location;
				item.appendChild(textNode);
				item.style.touchAction = "none";
				container.appendChild(item);
			    orders.push(item);
        	}
        	
            // doc.data() is never undefined for query doc snapshots
            // console.log(doc.id, " => ", doc.data());
        });
    });

}

queryOrders();

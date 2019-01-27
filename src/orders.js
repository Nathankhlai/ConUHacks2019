var orders = [];
var currentOrders = [
	{
		donor: "Loblaws",
		product: "carrots",
		quantity: "30 pounds"
	},
	{
		donor: "Nofrills",
		product: "lentils",
		quantity: "30 cans"
	},
	{
		donor: "Ally's Kitchen",
		product: "celery",
		quantity: "10 pounds"
	},
	{
		donor: "Ms Housewife",
		product: "uncooked rice",
		quantity: "30 pounds"
	},
	{
		donor: "Kalbi House",
		product: "cabbage",
		quantity: "50 pounds"
	},
	{
		donor: "Costco",
		product: "100 pack granola bars",
		quantity: "10 boxes"
	}
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
    db.collection("cities").get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
        });
    });

}

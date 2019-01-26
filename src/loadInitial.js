function submitData () {
	//need to get the company/ store name here
	let item = document.querySelector("#nameField").value;
	let quantity = document.querySelector("#quantityField").value;
	var setDoc = db.collection('Donor').doc('insert store name here').set(item + ';' + quantity);


	write item name to database
	write item quantity to databases
}
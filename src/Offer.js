class Offer {
	constructor (donor, item, quantity, location) {
		this.donor = donor;
		this.item = item;
		this.quantity = quantity;
		this.location = location;
		this.element = this.makeOfferDOM();
	}

	makeOfferDOM() {
		let cardContainer = document.createElement("div");
		cardContainer.innerHTML = "<strong>Donor: </strong>" + this.donor + "<br><strong>Item: </strong>" + this.item + "<br><strong>Quantity: </strong>" + this.quantity + "<br><strong>Location: </strong>" + this.location;
		cardContainer.style.margin = "10px";
		return this.cardContainer;
	}
}
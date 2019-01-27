// Get current user from login
let contain = document.querySelector("#settings");

// Pulls information from database
let curren = new User ("donor", "location");

if (curren.userType === "donor") {
	contain.innerHTML = "";

let usernamePrompt = document.createElement("p");
usernamePrompt.appendChild(document.createTextNode("Username"));
let usernameField = document.createElement("input");
usernameField.setAttribute("type","text");
usernameField.id = "usernameField";

contain.appendChild(usernamePrompt);
contain.appendChild(usernameField);

let passwordPrompt = document.createElement("p");
passwordPrompt.appendChild(document.createTextNode("Password"));
let passwordField = document.createElement("input");
passwordField.setAttribute("type","text");
passwordField.id = "passwordField";

contain.appendChild(passwordPrompt);
contain.appendChild(passwordField);

let locationPrompt = document.createElement("p");
locationPrompt.appendChild(document.createTextNode("Location"));
let locationField = document.createElement("input");
locationField.setAttribute("type","text");
locationField.id = "locationField";

contain.appendChild(locationPrompt);
contain.appendChild(locationField);

let recdonPrompt = document.createElement("p");
recdonPrompt.appendChild(document.createTextNode("Receptor/Donor"));
let recdonField = document.createElement("input");
recdonField.setAttribute("type","text");
recdonField.id = "recdonField";

contain.appendChild(recdonPrompt);
contain.appendChild(recdonField);

let buttonCont = document.createElement("div");
let enterButton = document.createElement("button");
enterButton.innerHTML = "Enter";

buttonCont.appendChild(enterButton);

enterButton.addEventListener("click", submitData);

contain.appendChild(buttonCont);
} else {

}

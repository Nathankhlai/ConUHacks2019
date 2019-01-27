
function signUpPage(event) {
	document.body.style.backgroundColor = "magenta";
	let containerElement = document.querySelector("#loginSignup");
	containerElement.innerHTML='<h2>Sign Up!</h2><p>Email:</p> <input type="text" id="email"> <p>Password:</p> <input type="password" id="password"><br><br>Are you a donor or receiver?<br><select id="options"><option value = "Donor">Donor</option><option value="Receiver">Receiver</option></select><br><button id=signUpButton class = "nonMenu">Sign Up</button><br></p>';
	document.querySelector("#signUpButton").addEventListener('click', submitSignUp);
}

function submitSignUp(event) {
	let email = document.querySelector("#email").value;
	let password  = document.querySelector("#password").value;
	let status = document.querySelector("#options").value;
	console.log(email,password,status);
	// User sign up
	firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
	    // Handle Errors here.
	    var errorCode = error.code;
	    var errorMessage = error.message;
	    console.log(errorMessage);
	    console.log(status)
	   

	    // ...
	});

	// add user id from signup to the database
	setdoc = db.collection(status).doc(user.uid);

}
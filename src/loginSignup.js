// var current = new User ("donor", "storeName", "location", ["orders","orders2"]);////
// var current;

let containerElement = document.querySelector("#loginSignup");

containerElement.innerHTML='<p>Email:</p> <input type="text" id="email" placeholder="paul.shen@ymail.com"> <p>Password:</p> <input type="password placeholder="123456"" id="password"><br><button id=loginButton>Login</button><br><p id="small">No account? Sign up here!</p>';

let email1 = document.querySelector("#email");
let password = document.querySelector("#password");

document.querySelector("#loginButton").addEventListener('click', authorize);
document.querySelector("#small").addEventListener('click', signUpPage);

function authorize () {
    firebase.auth().signInWithEmailAndPassword (email1.value, password.value).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
    });

    console.log("this kinda works")

    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            // User is signed in.
            displayName = user.displayName;
            email = user.email;
            emailVerified = user.emailVerified;
            photoURL = user.photoURL;
            isAnonymous = user.isAnonymous;
            uid = user.uid;
            providerData = user.providerData;

            console.log(uid);
            // ...
			
			toSwipePost();
			document.querySelector(".menu").classList.remove("inactive");
			
        } else {
            // User is signed out.
            // ...
        }
      
}


// // User sign up
// firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
//     // Handle Errors here.
//     var errorCode = error.code;
//     var errorMessage = error.message;
//     // ...
// });


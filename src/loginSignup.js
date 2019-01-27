var current = new User ("donor", "storeName", "location", ["orders","orders2"]);

let containerElement = document.querySelector("#loginSignup");

containerElement.innerHTML='<p>Username:</p> <input type="text" id="username"> <p>Password:</p> <input type="text" id="password"><br><button id=loginButton>Login</button><br><p id="small">No account? Sign up here!</p>';

document.querySelector("#loginButton").addEventListener('click', toSwipePost);

let username = document.querySelector("#username");
let password = document.querySelector("#password");
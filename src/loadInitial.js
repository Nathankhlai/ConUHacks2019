var displayName;
var email;
var emailVerified;
var photoURL;
var isAnonymous;
var uid;
var providerData;
var index = 0;

firebase.initializeApp({
	apiKey: "AIzaSyAc14wfNVZScC-9u1YPqwEfCC09v3KE49Q",
	authDomain: "conuhacks2019-d7b13.firebaseapp.com",
	projectId: "conuhacks2019-d7b13",
});

function hideAll () {

	if (document.querySelector("#loginSignup").classList.contains("inactive") == false) {
		document.querySelector("#loginSignup").classList.add("inactive");
	}

	if (document.querySelector("#swipePost").classList.contains("inactive") == false) {
		document.querySelector("#swipePost").classList.add("inactive");
	}

	if (document.querySelector("#settings").classList.contains("inactive") == false) {
		document.querySelector("#settings").classList.add("inactive");
	}

	if (document.querySelector("#orders").classList.contains("inactive") == false) {
		document.querySelector("#orders").classList.add("inactive");
	}

}

function toSwipePost (event) {
	hideAll();
	document.querySelector(".menu").style.backgroundColor = "rgb(0, 188, 212)";
	document.body.style.backgroundColor = "#00BCD4";
	document.querySelector("#swipePost").classList.remove("inactive");

}

function toSettings (event) {
	hideAll();
	document.querySelector(".menu").style.backgroundColor = "#8BC34A";
	document.body.style.backgroundColor = "#8BC34A";
	document.querySelector("#settings").classList.remove("inactive");
}


function toOrders(event) {
	hideAll();
	document.querySelector(".menu").style.backgroundColor = "rgb(247, 240, 152)";
	document.body.style.backgroundColor = "rgb(247, 240, 152)";
	document.querySelector("#orders").appendChild(orders[index]);
	document.querySelector("#orders").classList.remove("inactive");
}



let origin = [null,null]; //represents original position
let change = [0,0]; //represents the new position
let translate = [0,0];
let dragging = false;


// Drags
function dragStart(event) {
  
  origin[0] = event.clientX; // initial positions, ensures it will reset with movement
  origin[1] = event.clientY;
  console.log("X "+origin[0]);
  console.log("Y "+origin[1]);
  
  dragging = true; // starting to drag
  event.currentTarget.setPointerCapture(event.pointerId);
}

function dragMove(event) {
  if (!dragging) {
    return;
  }
  translate[0] = change[0] + event.clientX - origin[0]; // How much to move
  translate[1] = change[1] + event.clientY - origin[1]; // How much to move
  event.currentTarget.style.transform = 'translate(' +  translate[0] + 'px,' +  translate[1] + 'px) ' ; // translates
  let rotateAngle = 0.2*(event.clientX - origin[0]);
  event.currentTarget.style.transform += 'rotate(' + rotateAngle + 'deg)'; //rotates 
  if (event.clientX - origin[0] > 150||event.clientX - origin[0] < -150){
  	// document.querySelector("#swipe").style.background = "url('StudySwipeLogo.png') center center fixed";
  } 
  
  
}

function dragEnd(event) {
	dragging = false; // end of drag
	if (event.clientX - origin[0] > 150||event.clientX - origin[0] < -150){
		index = index + 1;
		
		let container = document.querySelector("#swipePost");
		orders.innerHTML += "Location: " + 
		container.innerHTML="";
		container.appendChild(orders[index]);
		console.log("index: " + index);
		
		// swipe right
		if (event.clientX - origin[0] > 150){
			let item = document.querySelector("#nameField").value;
		    let quantity = document.querySelector("#quantField").value;
		    let temp = {item: quantity};
		    var setDoc = db.collection('Receivers').doc(uid).set(temp);
		    toOrders();
			// ***** Updates database
			// firebase.database().ref('/users/' + app.userId).child('/swipe-right').push(people[database.index-1].idNum);
			// firebase.database().ref('/users/' + people[database.index-1].idNum + '/swipe-right').once('value').then(function(snapshot) {
               // let mutual = false
               // let vals = snapshot.val();
               // for (i in vals) {
               //         if (vals[i] == app.userId) {
               //     		    console.log(snapshot[i]);
               //              mutual = true;
               //         }
               // }

               // if (mutual==true) {
               //     firebase.database().ref('/users/' + app.userId ).child('matches').push(people[database.index-1].idNum);
               //     firebase.database().ref('/users/' + people[database.index-1].idNum ).child('matched').push(app.userId);
               // }
            // });
			
			// ***** Change database to mark a match
			// CHeck if thet like you
			// If yes open conversation
		// Swipe left
		} else if (event.clientX - origin[0] < -150) {
		  	// ***** Change database to mark a match
		}

		// Changes person
		if (index > orders.length-1) {
			let container = document.querySelector("#orders");
			container.innerHTML = "<h1>No more potential orders! Please check again later :)</h1>";
			container.style.alignText = "center";
			// document.querySelector("#swipe").style.backgroundImage = "unset";
			//**** Reload from database, reset index
		} else {
			event.target.style.transform = '';
			switchSwipe();	
		}
		
	} else {				
  	  event.target.style.transform = '';
    }
	  // document.querySelector("#swipe").style.backgroundImage = "unset";
  
}
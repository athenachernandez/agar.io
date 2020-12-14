// First two coordinates are x,y of center, last is radius
var circlePos = [0, 0, 25];
var circleVel = [0, 0, 0];
var food = [];

function applyVelocity(position, velocity) {
	/*
	    Parameters: Position and Velocity of an object
	      Assumption: Velocity list has same length as position list.
	    Returns: None, but modifies global variables
	    Purpose: Apply velocity to position, moving the object.
	  */
	var i = 0;
	for (i = 0; i < position.length; i++) {
		position[i] += velocity[i];
	}
}

function myKeyDown(event) {
	/*
	    Parameters: event object, which contains information about the event
	      that triggered the event listener.
	    Returns: None, but modifies global variables which track response to event.
	    Purpose: Make the animation respond to keys being pressed.
	  */
	// One of the attributes of the event object is 'which,' contains the key
	//   that was pressed to trigger the event listener.
	keyCode = event.which;
	keyStr = event.key;
	console.log(event);
	console.log(keyCode);
	console.log(keyStr);
	if (keyStr == 'w') {
		// Move circle up
		circleVel[1] -= 1;
	}
	if (keyStr == 'a') {
		// Move circle left
		circleVel[0] -= 1;
	}
	if (keyStr == 's') {
		// Move circle down
		circleVel[1] += 1;
	}
	if (keyStr == 'd') {
		// Move circle right
		circleVel[0] += 1;
	}
}

function addFood() {
	for (i = 0; i < canvas.width / 20; i++) {
			randomX = Math.floor(Math.random() * canvas.width);
			randomY = Math.floor(Math.random() * canvas.height);
			food.push([randomX, randomY]);
	}
}

function drawAll()
/*
  Purpose: This is the main drawing loop.
  Inputs: None, but it is affected by what the other functions are doing
  Returns: None, but it calls itself to cycle to the next frame
*/
{
	applyVelocity(circlePos, circleVel);

	// Draw the circle
	context.clearRect(0, 0, canvas.width, canvas.height);
	for (i = 0; i < food.length; i++) {
		context.beginPath();
		console.log(food[i][0], food[i][1])
		context.arc(food[i][0], food[i][1], 7, 0, 2 * Math.PI);
		context.stroke();
	}
	context.beginPath();
	context.arc(circlePos[0], circlePos[1], circlePos[2], 0, 2 * Math.PI);
	context.stroke();
	// Loop the animation to the next frame.
	window.requestAnimationFrame(drawAll);
}


// Get width/height of the browser window
windowWidth = window.innerWidth;
windowHeight = window.innerHeight;
console.log("Window is %d by %d", windowWidth, windowHeight);

// Get the canvas, set the width and height from the window
canvas = document.getElementById("mainCanvas");

// I found that - 20 worked well for me, YMMV
canvas.width = windowWidth - 20;
canvas.height = windowHeight - 20;
canvas.style.border = "1px solid black";

// Set up the context for the animation
context = canvas.getContext("2d");

// Set up event listener for when user presses a key down.
// It then calls the function myKeyDown, passing it an event object.
document.addEventListener("keydown", myKeyDown);

// Start the circle in the center of the canvas.
circlePos = [Math.floor(canvas.width / 2), Math.floor(canvas.height / 2), 25];
addFood();

// Fire up the animation engine
window.requestAnimationFrame(drawAll);

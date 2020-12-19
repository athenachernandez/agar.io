// First two coordinates are x,y of center, last is radius
var circlePos = [0, 0, 25];
var circleVel = [0, 0, 0];
var food = [];
var foodColors = ["#bc09ff", "#1e00ff", "#ff5f07", "#09fff6", "#fe09ad",
									"#ff061d", "#01c9ff", "#74ff09"];

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
		circle.circleVel[1] -= 1;
	}
	if (keyStr == 'a') {
		// Move circle left
		circle.circleVel[0] -= 1;
	}
	if (keyStr == 's') {
		// Move circle down
		circle.circleVel[1] += 1;
	}
	if (keyStr == 'd') {
		// Move circle right
		circle.circleVel[0] += 1;
	}
}

var frames = 0;
function drawAll()
/*
  Purpose: This is the main drawing loop.
  Inputs: None, but it is affected by what the other functions are doing
  Returns: None, but it calls itself to cycle to the next frame
*/
{
	frames++;
	circle.applyVelocity();

	// Adds a piece of food every 90 frames
	if (frames % 90 == 0) {
		randomX = Math.floor(Math.random() * canvas.width);
		randomY = Math.floor(Math.random() * canvas.height);
		randomColorIndex = Math.floor(Math.random() * (foodColors.length+1));
		food.push([randomX, randomY, foodColors[randomColorIndex]]);
	}

	checkFoodEaten();
	// Draw the circle
	context.clearRect(0, 0, canvas.width, canvas.height);

	// Redraw food
	for (var i = 0; i < food.length; i++) {
		context.beginPath();
		//console.log(food[i][0], food[i][1]);
		context.arc(food[i][0], food[i][1], 7, 0, 2 * Math.PI);
		context.fillStyle = food[i][2];
		context.strokeStyle = food[i][2];
		context.fill();
		context.stroke();
	}

	circle.draw();
	window.requestAnimationFrame(drawAll);
}

// Get width/height of the browser window
context = setUpContext();

// Set up event listener for when user presses a key down.
// It then calls the function myKeyDown, passing it an event object.
document.addEventListener("keydown", myKeyDown);

// Start the circle in the center of the canvas.
circle = new Circle(Math.floor(canvas.width / 2), Math.floor(canvas.height / 2), 25, context);
addFood();

// Fire up the animation engine
window.requestAnimationFrame(drawAll);

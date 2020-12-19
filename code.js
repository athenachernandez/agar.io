class Circle {
	// Notice that the constructor takes some of its values as inputs,
	//   and sets others by itself.
	constructor(x, y, radius) {
		this.circlePos = [x, y, radius];
		this.circleVel = [0, 0, 0];
	}

  draw() {
		/*
	    Parameters: None
	    Returns: None
	    Purpose: To draw the user's circle in its new position.
	  */
		context.beginPath();
		context.arc(this.circlePos[0], this.circlePos[1], this.circlePos[2], 0, 2 * Math.PI);
		context.fillStyle = "blue";
		context.strokeStyle = "blue";
		context.fill();
		context.stroke();
  }

	applyVelocity() {
		/*
		    Parameters: Position and Velocity of an object
		      Assumption: Velocity list has same length as position list.
		    Returns: None, but modifies global variables
		    Purpose: Apply velocity to position, moving the object.
		  */
		var i = 0;
		for (i = 0; i < this.circlePos.length; i++) {
			this.circlePos[i] += this.circleVel[i];
		}
	}

	myKeyDown(event) {
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
			this.circleVel[1] -= 1;
		}
		if (keyStr == 'a') {
			// Move circle left
			this.circleVel[0] -= 1;
		}
		if (keyStr == 's') {
			// Move circle down
			this.circleVel[1] += 1;
		}
		if (keyStr == 'd') {
			// Move circle right
			this.circleVel[0] += 1;
		}
	}
}

function checkFoodEaten() {
	/*
		Parameters: None
		Returns: None, but modifies global variables
		Purpose: Checks whether the user's circle is overlapping with any food
	*/
	for (i = 0; i < food.length; i++) {
		var xDistance = Math.abs(food[i][0] - circle.circlePos[0]);
		var yDistance = Math.abs(food[i][1] - circle.circlePos[1]);
		var distance = Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
		var sumOfRadii = 7 + circlePos[2];

		if (distance < sumOfRadii) {
			food.splice(i, 1);
		}
	}
}

function addFood() {
	/*
			Parameters: None
			Returns: None, but modifies global variables
			Purpose: Creates the initial list of food
		*/
	for (i = 0; i < canvas.width / 20; i++) {
			randomX = Math.floor(Math.random() * canvas.width);
			randomY = Math.floor(Math.random() * canvas.height);
			randomColorIndex = Math.floor(Math.random() * (foodColors.length+1));
			food.push([randomX, randomY, foodColors[randomColorIndex]]);
	}
}

function setUpContext() {
  // Get width/height of the browser window
  console.log("Window is %d by %d", window.innerWidth, window.innerHeight);

  // Get the canvas, set the width and height from the window
  canvas = document.getElementById("mainCanvas");
  // I found that - 20 worked well for me, YMMV
  canvas.width = window.innerWidth - 20;
  canvas.height = window.innerHeight - 20;
  canvas.style.border = "1px solid black";

  // Set up the context for the animation
  context = canvas.getContext("2d");
  return context;
}

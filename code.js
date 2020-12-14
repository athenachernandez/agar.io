

// class Circle {
// 	// Notice that the constructor takes some of its values as inputs,
// 	//   and sets others by itself.
// 	constructor(x, y, r, sAngle, eAngle) {
// 		this.x = x;
// 		this.y = y;
// 		this.center = [x, y];
// 		this.color = "#0000ff";
// 	}
//
//
//   draw() {
//     context.strokeStyle = this.color;
//     context.x = this.x;
//     context.y = this.y;
//     context.beginPath();
//     context.arc(100, 75, 50, 0, 2 * Math.PI, context);
//     context.stroke();
//   }
// }
//
// function setUpContext() {
//   // Get width/height of the browser window
//   console.log("Window is %d by %d", window.innerWidth, window.innerHeight);
//
//   // Get the canvas, set the width and height from the window
//   canvas = document.getElementById("mainCanvas");
//   // I found that - 20 worked well for me, YMMV
//   canvas.width = window.innerWidth - 20;
//   canvas.height = window.innerHeight - 20;
//   canvas.style.border = "1px solid black";
//
//   // Set up the context for the animation
//   context = canvas.getContext("2d");
//   return context;
// }
//
//
// 	function myKeyDown(event) {
// 	  /*
// 	    Parameters: event object, which contains information about the event
// 	      that triggered the event listener.
// 	    Returns: None, but modifies global variables which track response to event.
// 	    Purpose: Make the animation respond to keys being pressed.
// 	  */
// 	  // One of the attributes of the event object is 'which,' contains the key
// 	  //   that was pressed to trigger the event listener.
// 	  keyCode = event.which;
// 	  keyStr = event.key;
// 	  console.log(event);
// 	  console.log(keyCode);
// 	  console.log(keyStr);
//
// 	  if (keyStr == 'w') {
// 	    // Move circle up
// 	    circleVel[1] -= 1;
// 	  }
// 	  if (keyStr == 'a') {
// 	    // Move circle left
// 	    circleVel[0] -= 1;
// 	  }
// 	  if (keyStr == 's') {
// 	    // Move circle down
// 	    circleVel[1] += 1;
// 	  }
// 	  if (keyStr == 'd') {
// 	    // Move circle right
// 	    circleVel[0] += 1;
// 	  }
// 	}

var rover = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog: ["Places rover has visited: "]
}

function turnLeft(){
  var sideFacing = rover.direction;

  switch (sideFacing) {
    case "N":
      rover.direction = "W";
      break;

    case "W":
      rover.direction = "S";
      break;

    case "S":
      rover.direction = "E";
      break;

    case "E":
      rover.direction = "N";
      break;
  }
  console.log("turnLeft was called!");
}

function turnRight(){
  var whichSideFacing = rover.direction;

  switch (whichSideFacing) {
    case "N":
      rover.direction = "E";
      break;

    case "E":
      rover.direction = "S";
      break;

    case "S":
      rover.direction = "W";
      break;

    case "W":
      rover.direction = "N";
      break;
  }
  console.log("turnRight was called!");
}

function moveForward(){
  var goingForward = rover.direction;

  switch(goingForward) {
    case "N":
      rover.y = rover.y - 1;
      break;

    case "S":
      rover.y = rover.y + 1;
      break;

    case "W":
      rover.x = rover.x - 1;
      break;

    case "E":
      rover.x = rover.x + 1;
      break;
  }
  console.log("moveForward was called")
  console.log("Actual coordinates are: " + rover.x + " , " + rover.y);
  rover.travelLog.push(rover.x + ", " + rover.y);
}

function commandsToMove(listOfDirections){
  for(var i = 0; i < listOfDirections.length; i++){
    if (listOfDirections[i] === "f"){
      moveForward();
    }
    else if (listOfDirections[i] === "r"){
      turnRight();
    }
    else if (listOfDirections[i] === "l"){
      turnLeft();
    }
    else {
      console.log("This is not a valid move! Rover will move with f and turn with r & l.");
    }
  }
  rover.travelLog.forEach(function(coordinate){
    console.log(coordinate);
  });
}
function setup() { 
  createCanvas(400, 400);
} 

var diameter = 10;

function draw() { 
  if (mouseIsPressed) {
    ellipse(mouseX, mouseY, diameter);
  }
}

function keyPressed() {
  print(key);
  if (key == 'R') {
    fill(150, 0, 0);
  } else if (key == 'G') {
    fill(200, 255, 150);
  } else if (key == 'B') {
    fill(50, 150, 255); 
  } else if (key == 'P') {
    fill(100, 0, 255); 
  }
  else if (key == 'Y') {
    fill(255, 255, 0); 
  }
  else if (key == 'O') {
    fill(255, 150, 0); 
  }
  else if (key == '1') {
    diameter = 1
  }
  else if (key == '2') {
    diameter = 20
  }
  else if (key == '3') {
    diameter = 30
  }
}

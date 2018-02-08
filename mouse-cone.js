function setup() { 
  createCanvas(400, 400);
} 
function draw() { 
  background(340);
  var count = 0
	while (count< width) {
		line(width/2, 0, mouseX, mouseY)
		count += 10
	}
}

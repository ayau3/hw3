function AnnabelPatch(x, y) {
  noFill()
  stroke(238);
  rect(x, y, 300, 300);
  
  // your code here!
  background(255)
  colorMode(HSB)
  noStroke()
  
	size = 0
  while(true) {
    for (var i = 20; i <= 300; i = i + 20) {
      for (var j = 0; j <= 300; j = j + 40) {
        background(0, 0, 255, 0.05);
        fill(random(270,360), 255, 255);
        ellipse(x+i+j, y+i, 50, 50, 20+ size);
        size++
      }
    }
  }
}

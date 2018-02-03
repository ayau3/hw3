
background(255, 255, 255)

startX=95
endY=5
while(startX>-340){
  line(startX, 0, 100, endY)
  startX-=10
  endY+=10
}

var count = 0
while(count <= 100) {
  line(count, 0, count, height)
  count += 10
}

var count = 0
while(count < width) {
  line(100, count, width, count)
  count += 10
}

startY=5
endX=105
while(endX<670){
  line(100, startY, endX, 0)
  startY+=10
  endX+=10
}

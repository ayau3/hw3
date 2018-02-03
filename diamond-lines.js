startX=width/2
endX=width/2
endCoord = 0
while((endCoord < width) & (startX > 0)) {
  line(startX, endCoord, endX, endCoord)
  startX-=10
  endX+=10
  endCoord += 10
}
startX=0
startY=width
endCoord = width/2
while((endCoord < width) & (startX < width/2)) {
  line(startX, endCoord, startY, endCoord)
  startX+=10
  startY-=10
  endCoord += 10
}

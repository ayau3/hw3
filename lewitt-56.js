
createCanvas(400, 400)
var count = 0
while(count < width) {
  line(count, 0, count, height)
  count += 10
}
var count = 200
while(count < height) {
  line(0, count, width, count)
  count += 10
}
var count = 0
while(count < 200) {
  line(200, count, width, count)
  count += 10
}

startX=395
endY= 205
while(startX > 200){
  line(startX, 200, width, endY)
  startX-=10
  endY+=10
}
startY=205
endX=width
while(endX > 200){
  line(200, startY, endX, height+5)
  startY+=10
  endX-=10
}

startY=205
endX=5
while(endX<600){
  line(0, startY, endX, 200)
  startY+=10
  endX+=10
}

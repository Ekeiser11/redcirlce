function setup() {
  createCanvas(windowWidth,windowHeight)
  background(51, 10, 0)
  frameRate(70)
}

function draw() {

//mousetrail
noStroke()
 if (mouseIsPressed) {
    fill (255, 255, 204);
  } else {
    fill (255, 51, 0);
  }
  ellipse (mouseX,mouseY,400,1);


//random cirlce generator
frameRate(10)
var x = random(width)
  var y = random(height)
  var w = 8
  var h = 8
  ellipse(x,y,w,h)

//center ellipse
translate(width/2, height/2);
ellipse(0, 0, 200, 200);
fill(51, 0, 0,50)
ellipse(0,0,300,300)
fill(51, 0, 0,20)
ellipse(0,0,500,500)
fill(51, 0, 0,10)
ellipse(0,0,700,700)

}
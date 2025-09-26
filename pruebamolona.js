function setup() {
  createCanvas(windowWidth, windowHeight);
    background (200,220,255);
}

function draw() {
  fill(255,0,0)
  noStroke();
  ellipse(mouseX,mouseY, 40,40)
}
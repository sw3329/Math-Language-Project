// what I am going to create is an animated bouncing ball

let color_1 = "#138D75";
let color_2 = "#F7DC6F";
let button;
let x = 10;
let y = 10;
let xspeed = 6;
let yspeed = 4;

// setting up inside color of a ball; however, I want them to keep change and roll back to the original color

function setup() {
  createCanvas(600, 600);
  frameRate(40);

  button = createButton("Start");
  button.position(275, 300);
  button.mousePressed(resetSketch);
}

function draw() {
  background(100);

  if (frameCount % 100 == 0) {
    let temp = color_1;
    color_1 = color_2;
    color_2 = temp;
  }

  let lerp_pos = map(frameCount % 100, 0, 100, 0, 1);
  let col = lerpColor(color(color_1), color(color_2), lerp_pos);
  let shape_col = lerpColor(color(color_2), color(color_1), lerp_pos);
  fill(shape_col);
  noStroke();
  ellipse(x, y, 75);
  
  // 

  fill(255);
  textSize(15);
  text(frameCount, 90, 30);

  text("FrameRate:", 10, 30);

  //framerate algorithm

  x += xspeed;
  y += yspeed;

  if (x >= width || x <= 0) {
    xspeed = -xspeed;
  }

  if (y >= height || y <= 0) {
    yspeed = -yspeed;
  }
}

function resetSketch() {
  x = 10;
  y = 10;
}

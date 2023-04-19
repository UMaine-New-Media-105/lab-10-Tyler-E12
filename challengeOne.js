var frogX = 130;
var frogY = 310;
let myCar;
let myCar1;
let myCar2;
let myCar3;
let randomSpeed = (1,5)
let lane1 = [];
let lane2 = [];
let lane3 = [];
let lane4 = [];

function setup() {
  createCanvas(400, 400);
  myCar1 = new Car(0, 80, randomSpeed);
  for (let i = 0; i < 3; i++) {
    let x = 140;
    let y = 80;
    lane1.push(new Car(x, y, randomSpeed));
  }
  myCar2 = new Car2(0, 160, randomSpeed);
  for (let i = 0; i < 3; i++) {
    let x = 140;
    let y = 80;
    lane2.push(new Car2(x, y, randomSpeed));
  }
  myCar = new Car(0, 240, randomSpeed);
  for (let i = 0; i < 3; i++) {
    let x = 140;
    let y = 80;
    lane3.push(new Car(x, y, randomSpeed));
  }
  myCar3 = new Car(0, 290, randomSpeed);
  for (let i = 0; i < 3; i++) {
    let x = 140;
    let y = 80;
    lane3.push(new Car(x, y, randomSpeed));
  }
}

function draw() {
  background("black");
  fill("grey");
  rect(0, 0, 400, 80);
  rect(0, 180, 400, 60);
  rect(0, 340, 400, 60);

  addFrog(frogX, frogY);
  for (let i = 0; i < lane1.length; i++) {
    lane1[i].move();
    lane1[i].show();
  }

  if (keyIsPressed) {
    if (keyCode === LEFT_ARROW) {
      frogX += -2;
    } else if (keyCode === RIGHT_ARROW) {
      frogX += 2;
    } else if (keyCode === UP_ARROW) {
      frogY += -2;
    } else if (keyCode === DOWN_ARROW) {
      frogY += 2;
    }
  }
  myCar.show();
  myCar.move();
  myCar1.show();
  myCar1.move();
  myCar2.show();
  myCar2.move();
  myCar3.show();
  myCar3.move();
}

class Car {
  constructor(x, y, speed) {
    this.x = x;
    this.y = y;
    this.speed = speed;
  }
  show() {
    push();
    translate(this.x, this.y);
    fill("white");
    stroke(3);
    rect(0, 0, 50);
    pop();
  }
  move() {
    this.x += this.speed;
    if (this.x < 0) {
      this.x = width;
    } else if (this.x > width) {
      this.x = 0;
    }
  }
}
class Car2 {
  constructor(x, y, speed) {
    this.x = x;
    this.y = y;
    this.speed = speed;
  }
  show() {
    push();
    translate(this.x, this.y);
    fill("white");
    stroke(3);
    rect(-150, -30, 120, 50);
    pop();
  }
  move() {
    this.x += this.speed;
    if (this.x < 0) {
      this.x = width;
    } else if (this.x > 550) {
      this.x = 0;
    }
  }
}
function addFrog(frogX, frogY) {
  push();
  translate(frogX, frogY);
  scale(0.3);
  stroke("black");
  strokeWeight(1.5);
  fill("white");
  ellipse(150, 165, 50, 50);
  ellipse(250, 165, 50, 50);
  fill("black");
  ellipse(150, 160, 50, 30);
  ellipse(250, 160, 50, 30);
  ellipse(130, 165, 10, 10);
  ellipse(270, 165, 10, 10);
  fill("#AF4D4D00");
  ellipse(150, 165, 50, 50);
  ellipse(250, 165, 50, 50);
  fill("lightgreen");
  ellipse(200, 200, 200, 90);
  fill("rgb(249,236,190)");
  ellipse(200, 210, 200, 68);
  pop();
}

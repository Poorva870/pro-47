var road, roadImg;
var car, carImg;
var edges;
var obstacle1Img, obstacle2Img;
var stoneImg;
var fuel, fuelImg, fuelG;
var coin, coinImg, coinG;
var obstacle, obstacleG;
var stumpImg;
var collideS, collectS;
var gameState = "play";

function preload() {
  roadImg = loadImage("Images/Road.png");
  carImg = loadImage("Images/Car.png");
  stoneImg = loadImage("Images/stone.png");
  obstacle1Img = loadImage("Images/obstacle1.png");
  obstacle2Img = loadImage("Images/obstacle2.png");
  fuelImg = loadImage("Images/fuel.png");
  stumpImg = loadImage("Images/stump.png");
  coinImg = loadImage("Images/coin.png");
  collectS = loadSound("collect.wav");
  collideS = loadSound("collide.wav");
}

function setup() {
  createCanvas(800, 800);
  road = createSprite(400, 200, 50, 50);
  road.addImage("road", roadImg);
  road.scale = 0.478;

  car = createSprite(400, 700, 50, 50);
  car.addImage("carRunning", carImg);
  car.scale = 0.27;
  car.debug = false;
  car.setCollider("rectangle", 0, 0, 225, 600);

  obstacleG = new Group();
  coinG = new Group();
  fuelG = new Group();

  edges = createEdgeSprites();
}

function draw() {
  background(0);

  if (gameState === "play") {
    road.velocityY = 10;

    if (keyDown("Right_Arrow")) {
      car.x = car.x + 10;
    }

    if (keyDown("Left_Arrow")) {
      car.x = car.x - 10;
    }

    if (keyDown("Up_Arrow")) {
      car.y = car.y - 4;
    }

    if (keyDown("Down_Arrow")) {
      car.y = car.y + 4;
    }

    if (road.y > 400) {
      road.y = 300;
    }

    car.collide(edges);

    spawnObstacles();
    spawnCoins();

    if (coinG.isTouching(car)) {
      collectS.play();
      coin.visible = false;
    }

    if (fuelG.isTouching(car)) {
      collectS.play();
      fuel.visible = false;
    }

    if (obstacleG.isTouching(car)) {
      collideS.play();
      gameState = "end";
    }
  } else if (gameState === "end") {
    road.velocityY = 0;
    obstacleG.setVelocityYEach(0);
    fuelG.setVelocityYEach(0);
    coinG.setVelocityYEach(0);
  }

  drawSprites();
}

function spawnObstacles() {
  if (frameCount % 220 === 0) {
    obstacle = createSprite(random(100, 700), -100, 50, 50);
    obstacle.velocityY = 6;
    var rand = Math.round(random(1, 4));
    switch (rand) {
      case 1:
        obstacle.addImage("obstacle1", obstacle1Img);
        obstacle.scale = 0.04;
        break;
      case 2:
        obstacle.addImage("stone", stoneImg);
        obstacle.scale = 0.1;
        break;
      case 3:
        obstacle.addAnimation("obstacle2", obstacle2Img);
        obstacle.scale = 0.04;
        break;
      case 4:
        obstacle.addImage("stump", stumpImg);
        obstacle.scale = 0.3;
        break;

      default:
        break;
    }
    obstacleG.add(obstacle);
    obstacle.lifetime = 800;
  }

  if (frameCount % 330 === 0) {
    obstacle = createSprite(random(100, 700), -100, 50, 50);
    obstacle.velocityY = 6;
    var rand = Math.round(random(1, 4));
    switch (rand) {
      case 1:
        obstacle.addImage("obstacle1", obstacle1Img);
        obstacle.scale = 0.04;
        break;
      case 2:
        obstacle.addImage("stone", stoneImg);
        obstacle.scale = 0.1;
        break;
      case 3:
        obstacle.addAnimation("obstacle2", obstacle2Img);
        obstacle.scale = 0.04;
        break;
      case 4:
        obstacle.addImage("stump", stumpImg);
        obstacle.scale = 0.3;
        break;

      default:
        break;
    }
    obstacleG.add(obstacle);
    obstacle.lifetime = 800;
  }

  if (frameCount % 440 === 0) {
    obstacle = createSprite(random(100, 700), -100, 50, 50);
    obstacle.velocityY = 6;
    var rand = Math.round(random(1, 4));
    switch (rand) {
      case 1:
        obstacle.addImage("obstacle1", obstacle1Img);
        obstacle.scale = 0.04;
        break;
      case 2:
        obstacle.addImage("stone", stoneImg);
        obstacle.scale = 0.1;
        break;
      case 3:
        obstacle.addAnimation("obstacle2", obstacle2Img);
        obstacle.scale = 0.04;
        break;
      case 4:
        obstacle.addImage("stump", stumpImg);
        obstacle.scale = 0.3;
        break;

      default:
        break;
    }
    obstacleG.add(obstacle);
    obstacle.lifetime = 800;
  }
}

function spawnCoins() {
  if (frameCount % 200 === 0) {
    coin = createSprite(random(100, 700), -100, 50, 50);
    coin.velocityY = 6;
    coin.addImage(coinImg);
    coin.scale = 0.07;
    coin.lifetime = 800;
    coinG.add(coin);
    
  }

  if (frameCount % 600 === 0) {
    fuel = createSprite(random(100, 700), -100, 50, 50);
    fuel.velocityY = 6;
    fuel.addImage(fuelImg);
    fuel.scale = 0.02;
    fuel.lifetime = 800;
    fuelG.add(fuel);
  }

}

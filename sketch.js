var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  //agrega imagen de suelo
}

function setup() {
  createCanvas(600, 200);
  
  //crear sprite de trex y dale animación
  trex = createSprite(50,180,20,50);
  trex.addAnimation("running", trex_running);
  
  //agregar escala y posición al Trex
  trex.scale = 0.5;
  trex.x = 50
  
  //crear sprite de suelo y haz que se restablezca
  ground = createSprite(200,180,400,20);
 
  //agrega imagen a suelo


  //haz al invGround invisible

}

function draw() {
  background(220);
  //impreme la pos en x de Trex en la consola

  //agrega velocidad en X al suelo

 
  //hacer que el Trex salte al presionar la barra espaciadora
  if(keyDown("space")) {
    trex.velocityY = -10;
  }
  
  //agrega gravedad
  trex.velocityY = trex.velocityY + 0.8
  
 
 //evitar que el Trex caiga y modifica para el suelo inv.
  trex.collide(ground);
  drawSprites();
}

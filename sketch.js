//Create variables here
var dog, happyDog, database, foodS, foodStock

function preload()
{
  //load images here
  dog.loadImage("dogImg.png");
  happyDog.loadImage("dogImg1.png");
}

function setup() {
  createCanvas(500, 500);
  
  var createSprite = Dog(250,250);
  dog.Image(dog);

  FoodStock = database.ref('Food');
  FoodStock.on("value",readStock);

}


function draw() {  
  background(46, 139, 87);
  drawSprites();
  //add styles here
if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(HappyDog)
}
}

function readStock(){
food = data.val();
}

function writeStock(){

  database.ref('/').update({
    
  })


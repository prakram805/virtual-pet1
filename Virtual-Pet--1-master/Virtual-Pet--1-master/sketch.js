//Create variables here
var dog1,dog2,dog1Img,dog2Img
var food,foods;
function preload()
{
dog1Img= loadImage ("images/dogImg.png")
dog2Img= loadImage("images/dogImg.png")
}
function setup() {
	createCanvas(500, 500);
  dog1= createSprite(250,250)
  dog1.addImage(dog1Img)
  foodStock=database.ref('food')
  foodStock.on("value",readStock);
}


function draw() {  
background(46,139,87)
  drawSprites();
  //add styles here
if(keyWentDown(UP_ARROW)){
writeStock(foodS)
dog1.addImage(dog2Img)
text(foodStock)
textSize(30)
fill(255)

function readStock(data){
  foodS=database.val();



}
function writeStock(x){
database.ref('/').update({
food:x
})

}
  

}
}




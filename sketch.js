var cat,cat2,cat3
var mouse,mouse2,mouse3
var bgImg

function preload() {
    //load the images here
    bgImg = loadImage('images/garden.png')
    cat = loadImage('images/cat1.png','images/cat2.png')
    cat2 = loadImage('images/cat3.png')
    cat3= loadImage('images/cat4.png')
    
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
cat= createSprite(870,600)
cat.addAnimation('catSleeping',cat2)
cat.scale = 0.2

mouse= createSprite(200,600)
mouse.addAnimation('catStanding',cat2)
mouse.scale = 0.15

}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide
if(cat.x - mouse.x<(cat.width - mouse.width)/2){
    cat.velocityX = 0 ;
    cat.changeAnimation('catLastImg',cat3);
    

}
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}

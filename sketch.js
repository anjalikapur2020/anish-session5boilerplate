var splashscreen,backgroundImg
var gameState="wait"
var playButton,aboutButton
var player,playerImage
var lavaobstacle1,lavaobstacle3,lavaobstacle2,lavaobstacleImage1,lavaobstacleImage2,lavaobstacleImage3
var seaObstacle1,seaObstacle2,seaObstacle2,seaObstacleImage1,seaObstacleImage2,seaObstacleImage3
var treasureObstacle1,treasureObstacle2,treasureObstacle3,treasureObstacleImage1,treasureObstacleImage2,treasureObstacleImage3
var coin,coinImage,seacollect,seacollectImage,lavaCollect,lavaCollectImage
var treasurebox,octopus,volcano,volcanobackground,treasurebg,treasurebackground,treasureboxImage
var groundVolcano,groundoctopus,groundtreasure,ground
var score=0


function  preload() {
splashscreen= loadImage("assets/splash.gif")    
backgroundImg = loadImage("assets/background.png")
stoneMonster = loadImage("assets/Stone-Monster.png")
axeMonster = loadImage("assets/Axe-Monster.png")
oldRockBoss = loadImage("assets/Old-Rock-Boss.png")
// volcanoImage=loadImage("assets/volcano.png")
selectbg=loadImage("piratebg.jpg")
treasureboxImage=loadImage("assets/treasure_box.png")
octopusImage=loadImage("assets/octopus.png")

volcanobackground=loadImage("assets/volcanobg.png")
octopusbackground=loadImage("assets/octopusbg.PNG")
treasurebackground=loadImage("assets/treasurebg.PNG")





}

function setup(){
createCanvas(windowWidth,windowHeight)

playButton = createImg("assets/Play.png")
playButton.position(width/2.25,height-height/2.1)
playButton.size(150,70)

aboutButton = createImg("assets/About.png")
aboutButton.position(width/2.25,height-height/2.8)
aboutButton.size(150,70)

volcano = createImg("assets/volcano.png")
volcano.position(width/3,height-height/2.75)
volcano.size(300,300)
volcano.hide()

treasurebox = createImg("assets/treasure_box.png")
treasurebox.position(width/6,height-height/2.15)
treasurebox.size(250,250)
treasurebox.hide()


octopus = createImg("assets/octopus.png")
octopus.position(width-width/2.15,height-height/1.65)
octopus.size(250,250)
octopus.hide()


ground=createSprite(width/4,height/3,width,height)
ground.addImage("volcano",volcanobackground)
ground.addImage("octopus",octopusbackground)
ground.addImage("treasure",treasurebackground)
ground.visible=false


}

function draw(){
if(gameState=="wait"){
    background(splashscreen)
    playButton.show()
    aboutButton.show()
    treasurebox.hide()
    volcano.hide()
    octopus.hide()

}

playButton.mousePressed(()=>{
    background(selectbg)
    gameState="play"
    playButton.hide()
    aboutButton.hide()
})
aboutButton.mousePressed(()=>{
    about()
    playButton.hide()
    aboutButton.hide()
    
})

volcano.mousePressed(()=>{
  
    playButton.hide()
    aboutButton.hide()
    volcano.hide()
    treasurebox.hide()
    // volcano.hide()
    gameState="volcano_state"
    octopus.hide()

})


treasurebox.mousePressed(()=>{
  
    playButton.hide()
    aboutButton.hide()
    volcano.hide()
    treasurebox.hide()
    // volcano.hide()
    gameState="treasure_state"
    octopus.hide()

})

octopus.mousePressed(()=>{
  
    playButton.hide()
    aboutButton.hide()
    volcano.hide()
    treasurebox.hide()
    // volcano.hide()
    gameState="octopus_state"
    octopus.hide()

})



drawSprites()

if(gameState=="volcano_state"){

    // background(volcanobackground)
    ground.changeImage("volcano")
    ground.velocityX=-2
    textSize(40)
    fill("red")
    stroke("yellow")
    text("SCORE: " +score,100,50)
ground.scale=1.55
    ground.visible=true
    if(ground.x<=0){
        ground.x=width/3.6
    }

}

if(gameState=="treasure_state"){

    background(treasurebackground)
    textSize(40)
    fill("red")
    stroke("yellow")
    text("SCORE: " +score,100,50)

}

if(gameState=="octopus_state"){

    background(octopusbackground)
    textSize(40)
    fill("cyan")
    stroke("purple")
    strokeWeight(3)
    text("SCORE: " +score,100,50)
}

if (gameState=="play"){
  volcano.show()
  treasurebox.show()
  octopus.show()

}

}


function about() {
    swal({
        title: "HOW TO PLAY THE GAME !!!",
        text: "Go to a landmark by clicking on it. \n Each landmark has a different quest.",
        textAlign:"center",
        imageUrl: "assets/splash.gif",
        imageSize: "200x200",
        confirmButtonText: "LET THE QUEST BEGIN!!",
        confirmButtonColor: "green"
    },
        function () {
            gameState = "wait"
        }
    )


}
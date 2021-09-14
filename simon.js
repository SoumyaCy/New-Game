var pattern=[];
var userPattern=[];
var buttonColour=["red","blue","yellow","green"];
var level=-1;

function newSequence(){
var randNUM=Math.floor(Math.random()*4);
var colourChosen=buttonColour[randNUM];
pattern.push(colourChosen);
var button=$("#"+colourChosen);
button.fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
playSound(colourChosen);
level++;
$("#level-title").text("Level "+level);

}




$(".btn").click(function(){//button clicked by user
  userColour=$(this).attr("id");
  userPattern.push(userColour);
  playSound(userColour);
  animateOnPress(userColour);
  checkAns(userPattern.length-1);

})



function playSound(nam){
  var audio = new Audio("https://SoumyaCy.github.io/New-Game/sounds/"+nam+".mp3");
    audio.play();
}



function animateOnPress(currColour){
  $(".btn#"+currColour).addClass("pressed")
  setTimeout(function() {
    $(".btn#"+currColour).removeClass("pressed");
}, 100);
}


$(document).keydown(function(){
  if($("#level-title").text()==="Press A Key to Start"||$("#level-title").text()==="Game Over, Press Any Key to Restart"){
newSequence();}



})


function checkAns(currLevel){
    if(userPattern[currLevel]===pattern[currLevel]){
    console.log("success");
    if(currLevel===level){
      setTimeout(function() {
   newSequence();
}, 1000);
userPattern=[];
    }
    }
    else{
wrong();
res();
    }

}



function wrong(){
  var audio1=new Audio("https://SoumyaCy.github.io/New-Game/sounds/wrong.mp3");
  audio1.play();
  $("body").addClass("game-over");
  setTimeout(function(){
    $("body").removeClass("game-over");
  },200);
    $("#level-title").text("Game Over, Press Any Key to Restart");
}


function res(){
  pattern=[];
  level=-1;
  userPattern=[];
}

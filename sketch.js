var bg;
var question;
var nextButton, buttonImg;
var question2;
var question3;
var question4;
var question5;
var Q=1;
var nextButton_2;
var nextButton_3;
var nextButton_4;
var nextButton_5;
var endImg;

function preload(){
bg=loadImage("images/bg.jpg")
buttonImg=loadImage("images/nextButton.png");
endImg=loadImage("images/end.jpg")

}
function setup() {
  createCanvas(700,400);
question=new Question();





}

function draw() {
  background(bg);  
  if(Q===1){
  question.display();
  }
 else if(Q===2){
    question2.display();
  }

  else if(Q===3){
    question3.display();
  }

 else if(Q===4){
    question4.display();
  }

 else if(Q===5){
    question5.display();
  }

else 
{
    background(endImg);
}

  drawSprites();
}
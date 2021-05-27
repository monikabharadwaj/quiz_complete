class Question {

    constructor() {
      this.title = createElement('h1')
      this.input = createInput('Enter Correct Option No..');
      this.button = createButton('Submit');
      
      this.question = createElement('h3');
      this.option1 = createElement('h4');
      this.option2 = createElement('h4');
      this.option3 = createElement('h4');
      this.option4 = createElement('h4');
      
      this.answer = createElement('h3')
      this.answer2 = createElement('h3')
      this.answer3 = createElement('h3')
      this.answer4 = createElement('h3')

      this.A = createElement('h3') 
    
    }
  

hide(){
  this.title.hide();
  this.question.hide();
  this.option1.hide();
  this.option2.hide();
  this.option3.hide();
  this.option4.hide();
  this.answer.hide();
  this.answer2.hide();
  this.answer3.hide();
  this.answer4.hide();
  this.button.hide();
  this.input.hide();
  this.A.hide();
}

display(){

  this.title.html("QUIZ");
  this.title.position(400, 40);

  this.question.html("Question:- Approx how much of plastic trash winds up in our oceans each year?" );
  this.question.position(310, 150);
  this.option1.html("1: 18 billion pounds " );
  this.option1.position(310, 170);
  this.option2.html("2: 20 billion pounds " );
  this.option2.position(310, 190);
  this.option3.html("3: 15 billion pounds " );
  this.option3.position(310, 210);
  this.option4.html("4: 13 billion pounds " );
  this.option4.position(310, 230);
  
  this.input.position(310, 300);
  this.button.position(560, 300);
  
 

  this.button.mousePressed(()=>{    
    this.answer.html("According to a study done by the University of Georgia, 18 billion pounds of plastic");
    this.answer.position(310,350); 
    this.answer2.html("trash winds up in our oceans each year. That is enough trash to cover every foot of");
    this.answer2.position(310,380);
    this.answer3.html("coastline around the world with five full trash bags of plastic compounding");
    this.answer3.position(310,410);
    this.answer4.html("every year.");
    this.answer4 .position(310,440);

    this.A.html("Correct Option: 1");
    this.A.position(310,310)
       
    nextButton=createSprite(680,350,10,10);
    nextButton.addImage("button", buttonImg);
    nextButton.scale=0.1;

  })

  if(mousePressedOver(nextButton)){
    this.hide();
    nextButton.visible=false;
 
    Q=2;
    if(Q===2){
     
      question2=new Question2();
      question2.display();
   }

  }


}


  }
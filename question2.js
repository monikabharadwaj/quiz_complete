class Question2 {

    constructor() {
      this.title_2 = createElement('h1')
      this.input_2 = createInput('Enter Correct Option No..');
      this.button_2 = createButton('Submit');
    
      this.question_2 = createElement('h3');
      this.option1_2 = createElement('h4');
      this.option2_2 = createElement('h4');
      this.option3_2 = createElement('h4');
      this.option4_2 = createElement('h4');
      
      this.answer_2 = createElement('h3')
      this.answer2_2 = createElement('h3')
      this.answer3_2 = createElement('h3')
      this.answer4_2 = createElement('h3')
    
      this.A2 = createElement('h3')
    }
  

hide(){
  this.title_2.hide();
  this.question_2.hide();
  this.option1_2.hide();
  this.option2_2.hide();
  this.option3_2.hide();
  this.option4_2.hide();
  this.answer_2.hide();
  this.answer2_2.hide();
  this.answer3_2.hide();
  this.answer4_2.hide();

  this.A2.hide();
  this.button_2.hide();
  this.input_2.hide();
 
}

display(){

  this.title_2.html("QUIZ");
  this.title_2.position(400, 40);

  this.question_2.html("Question:- What happens to plastic waste?" );
  this.question_2.position(310, 150);
  this.option1_2.html("1:  It is a biodegradable material so it eventually disintegrates" );
  this.option1_2.position(310, 170);
  this.option2_2.html("2: It never fully goes away, it just breaks into little pieces" );
  this.option2_2.position(310, 190);
  this.option3_2.html("3: There is no such thing as plastic waste, all plastic is recycled" );
  this.option3_2.position(310, 210);
  this.option4_2.html("4: It is dumped in the ocean for fish to eat" );
  this.option4_2.position(310, 230);

     
  this.input_2.position(310, 300);
  this.button_2.position(560, 300);
  
 

  this.button_2.mousePressed(()=>{    
    this.answer_2.html("North Pacific Expedition 2012, a 36-day nautical research journey through the");
    this.answer_2.position(310,350);
    this.answer2_2.html("North Pacific subtropical gyre down to the Hawaiian islands, found this to be true.");
    this.answer2_2.position(310,380);
    this.answer3_2.html("The team was studying plastic pollution in the ocean and found that out of the")
    this.answer3_2.position(310,410);
    this.answer4_2.html("66,077 pieces of plastic collected in samples, 95% of it was millimeters in size.");  
    this.answer4_2.position(310,440);
    
    this.A2.html("Correct Option: 2");
    this.A2.position(310,310)
   
    nextButton_2=createSprite(680,350,10,10);
    nextButton_2.addImage("button", buttonImg);
    nextButton_2.scale=0.1;

  })

  if(mousePressedOver(nextButton_2)){
    this.hide();
    nextButton_2.visible=false;
 
    Q=3;

    if(Q===3){

      question3=new Question3();
      question3.display();
      }
  }

  

}


  }
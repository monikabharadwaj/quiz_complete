class Question5 {

    constructor() {
      this.title_5 = createElement('h1')
  
      this.input_5 = createInput('Enter Correct Option No..');
      this.button_5 = createButton('Submit');
      this.question_5 = createElement('h3');
      this.option1_5 = createElement('h4');
      this.option2_5 = createElement('h4');
      this.option3_5 = createElement('h4');
      this.option4_5 = createElement('h4');
      
      this.answer_5 = createElement('h3')
      this.answer2_5 = createElement('h3')
      this.answer3_5 = createElement('h3')
      this.answer4_5 = createElement('h3')
      
      this.A5 = createElement('h3')
    }
  

hide(){
  this.title_5.hide();
  this.question_5.hide();
  this.option1_5.hide();
  this.option2_5.hide();
  this.option3_5.hide();
  this.option4_5.hide();
  this.answer_5.hide();
  this.answer2_5.hide();
  this.answer3_5.hide();
  this.answer4_5.hide();
  this.A5.hide();
  this.button_5.hide();
  this.input_5.hide();
}

display(){

  this.title_5.html("QUIZ");
  this.title_5.position(400, 40);

  this.question_5.html("Question:- Which are the top 5 contributing countries to the world’s plastic pollution?" );
  this.question_5.position(310, 150);
  this.option1_5.html("1:  Russia, France, USA, Vietnam, India" );
  this.option1_5.position(310, 170);
  this.option2_5.html("2: Indonesia, Thailand, USA, China, France" );
  this.option2_5.position(310, 190);
  this.option3_5.html("3: USA, China, India, UK, Australia" );
  this.option3_5.position(310, 210);
  this.option4_5.html("4: Thailand, China, Indonesia, Vietnam, Philippines" );
  this.option4_5.position(310, 230);

  this.input_5.position(310, 300);
  this.button_5.position(560, 300);
  
 

  this.button_5.mousePressed(()=>{    
    this.answer_5.html("These countries have all achieved significant growth in recent years, and although")
    this.answer_5.position(310,350);
    this.answer2_5.html("this is a good thing in terms of the improvement of quality of life, it also means") 
    this.answer2_5.position(310,380);
    this.answer3_5.html("that consumer demand of disposable plastics is outstripping the ability") 
    this.answer3_5.position(310,410);
    this.answer4_5.html("of the local waste management infrastructure to keep up with it.")
    this.answer4_5.position(310,440);
   
    this.A5.html("Correct Option: 4");
    this.A5.position(310,310)

    nextButton_5=createSprite(680,350,10,10);
    nextButton_5.addImage("button", buttonImg);
    nextButton_5.scale=0.1;

  })

  if(mousePressedOver(nextButton_5)){
    this.hide();
    nextButton_5.visible=false;
    
    
    Q=0;
  }


}

  

//end(){
//;}

  


}
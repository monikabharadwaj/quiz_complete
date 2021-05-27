class Question4 {

    constructor() {
      this.title_4 = createElement('h1')
  
      this.input_4 = createInput('Enter Correct Option No..');
      this.button_4 = createButton('Submit');
      this.question_4 = createElement('h3');
      this.option1_4 = createElement('h4');
      this.option2_4 = createElement('h4');
      this.option3_4 = createElement('h4');
      this.option4_4 = createElement('h4');
      
      this.answer_4 = createElement('h3')
      this.answer2_4 = createElement('h3')
      this.answer3_4 = createElement('h3')
      this.answer4_4 = createElement('h3')

      this.A4 = createElement('h3')
    }
  

hide(){
  this.title_4.hide();
  this.question_4.hide();
  this.option1_4.hide();
  this.option2_4.hide();
  this.option3_4.hide();
  this.option4_4.hide();
  this.answer_4.hide();
  this.answer2_4.hide();
  this.answer3_4.hide();
  this.answer4_4.hide();
this.A4.hide();
  this.button_4.hide();
  this.input_4.hide();
}

display(){

  this.title_4.html("QUIZ");
  this.title_4.position(400, 40);

  this.question_4.html("Question:- By what year is it predicted that plastic will outweigh fish in the ocean?" );
  this.question_4.position(310, 150);
  this.option1_4.html("1: 2020" );
  this.option1_4.position(310, 170);
  this.option2_4.html("2: 3000" );
  this.option2_4.position(310, 190);
  this.option3_4.html("3: 2050" );
  this.option3_4.position(310, 210);
  this.option4_4.html("4: 2250" );
  this.option4_4.position(310, 230);

  this.input_4.position(310, 300);
  this.button_4.position(560, 300);
  
 

  this.button_4.mousePressed(()=>{    
    this.answer_4.html("A report done by the Ellen MacArthur Foundation found that there are over")
    this.answer_4.position(310,350);
    this.answer2_4.html("150 million tons of plastic in the oceans today. That is about 1 ton of ")
    this.answer2_4.position(310,380);
    this.answer3_4.html("plastic for every 3 tons of fish. Keeping up a business-as-usual trend will" )
    this.answer3_4.position(310,410);
    this.answer4_4.html("have plastic outweighing fish in the ocean by 2050.");   
    this.answer4_4.position(310,440);

    this.A4.html("Correct Option: 3");
    this.A4.position(310,310)
   
    nextButton_4=createSprite(680,350,10,10);
    nextButton_4.addImage("button", buttonImg);
    nextButton_4.scale=0.1;

  })

  if(mousePressedOver(nextButton_4)){
    this.hide();
    nextButton_4.visible=false;
 
    Q=5;

    if(Q===5){
   
      question5=new Question5();
         question5.display();
      }
  }

  

}


  }
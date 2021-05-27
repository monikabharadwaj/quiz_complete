class Question3 {

    constructor() {
      this.title_3 = createElement('h1')
  
      this.input_3 = createInput('Enter Correct Option No..');
      this.button_3 = createButton('Submit');
      this.question_3 = createElement('h3');
      this.option1_3 = createElement('h4');
      this.option2_3 = createElement('h4');
      this.option3_3 = createElement('h4');
      this.option4_3 = createElement('h4');
      
      this.answer_3 = createElement('h3')
      this.answer2_3 = createElement('h3')
      this.answer3_3 = createElement('h3')
      this.answer4_3 = createElement('h3')

      this.A3 = createElement('h3')
      
    }
  

hide(){
  this.title_3.hide();
  this.question_3.hide();
  this.option1_3.hide();
  this.option2_3.hide();
  this.option3_3.hide();
  this.option4_3.hide();
  this.answer_3.hide();
  this.answer2_3.hide();
  this.answer3_3.hide();
  this.answer4_3.hide();

this.A3.hide();

  this.button_3.hide();
  this.input_3.hide();
}

display(){

  this.title_3.html("QUIZ");
  this.title_3.position(400, 40);

  this.question_3.html("Question:- How many marine species are harmed by plastic pollution?" );
  this.question_3.position(310, 150);
  this.option1_3.html("1: 52" );
  this.option1_3.position(310, 170);
  this.option2_3.html("2: 693" );
  this.option2_3.position(310, 190);
  this.option3_3.html("3: 1,326" );
  this.option3_3.position(310, 210);
  this.option4_3.html("4: 5,749" );
  this.option4_3.position(310, 230);

  this.input_3.position(310, 300);
  this.button_3.position(560, 300);
  
 

  this.button_3.mousePressed(()=>{    
    this.answer_3.html("A 2015 Plymouth University study compiled reports recorded from around the world")
    this.answer_3.position(310,350);
    this.answer2_3.html("and found evidence of 44,000 animals becoming entangled or swallowing")
    this.answer2_3.position(310,380);
    this.answer3_3.html("plastic debris, accounting for a total of 693 marine species. At least 17%")
    this.answer3_3.position(310,410);
    this.answer4_3.html("of those affected species are listed as threatened or near threatened.")
    this.answer4_3.position(310,440);

    this.A3.html("Correct Option: 2");
    this.A3.position(310,310)
   
    nextButton_3=createSprite(680,350,10,10);
    nextButton_3.addImage("button", buttonImg);
    nextButton_3.scale=0.1;

  })

  if(mousePressedOver(nextButton_3)){
    this.hide();
    nextButton_3.visible=false;
 
    Q=4;

    if(Q===4){
     
      question4=new Question4();
      question4.display();
      }
  }

  

}


  }
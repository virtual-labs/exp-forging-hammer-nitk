function runPage2() {
    background(255);
    image(bg, 0, 0);
    
    stroke(0);
    fill(0);

    strokeWeight(1);
    push();
    textSize(25);
    // textFont("Times");
    textFont("Comic Sans MS")
    text('Forging hammer as 2DOF system - Free Vibration',150, 50);

    textSize(16);
    text("CONTROLS", 655, 417);
    text("VARIABLES", 655, 107);
    pop();




    if(spring1.x1==spring1.x2)
    {

    textFont("Comic Sans MS");
    textSize(20);
    text("MODE SHAPE", 250, 110);
    textSize(15);
    text("When the initial excitation is given same to both masses in same direction, it",30,150);
    text("gives only the first mode shape of the system",150,170);
    strokeWeight(1.5);
    stroke(0);
    line(300,200,300,500);
    stroke(0,0,255);
    line(300,300,300+(spring1.x2*2),300);
    line(300,400,300+(spring1.x2*2),400);
    stroke(255,0,0);
    line(300,200,300+(spring1.x2*2),300);
    line(300+(spring1.x2*2),300,300+(spring1.x2*2),400);
    line(300+(spring1.x2*2),400,300,500);

    }
    else if(spring1.x1==(-spring1.x2)){

        textFont("Comic Sans MS");
        textSize(20);
        text("MODE SHAPE", 250, 110);
        textSize(15);
        text("When the initial excitation is given same to both masses in different direction, it",30,150)
        text("gives only the second mode shape of the system",150,170);
        strokeWeight(2);
        stroke(0);
        line(300,200,300,500);
        stroke(0,0,255);
        line(300,300,300+(spring1.x2*2),300);
        line(300,400,300+(spring1.x2*2),400);
        stroke(255,0,0);
        line(300,200,300+(spring1.x2*2),300);
        line(300+(spring1.x2*2),300,300+(spring1.x2*2),400);
        line(300+(spring1.x2*2),400,300,500);
    
    }
    else{
        
    textFont("Comic Sans MS");
    textSize(20);
    text("MODE SHAPES", 215, 110);
    textSize(15);


    
   let add = 150    ;
    strokeWeight(3);
    stroke(0);
    line(120+add,200,120+add,500);
    stroke(0,0,255);
    line(120+add,300,120+(spring1.x1*2)+add,300);
    line(120+add,400,120+(spring1.x2*2)+add,400);
    stroke(255,0,0);
    line(120+add,200,120+(spring1.x1*2)+add,300);
    line(120+(spring1.x1*2)+add,300,120+(spring1.x2*2)+add,400);
    line(120+(spring1.x2*2)+add,400,120+add,500);

   
    }

   
   
   
    strokeWeight(1);
    spring1.initialise(F0.inp, k3.inp,k1.inp,m1.inp,k2.inp,m2.inp , x10.inp , x20.inp);
    spring1.update(t,factor)
    // spring1.show(0, 1, 0);
    // magFac1.initialise();
    // magFac1.draw();
    button3.draw()
    button4.draw()
   // k3.draw()
    //x1.draw();
    // x2.draw();
 //   F0.draw();
    k1.draw();
    m1.draw();
    k2.draw();
    x10.draw();
    x20.draw();
    m2.draw();
    t = t+dt;
    //clear.mousePressed(clearMe);
}

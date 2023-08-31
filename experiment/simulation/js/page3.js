function runPage3() {
    background(255);
    image(bg, 0, 0);
    
    stroke(0);
    fill(0);

    push();
    strokeWeight(1);
    textSize(25);
    textFont("Comic Sans MS");
    text('Forging hammer as 2DOF system - Free Vibration',150, 50);

    textSize(16);
    text("CONTROLS", 655, 417);
    text("VARIABLES", 655, 107);
    pop();

    textSize(20);
    text('Frequency Response Curves',60, 120);
    
    magFac1.initialise();
    magFac1.draw();
   // magFac3.initialise();
   // magFac3.draw();
    magFac2.initialise();
    magFac2.draw();
    
    stroke('purple');
    strokeWeight(3);
    line(355 , 140 , 375 , 140);
    stroke('black');
    strokeWeight(1);
    textSize(14);
    text('Frequency Response of Mass 1' , 380 , 145);

    stroke('red');
    strokeWeight(3);
    line(355 , 160 , 375 , 160);
    stroke('black')
    strokeWeight(1);
    textSize(14);
    text('Frequency Response of Mass 2' , 380 , 165);

    let add = 320;
    let dy = 90;
    stroke('red')
    strokeWeight(5)
    point(50+add , 100+dy)
    strokeWeight(1)
    text('w2' , 55+add ,100 +dy)
    stroke('purple')
    strokeWeight(5)
    point(50+add , 120+dy);
    strokeWeight(1)
    text('w1' , 55 +add, 120+dy)

    strokeWeight(1);
    spring1.initialise(F0.inp, k3.inp,k1.inp,m1.inp,k2.inp,m2.inp , x10.inp , x20.inp);
    spring1.update(t, factor);
        
    stroke('purple');
    strokeWeight(10);
    point(5 + spring1.w1*70, 500);

    stroke('red');
    strokeWeight(10);
    point(160 + spring1.w2*70, 500);

    strokeWeight(1)




    button5.draw()
  //  k3.draw();
   // x2.draw();
  // F0.draw();
    k1.draw();
    m1.draw();
    k2.draw();
    m2.draw();
    x10.draw();
    x20.draw();
    t = t+dt;
    //clear.mousePressed(clearMe);
}

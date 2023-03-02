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
    text('Frequency Response Curve',100, 150);
    
    magFac1.initialise();
    magFac1.draw();
   // magFac3.initialise();
   // magFac3.draw();
    magFac2.initialise();
    magFac2.draw();



    strokeWeight(1);
    spring1.initialise(F0.inp, k3.inp,k1.inp,m1.inp,k2.inp,m2.inp , x10.inp , x20.inp);
    spring1.update(t, factor);
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

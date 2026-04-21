function runPage3() {
  background(255);
  // image(bg, 0, 0);

  stroke(0);
  fill(0);

  push();
 
  pop();

  textSize(20);
  strokeWeight(0);
  text('Frequency Response Curves',170, 20);

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
    strokeWeight(0);
    textSize(14);
    text('Frequency Response of Mass 1' , 380 , 145);

    stroke('red');
    strokeWeight(3);
    line(355 , 160 , 375 , 160);
    stroke('black')
    strokeWeight(0);
    textSize(14);
    text('Frequency Response of Mass 2' , 380 , 165);

    let add = 320;
    let dy = 90;
    stroke('red')
    strokeWeight(3)
    point(50+add , 100+dy)
    strokeWeight(0)
    text('ω2' , 55+add ,100 +dy)
    stroke('purple')
    strokeWeight(3)
    point(50+add , 120+dy);
    strokeWeight(0)
    text('ω1' , 55 +add, 120+dy)


  strokeWeight(1);
    spring1.initialise(F0, k3,k1,m1,k2,m2, x10 , x20);
    spring1.update(t, factor);

    stroke('purple');
    strokeWeight(10);
    point(5 + spring1.w1*70, 340);

    stroke('red');
    strokeWeight(10);
    point(195 + spring1.w2*70, 340);

    strokeWeight(1)

  // position_graph1.update(spring1.y1);
  // position_graph1.draw(255, 0, 0);

  // position_graph2.update(spring1.y2);
  // position_graph2.draw(255, 0, 0);
  stroke(0);
  fill(0);
  document.getElementById("wd").textContent=spring1.w2.toFixed(4) + " rad/s";
document.getElementById("wn").textContent=spring1.w1.toFixed(4) + " rad/s";
document.getElementById("ww1").textContent=(spring1.w / spring1.w1).toFixed(4) + " rad/s";
document.getElementById("wn1").textContent=(spring1.w / spring1.w2).toFixed(4)
document.getElementById("x1").textContent= abs(spring1.x2).toFixed(4);
document.getElementById("x2").textContent= abs(spring1.x1).toFixed(4);
document.getElementById("xst").textContent= (spring1.F0 / spring1.k1).toFixed(4),
document.getElementById("x1st").textContent= abs(spring1.x2 / (spring1.F0 / spring1.k1)).toFixed(4),
document.getElementById("x2st").textContent= abs(spring1.x1 / (spring1.F0 / spring1.k1)).toFixed(4),

k1 = $("#fSpinner").spinner("value");
m1 = $("#omegaSpinner").spinner("value");
k2 = $("#k1Spinner").spinner("value");
m2 = $("#m1Spinner").spinner("value");
k3 = $("#k2Spinner").spinner("value");
F0 = $("#m2Spinner").spinner("value");
x10 = $("#x10Spinner").spinner("value");
x20 = $("#x20Spinner").spinner("value");

  push();


  // magFac2.initialise();
  // magFac2.draw();

  t = t + dt;

  function adjustCommentsWidth() {
    if ($(window).width() < 944) {
    
      $('#variables').css('width', '100%');
      document.getElementById('Results').style.display = "none";
      // document.getElementById('playpausebutton').style.display = "none";
      // document.getElementById('playPause').style.display = "none";

    } else {

      $('#variables').css('width', '200%');
      document.getElementById('Results').style.display = "none";
      // document.getElementById('playpausebutton').style.display = "none";
      // document.getElementById('playPause').style.display = "none";
 
    }
  }
 

  adjustCommentsWidth();
  

  $(window).resize(adjustCommentsWidth);
  //clear.mousePressed(clearMe);
}

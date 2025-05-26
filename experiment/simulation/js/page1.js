let showCodeBlock = true;
function runPage1() {
  background(255);
  // image(bg, 0, 0);
  // stroke(0);
  fill(0);

  push();
  textSize(16);
  textFont("'Nunito', sans-serif;");
  strokeWeight(0)
  text('Free Vibration System',210, 30);
  pop();

  push();
  stroke(0, 100);
  for (let i = 20; i < 591; i++) {
    point(i, 480);
    i += 2;
  }
  for (let i = 480; i < 970; i++) {
    point(300, i);
    i += 2;
  }
  pop();



position_graph1.update(spring1.y1);
position_graph1.draw(255, 0,0)

position_graph2.update(spring1.y2);
position_graph2.draw(255, 0, 0)


strokeWeight(0)

document.getElementById("wd").textContent=spring1.w2.toFixed(4) + " rad/s";
document.getElementById("wn").textContent=spring1.w1.toFixed(4) + " rad/s";
document.getElementById("ww1").textContent=((spring1.w1/spring1.w2)).toFixed(4) + " rad/s";
document.getElementById("wn1").textContent=(spring1.w / spring1.w2).toFixed(4)
document.getElementById("x1").textContent= abs(spring1.x2).toFixed(4);
document.getElementById("x2").textContent= abs(spring1.x1).toFixed(4);
document.getElementById("xst").textContent= ((spring1.x1/spring1.x2)).toFixed(4)+ " rad/s";
document.getElementById("x1st").textContent= abs(spring1.x2 / (spring1.F0 / spring1.k1)).toFixed(4),
document.getElementById("x2st").textContent= abs(spring1.x1 / (spring1.F0 / spring1.k1)).toFixed(4),

spring1.initialise(F0, k3,k1,m1,k2,m2, x10, x20);
spring1.update(t, factor);
spring1.show(0, 1, 0);
strokeWeight(0.5);  
line (spring1.masscoordinates[0], spring1.masscoordinates[1], position_graph1.graphend[0], position_graph1.graphend[1])
line (spring1.masscoordinates[2], spring1.masscoordinates[3], position_graph2.graphend[0], position_graph2.graphend[1])  

  k1 = $("#fSpinner").spinner("value");
  m1 = $("#omegaSpinner").spinner("value");
  k2 = $("#k1Spinner").spinner("value");
  m2 = $("#m1Spinner").spinner("value");
  k3 = $("#k2Spinner").spinner("value");
  F0 = $("#m2Spinner").spinner("value");
  x10 = $("#x10Spinner").spinner("value");
  x20 = $("#x20Spinner").spinner("value");

  

  strokeWeight(0);

  $('#playpausebutton').css({
    "opacity":1,
    "pointer-events":"auto"
  });
  $('#refreshbutton').css({
    "opacity":1,
    "pointer-events":"auto"
  });
  $('#Results1').css({
    "opacity":1,
    "pointer-events":"auto"
  });
  t = t + dt;
  function adjustCommentsWidth() {
    if ($(window).width() < 944) {
     
      $('#variables').css('width', '100%');
      document.getElementById('Results').style.display = "block";
      // $('#refreshbutton').css({
      //   "opacity":0.5,
      //     "pointer-events":"none"
      //     });
      // $('#playpausebutton').css({
      //     "opacity":0.5,
      //       "pointer-events":"none"
      //       });
      // document.getElementById('playpausebutton').style.display = "block";
      // document.getElementById('playPause').style.display = "block";

    } else {
    
      $('#variables').css('width', '100%');
      document.getElementById('Results').style.display = "block";
      // $('#playpausebutton').css({
      //   "opacity":0.5,
      //     "pointer-events":"none"
      //     });
      // document.getElementById('playpausebutton').style.display = "block";
      // document.getElementById('playPause').style.display = "block";
 
    }
    if ($(window).width() < 944) {
   
      $('#Results').css('width', '100%');
      document.getElementById('Results').style.display = "block";
      // document.getElementById('playpausebutton').style.display = "block";
      // document.getElementById('playPause').style.display = "block";

    } else {
     
      $('#Results').css('width', '100%');
      document.getElementById('Results').style.display = "block";
      // document.getElementById('playpausebutton').style.display = "block";
      // document.getElementById('playPause').style.display = "block";
 
    }
  }


  adjustCommentsWidth();
  

  $(window).resize(adjustCommentsWidth);
  
}


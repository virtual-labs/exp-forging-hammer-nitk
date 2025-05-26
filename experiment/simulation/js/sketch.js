// canvas
// let width = document.querySelector("#canvas-container").width;
// let height = document.querySelector("#canvas-container").height;
let width = 600;
let height = 600;

// counter
let t = 0.05;
let dt = 0.01;

// system
let spring1;

let J ;

// graphs
let position_graph1;
let position_graph2;
let magFac;
let magFac1;
let magFac2;
//let force_graph;
//let magFac;
//let phaseAng;

// inputs
//let slider_force;
//let slider_ang_freq;
// let k1;
// let k2;
// let m1;
// let m2;
// let w;
// let F0;

// factor
let factor = 1;

// images
let img;
let button1;
let button2;
let button3;
let button4;
let button5;
let spr;

// pages
let page1 = true;
let page2 = false;
let page3 = false;
let graphStep = 0;

// animation
let animation = true;
let touch = false;
let simTimeId;

// Buttons
let clear;
let gt;
let bluec;

function preload() {
  //   play = loadImage("images/blueplaydull.png");
  //   pause = loadImage("images/bluepausedull.png");
  //   graph = loadImage("images/graphbutton.png");
  //   back = loadImage("images/bluebkdulls.png");
  //   bg = loadImage("images/frame_copper_ver02.png");
  spr = loadImage("images/spring.png");
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
  document.querySelector(".graph-one").classList.add("display-hide");
  document.querySelector(".graph-two").classList.remove("display-hide");
  document.querySelector(".graph-div span").textContent = "Next";
}

function setup() {
  //   textFont("Comic Sans MS");
  //   console.log(document.querySelector("#canvas-container").offsetWidth);
  //   let canvas = createCanvas(
  //     document.querySelector("#canvas-container").offsetWidth,
  //     document.querySelector("#canvas-container").offsetHeight
  //   );
  var sketchCanvas = createCanvas(600, 370);
  sketchCanvas.parent("canvas-container");

  spring1 = new System(450, 305, 90, 25);
    
    position_graph1 = new Graph(50, 235, 100, 220, "x\u2081", "t");

    position_graph2 = new Graph(50, 150, 100, 220, "x\u2082", "t");

    magFac1 = new DynamicGraph(50, 340, 280, 280, "X/Xst", "ω", 0,7,0,10, System.mag_func1 , 0);
    magFac2 = new DynamicGraph(50, 340, 280, 280, "X/Xst", "ω",0, 7.2,0,10, System.mag_func2,255);

  //magFac = new DynamicGraph(125, 325, 230, 290, "Magnification Factor", "n", 0, 2.5, 0, 7.5, System.mag_func);
  //phaseAng = new DynamicGraph(125, 495, 150, 290, "Phase Angle", "n", 0, 2.5, 0, 180, System.phase_func);
document.getElementById("wd").textContent=spring1.w2.toFixed(4) + " rad/s";
document.getElementById("wn").textContent=spring1.w1.toFixed(4) + " rad/s";
document.getElementById("ww1").textContent=(spring1.w / spring1.w1).toFixed(4) + " rad/s";
document.getElementById("wn1").textContent=(spring1.w / spring1.w2).toFixed(4)
document.getElementById("x1").textContent= abs(spring1.x2).toFixed(4);
document.getElementById("x2").textContent= abs(spring1.x1).toFixed(4);
document.getElementById("xst").textContent= (spring1.F0 / spring1.k1).toFixed(4),
document.getElementById("x1st").textContent= abs(spring1.x2 / (spring1.F0 / spring1.k1)).toFixed(4),
document.getElementById("x2st").textContent= abs(spring1.x1 / (spring1.F0 / spring1.k1)).toFixed(4),
  varinit();
  k1 = $("#fSpinner").spinner("value");
  m1 = $("#omegaSpinner").spinner("value");
  k2 = $("#k1Spinner").spinner("value");
  m2 = $("#m1Spinner").spinner("value");
  k3 = $("#k2Spinner").spinner("value");
  F0 = $("#m2Spinner").spinner("value");
  x10 = $("#x10Spinner").spinner("value");
  x20 = $("#x20Spinner").spinner("value");
 
}

function draw() {
  if (page1) {
    runPage1();
  }

  if (page2) {
    runPage2();
  }

  if (page3) {
    runPage3();
  }
}


function simstate() {
  var imgfilename = document.getElementById("playpausebutton").src;
  imgfilename = imgfilename.substring(
    imgfilename.lastIndexOf("/") + 1,
    imgfilename.lastIndexOf(".")
  );

  if (animation) {
    noLoop();
    animation = false;
    document.getElementById("playpausebutton").src = "images/blueplaydull.svg";
    document.querySelector(".playPause").textContent = "Play";
  } else {
    loop();
    animation = true;
    document.getElementById("playpausebutton").src = "images/bluepausedull.svg";
    document.querySelector(".playPause").textContent = "Pause";
  }
}
document.querySelector(".graph-one").classList.add("display-hide");
  document.querySelector(".graph-div span").textContent = "Next";



function screenchangePhase() {
 
 
  document.querySelector(".graph-two").classList.remove("display-hide");
  document.querySelector(".graph-button span").textContent = "Next";
}


// let clickCount = 0;
function screenchangeMag() {
  graphStep += 1;
  
  if (graphStep === 1) {
    console.log("next to page 2");
    page1 = false;
    page2 = true;
    page3 = false;
    runPage2();
    document.querySelector(".graph-one").classList.remove("display-hide");
    document.querySelector(".graph-two").classList.remove("display-hide");
    document.querySelector(".graph-div span").textContent = "Prev/Next";
    $('#playpausebutton').css({
      "opacity":0.5,
      "pointer-events":"none"
    });
    $('#refreshbutton').css({
      "opacity":0.5,
      "pointer-events":"none"
    });
    $('#Results1').css({
      "opacity":0.5,
      "pointer-events":"none"
    });
  } else if (graphStep === 2) {
    console.log("next to page 3");
    page1 = false;
    page2 = false;
    page3 = true;
    runPage3();
    document.querySelector(".graph-two").classList.add("display-hide");
    // document.querySelector(".graph-three").classList.remove("display-hide");
    document.querySelector(".graph-div span").textContent = "Prev";
    $('#playpausebutton').css({
      "opacity":0.5,
      "pointer-events":"none"
    });
    $('#refreshbutton').css({
      "opacity":0.5,
      "pointer-events":"none"
    });
    $('#Results1').css({
      "opacity":0.5,
      "pointer-events":"none"
    });
  } else {
    console.log("next to page 1");
    graphStep = 0;
    page1 = true;
    page2 = false;
    page3 = false;
    runPage1();
    document.querySelector(".graph-one").classList.add("display-hide");
    // document.querySelector(".graph-three").classList.add("display-hide");
    document.querySelector(".graph-div span").textContent = "Next";
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
  }
}

function screenChangePrevious() {
  graphStep -= 1;
  
  if (graphStep === 0) {
    console.log("prev to page 1");
    page1 = true;
    page2 = false;
    page3 = false;
    runPage1();
    document.querySelector(".graph-one").classList.add("display-hide");
    document.querySelector(".graph-two").classList.remove("display-hide");
    document.querySelector(".graph-div span").textContent = "Next";
  } else if (graphStep === 1) {
    console.log("prev to page 2");
    page1 = false;
    page2 = true;
    page3 = false;
    runPage2();
    document.querySelector(".graph-one").classList.remove("display-hide");
    document.querySelector(".graph-two").classList.remove("display-hide");
    document.querySelector(".graph-div span").textContent = "Prev/Next";
  } else if (graphStep < 0) {
    console.log("Already on first page, can't go back further");
    graphStep = 0;
  } else {
    console.log("prev to page 3");
    page1 = false;
    page2 = false;
    page3 = true;
    runPage3();
    document.querySelector(".graph-two").classList.add("display-hide");
    document.querySelector(".graph-three").classList.remove("display-hide");
    document.querySelector(".graph-div span").textContent = "Prev";
  }
}



function phaseAngleGraph() {
  // resetGraphs();
  page1 = false;
  page2 = true;
  page3 = false;
  runPage2();

  magFac1.initialise();
  // phaseAng.initialise();
}

function magnitudeGraph() {
  // resetGraphs();
  page1 = false;
  page2 = false;
  page3 = true;
  runPage3();
// console.log("SECOND")
  magFac2.initialise();
  // phaseAng.initialise();
}
// function mousePressed() {
//   console.log(mouseX, mouseY);
//   handleEvents();
// }

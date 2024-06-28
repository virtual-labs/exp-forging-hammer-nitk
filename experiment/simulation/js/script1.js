let F0, w, k1, m1, k2, m2;
// let width, height;
var rotstatus=1;
function startsim() {
  // console.log(1);

  // simTimeId = setInterval("time=time+0.1; varupdate(); ", "100");
}


// switches state of rotation between 1:CounterClockWise & -1:Clockwise
document.addEventListener("DOMContentLoaded", function() {
  console.log("DOM fully loaded and parsed");

  var refreshButton = document.getElementById("refreshbutton");
  var refreshLink = document.getElementById('refreshLink');
  
  if (!refreshButton) {
    console.error("Refresh button not found");
    return;
  }
  
  if (!refreshLink) {
    console.error("Refresh link not found");
    return;
  }

  function refresh(event) {
    event.preventDefault();
    console.log("Refresh button clicked");

    if (window.getComputedStyle(refreshButton).opacity == "1") {
      console.log("Button is enabled, proceeding with refresh");
      var imgfilename = refreshButton.src;
      imgfilename = imgfilename.substring(
        imgfilename.lastIndexOf("/") + 1,
        imgfilename.lastIndexOf(".")
      );

      if (imgfilename == "bluecwdull") {
        refreshButton.src = "images/blueccwdull.svg";
        rotstatus = -1;
      } else if (imgfilename == "blueccwdull") {
        refreshButton.src = "images/bluecwdull.svg";
        rotstatus = 1;
      }
      location.reload();
    } else {
      console.log("Button is disabled");
    }
  }

  function enableRefreshButton() {
    refreshButton.style.opacity = "1";
    refreshButton.style.pointerEvents = "auto";
    console.log("Refresh button enabled");
  }

  function disableRefreshButton() {
    refreshButton.style.opacity = "0.5";
    refreshButton.style.pointerEvents = "none";
    console.log("Refresh button disabled");
  }

  // Add event listeners to the refresh button
  refreshButton.addEventListener('click', refresh);
  refreshButton.addEventListener('touchstart', refresh);

  // Initially disable the button
  disableRefreshButton();

  // Enable the button after 3 seconds for demonstration purposes
  // setTimeout(enableRefreshButton, 3000);
});




function varinit() {
  varchange();

  // Add event listeners to the spinner inputs for validation
  $("#fSpinner").on("input", function() {
    validatePositiveInput("#fSpinner");
  });

  $("#omegaSpinner").on("input", function() {
    validatePositiveInput("#omegaSpinner");
  });

  $("#k1Spinner").on("input", function() {
    validatePositiveInput("#k1Spinner");
  });

  $("#m1Spinner").on("input", function() {
    validatePositiveInput("#m1Spinner");
  });

  $("#k2Spinner").on("input", function() {
    validatePositiveInput("#k2Spinner");
  });

  $("#m2Spinner").on("input", function() {
    validatePositiveInput("#m2Spinner");
  });

  $("#x10Spinner").on("input", function() {
    validatePositiveInput("#x10Spinner");
  });

  $("#x20Spinner").on("input", function() {
    validatePositiveInput("#x20Spinner");
  });

    // Set initial values for sliders and spinners
    $("#fSlider").slider("value", 5);
    $("#fSpinner").spinner("value", 5);
  
    $("#omegaSlider").slider("value", 10);
    $("#omegaSpinner").spinner("value", 10);
  
    $("#k1Slider").slider("value", 5);
    $("#k1Spinner").spinner("value", 5);
  
    $("#m1Slider").slider("value", 10);
    $("#m1Spinner").spinner("value", 10);
  
    $("#k2Slider").slider("value", 1);
    $("#k2Spinner").spinner("value", 1);
  
    $("#m2Slider").slider("value", 1);
    $("#m2Spinner").spinner("value", 1);

    $("#x10Slider").slider("value", 1);
    $("#x10Spinner").spinner("value", 1);

    $("#x20Slider").slider("value", 1);
    $("#x20Spinner").spinner("value", 1);
  
    varupdate();
  }

// Initialise and Monitor variable containing user inputs of system parameters.
//change #id and repeat block for new variable. Make sure new <div> with appropriate #id is included in the markup
function varchange() {
  //Link AB
  // slider initialisation : jQuery widget
  $("#fSlider").slider({ max: 20, min: 5, step: 2 });

  // number initialisation : jQuery widget
  $("#fSpinner").spinner({ max: 20, min: 5, step: 2  });
  // monitoring change in value and connecting slider and number
  // setting trace point coordinate arrays to empty on change of link length
  $("#fSlider").on("slide", function (c, ui) {
    $("#fSpinner").spinner("value", ui.value);
    ptx = [];
    pty = [];
  });
  $("#fSpinner").on("spin", function (c, ui) {
    $("#fSlider").slider("value", ui.value);
    ptx = [];
    pty = [];
  });
  $("#fSpinner").on("change", function () {
    varchange();
  });

  $("#omegaSlider").slider({ max: 50, min: 10, step: 1 });

  // number initialisation : jQuery widget
  $("#omegaSpinner").spinner({ max: 50, min: 10, step: 1  });
  // monitoring change in value and connecting slider and number
  // setting trace point coordinate arrays to empty on change of link length
  $("#omegaSlider").on("slide", function (c, ui) {
    $("#omegaSpinner").spinner("value", ui.value);
    ptx = [];
    pty = [];
  });
  $("#omegaSpinner").on("spin", function (c, ui) {
    $("#omegaSlider").slider("value", ui.value);
    ptx = [];
    pty = [];
  });
  $("#omegaSpinner").on("change", function () {
    varchange();
  });

  $("#k1Slider").slider({ max: 20, min: 5, step: 2 });
  // number initialisation : jQuery widget
  $("#k1Spinner").spinner({ max: 20, min: 5, step: 2 });
  // monitoring change in value and connecting slider and number
  // setting trace point coordinate arrays to empty on change of link length
  $("#k1Slider").on("slide", function (c, ui) {
    $("#k1Spinner").spinner("value", ui.value);
    ptx = [];
    pty = [];
  });
  $("#k1Spinner").on("spin", function (c, ui) {
    $("#k1Slider").slider("value", ui.value);
    ptx = [];
    pty = [];
  });
  $("#k1Spinner").on("change", function () {
    varchange();
  });

  $("#m1Slider").slider({ max: 50, min: 10, step: 1});
  // number initialisation : jQuery widget
  $("#m1Spinner").spinner({ max: 50, min: 10, step: 1});
  // monitoring change in value and connecting slider and number
  // setting trace point coordinate arrays to empty on change of linm length
  $("#m1Slider").on("slide", function (c, ui) {
    $("#m1Spinner").spinner("value", ui.value);
    ptx = [];
    pty = [];
  });
  $("#m1Spinner").on("spin", function (c, ui) {
    $("#m1Slider").slider("value", ui.value);
    ptx = [];
    pty = [];
  });
  $("#m1Spinner").on("change", function () {
    varchange();
  });

  $("#k2Slider").slider({ max: 50, min: 10, step: 0.5 });
  // number initialisation : jQuery widget
  $("#k2Spinner").spinner({ max: 50, min: 10, step: 0.5 });
  // monitoring change in value and connecting slider and number
  // setting trace point coordinate arrays to empty on change of link length
  $("#k2Slider").on("slide", function (c, ui) {
    $("#k2Spinner").spinner("value", ui.value);
    ptx = [];
    pty = [];
  });
  $("#k2Spinner").on("spin", function (c, ui) {
    $("#k2Slider").slider("value", ui.value);
    ptx = [];
    pty = [];
  });
  $("#k2Spinner").on("change", function () {
    varchange();
  });

  $("#m2Slider").slider({ max: 50, min: 10, step: 0.5 });
  // number initialisation : jQuery widget
  $("#m2Spinner").spinner({ max: 50, min: 10, step: 0.5 });
  // monitoring change in value and connecting slider and number
  // setting trace point coordinate arrays to empty on change of linm length
  $("#m2Slider").on("slide", function (c, ui) {
    $("#m2Spinner").spinner("value", ui.value);
    ptx = [];
    pty = [];
  });
  $("#m2Spinner").on("spin", function (c, ui) {
    $("#m2Slider").slider("value", ui.value);
    ptx = [];
    pty = [];
  });
  $("#m2Spinner").on("change", function () {
    varchange();
  });

  
  //new
  $("#x10Slider").slider({ max: 1, min: -1, step: 1 });
  // number initialisation : jQuery widget
  $("#x10Spinner").spinner({ max: 1, min: -1, step: 1 });
  // monitoring change in value and connecting slider and number
  // setting trace point coordinate arrays to empty on change of linm length
  $("#x10Slider").on("slide", function (c, ui) {
    $("#x10Spinner").spinner("value", ui.value);
    ptx = [];
    pty = [];
  });
  $("#x10Spinner").on("spin", function (c, ui) {
    $("#x10Slider").slider("value", ui.value);
    ptx = [];
    pty = [];
  });
  $("#x10Spinner").on("change", function () {
    varchange();
  });


  $("#x20Slider").slider({ max: 1, min: -1, step: 1 });
  // number initialisation : jQuery widget
  $("#x20Spinner").spinner({ max: 1, min: -1, step: 1 });
  // monitoring change in value and connecting slider and number
  // setting trace point coordinate arrays to empty on change of linm length
  $("#x20Slider").on("slide", function (c, ui) {
    $("#x20Spinner").spinner("value", ui.value);
    ptx = [];
    pty = [];
  });
  $("#x20Spinner").on("spin", function (c, ui) {
    $("#x20Slider").slider("value", ui.value);
    ptx = [];
    pty = [];
  });
  $("#x20Spinner").on("change", function () {
    varchange();
  });

  varupdate();
}



function varupdate() {
  $("#fSlider").slider("value", $("#fSpinner").spinner("value"));
  $("#omegaSlider").slider("value", $("#omegaSpinner").spinner("value"));
  $("#k1Slider").slider("value", $("#k1Spinner").spinner("value"));
  $("#m1Slider").slider("value", $("#m1Spinner").spinner("value"));
  $("#k2Slider").slider("value", $("#k2Spinner").spinner("value"));
  $("#m2Slider").slider("value", $("#m2Spinner").spinner("value"));
  k1 = $("#fSpinner").spinner("value");
  m1 = $("#omegaSpinner").spinner("value");
  k2 = $("#k1Spinner").spinner("value");
  m2 = $("#m1Spinner").spinner("value");
  k3 = $("#k2Spinner").spinner("value");
  F0 = $("#m2Spinner").spinner("value");
  x10 = $("#x10Spinner").spinner("value");
  x20 = $("#x20Spinner").spinner("value");

  

}
function movetoTop() {

  const firstDiv = document.querySelector("#simulation");
  if (firstDiv) {
      firstDiv.scrollIntoView({ behavior: "smooth" });
  }
}


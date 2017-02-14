// Get a reference to the button element in the DOM
var button = document.getElementById("converter");
var clear = document.getElementById("clear")
// Get a reference to the input element in the DOM
var todaysTemp = document.getElementById("user_input");
// Get a reference to output element in DOM
var output = document.getElementById("output")
// Get a reference to radio button in DOM
var toC = document.getElementById("toC");
var toF = document.getElementById("toF");


// Functions needed to convert:
function toCelsius (todaysTemp) {
    var Cvalue = (todaysTemp.value - 32) * .5566;
    return Cvalue;
}

function toFahrenheit (todaysTemp) {
    var Fvalue =  (todaysTemp.value * 9 / 5) + 32;
    return Fvalue;

}


// This function should determine which conversion should
// happen based on which radio button is selected.
function determineConverter (clickEvent) {
  // console.log("event", clickEvent);
  if (toC.checked) {
    console.log(toCelsius(todaysTemp));
  } else if (toF.checked) {
    console.log(toFahrenheit(todaysTemp));
  } else {
    console.log("punch a button")
  }
}

window.addEventListener("keypress", checkEnter)
function checkEnter (e) {
  if (e.keyCode === 13) {
    determineConverter();
  }
};

// Assign a function to be executed when the button is clicked
button.addEventListener("click", determineConverter);
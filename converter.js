// Get a reference to the button element in the DOM
var button = document.getElementById("converter");
// Get a reference to the input element in the DOM
var input = document.getElementById("user_input")

// Functions needed to convert:
function toCelsius (input) {

}

function toFahrenheit (input) {

}


// This function should determine which conversion should
// happen based on which radio button is selected.
function determineConverter (clickEvent) {
  console.log("event", clickEvent);
}

// Assign a function to be executed when the button is clicked
button.addEventListener("click", determineConverter);
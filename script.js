//your JS code here. If required.
// Get the element with id "level"
let element = document.getElementById("level");

// Initialize level counter
let level = 0;

// Traverse up the DOM tree until html element
while (element) {
  level++;
  element = element.parentElement;
}

// Show result using alert
alert("The level of the element is: " + level);


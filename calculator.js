
// click response & placing variables in the display area 
let buttons = document.querySelectorAll(".button")
const displayScreen = document.querySelector('#container')
console.log(buttons)

let fullDisplay = [];
// use let not const here so when the variable changes in 34 it can change
for (let button of buttons) {
    button.addEventListener('click', function (event) {
        console.log(event.target.innerText)
        let buttonValue = event.target.innerText;
        fullDisplay.push(buttonValue);
        displayScreen.innerText = fullDisplay.join("");
        // forces to display buttons when clicked 
    })
}

// = .js
// apply eval to contents of display
const equalButton = document.querySelector("#equals");
equalButton.addEventListener('click', function (event) {
    // make clicking the equals button evaluate the expression
    // in the displayScreen and display the solution
    const answer = eval(displayScreen.innerText)
    console.log(answer);
    displayScreen.innerText = answer; 
})

// clear.js
const clearButton = document.querySelector(".clear");
clearButton.addEventListener('click', function (event) {
    displayScreen.innerText = "";
    fullDisplay = [];
})
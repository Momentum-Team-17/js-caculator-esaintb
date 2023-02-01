let buttons = document.querySelectorAll(".button")
const screen = document.querySelector('#container')
console.log(buttons)

const fullDisplay = [];
for (let button of buttons) {
    button.addEventListener('click', function (event) {
        console.log(event.target.innerText)
        let buttonValue = event.target.innerText;
        fullDisplay.push(buttonValue);
        screen.innerText = fullDisplay.join("");
    })
}


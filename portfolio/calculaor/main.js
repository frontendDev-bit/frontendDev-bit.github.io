let display = document.querySelector(".display");
const MAX_LENGTH = 11

let buttons = Array.from(document.querySelectorAll(".button"));

buttons.map((button) => {
    button.addEventListener("click", (e) => {
        switch(e.target.innerText) {

            case "AC":
                display.innerText = "0";
                break

            case "=":
                try {
                    let result = eval(display.innerText);
                    display.innerText = parseFloat(result.toFixed(5)).toString().slice(0, MAX_LENGTH);
                } catch (e) {
                    display.innerText = "Error";
                }
                break;

            case "%": 
                let passedText = display.innerText + "/100";
                let result = eval(passedText)
                display.innerText = parseFloat(result.toFixed(5)).toString().slice(0, MAX_LENGTH);
                break

            case "^":
                let squared = display.innerText * display.innerText;
                display.innerText = parseFloat(squared.toFixed(5)).toString().slice(0, MAX_LENGTH);
                break;

                case "×":
                    if (display.innerText.length === 1 || display.innerText === "Error") {
                        display.innerText = "0"; 
                    } else {
                        display.innerText = display.innerText.slice(0, -1); 
                    }
                break;

            default:
                const input = e.target.innerText;

                if (display.innerText.length >= MAX_LENGTH && display.innerText !== "0") break;

                const lastNumber = display.innerText.split(/[\+\-\*\/]/).pop();

                if (lastNumber.includes(".")) {
                    const decimalPart = lastNumber.split(".")[1];
                    if (decimalPart.length >= 2 && input.match(/[0-9]/)) break;
                }

                if (input === "." && lastNumber.includes(".")) break;

                if (display.innerText === "0" && input !== ".") {
                    display.innerText = input;
                } else {
                    display.innerText += input;
                }
                break;

        }
    });
});
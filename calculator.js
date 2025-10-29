const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

let currentInput = "";

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const value = button.textContent;

        if(value=== "CE") {
            display.textContent = "0"
            currentInput = "";
        }else if(value=== "=") {
            try {
                let result = eval(currentInput);
                display.textContent = result;
            } catch {
                display.textContent = "Error";
                currentInput = "";
            }
        } else {
            if (display.textContent === "0") {
                currentInput = value;
            } else {
                currentInput += value;
            }
            display.textContent = currentInput;
        }
    });
});


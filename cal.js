// select all the buttons
let btns = document.querySelectorAll("button");

// select the screen to show output
let display = document.getElementById("screen");
let result = "";

// loop to get all buttons innner text value

for (let items of btns) {
  'use strict';
  items.addEventListener("click", (e) => {
    let btn = e.target.innerText;

    switch (btn) {
      // to clear screen
      case "C":
        display.innerText = "";
        break;

      // backspace
      case "←":
        if (display.innerText)
          display.innerText = display.innerText.slice(0, -1);
        break;

      // to evaluate the result
      case "=":
        try {
          result = display.innerText;
          display.innerText = eval(result);
         display.innerText = Number.parseFloat(display.innerText);
       
        } catch {
          //   display.style.color= "red";
          display.innerText = "Invalid Input";
        }
        break;

      // trigonometry & function start

      case "sin":
        display.innerText = Math.sin(display.innerText).toFixed(8);
        // display.innerText += btn;
        // eval(Math.sin(display.innerText));
        break;
      case "cos":
        display.innerText = Math.cos(display.innerText).toFixed(8);
        break;
      case "tan":
        display.innerText = Math.tan(display.innerText).toFixed(8);
        break;
      case "cot":
        display.innerText = 1 / Math.tan(display.innerText).toFixed(8);
      case "cosec":
        display.innerText = 1 / Math.sin(display.innerText).toFixed(8);
        break;
      case "sec":
        display.innerText = 1 / Math.cos(display.innerText).toFixed(8);
        break;

      case "abs":
        display.innerText = Math.abs(display.innerText);
        break;
      case "round":
        display.innerText = Math.round(display.innerText);
        break;
      case "floor":
        display.innerText = Math.floor(display.innerText);
        break;
      case "ceil":
        display.innerText = Math.ceil(display.innerText);
        break;

      // trigonometry & function end //

      case "x":
        btn = "*";
        display.innerText += btn;
        break;

      case "÷":
        btn = "/";
        display.innerText += btn;
        break;

      case "π":
        // result += btn; 
        // display.innerText += btn;
        display.innerText += Math.PI.toFixed(10);
        eval(display.innerText);
        break;
      case "e":
        display.innerText += Math.E.toFixed(10);
        eval(display.innerText);
        break;

      case "𝑥^2":
        display.innerText = eval(display.innerText) * eval(display.innerText);
        break;

      case "1/𝑥":
        display.innerText = eval(1 / display.innerText).toFixed(8);
        break;

      case "|𝑥|":
        display.innerText = Math.abs(display.innerText);
        break;

      case "exp":
        display.innerText = Math.exp(display.innerText).toFixed(8);
        break;
      case "mod":
        btn = "%";
        display.innerText += btn;
        break;

      case "2√𝑥":
        display.innerText = Math.sqrt(display.innerText).toFixed(8);
        break;
      case "10𝑥":
        display.innerText = 10 ** eval(display.innerText);
        break;

      case "log":
        display.innerText = Math.log10(display.innerText).toFixed(8);
        break;
      case "ln":
        display.innerText = Math.log(display.innerText).toFixed(8);
        break;

      case "𝑥^y":
       btn = "**";
       display.innerText += btn;
      //  display.innerText = eval(display.innerText);
        break;

      case "+/-":
        display.innerText = display.innerText * (-1);
        break;

      default:
        display.innerText += btn;
    }
  });
}

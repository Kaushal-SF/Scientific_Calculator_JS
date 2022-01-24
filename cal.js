let btns = document.querySelectorAll("button");
let display = document.getElementById("screen");
let result = "";

for (let items of btns) {
  items.addEventListener("click", (e) => {
    let btn = e.target.innerText;

    switch (btn) {
      case "C":
        display.innerText = "";
        break;

      case "←":
        if (display.innerText)
          display.innerText = display.innerText.slice(0, -1);
        break;

      case "=":
        try {
          result = display.innerText;
          display.innerText = eval(result);
        } catch {
          //   display.style.color= "red";
          display.innerText = "Invalid Input";
        }
        break;

      // trigonometry & function start

      case "sin":
        //   display.innerText += btn;
        display.innerText = Math.sin(display.innerText);
        break;
      case "cos":
        display.innerText = Math.cos(display.innerText);
        break;
      case "tan":
        display.innerText = Math.tan(display.innerText);
        break;
        case "cot":
          display.innerText = 1 / Math.tan(display.innerText);
      case "cosec":
        display.innerText = 1/ Math.sin(display.innerText);
        break;
      case "sec":
        display.innerText = 1 / Math.cos(display.innerText);
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

      // trigonometry & function end

      case "X":
        btn = "*";
        display.innerText += btn;
        break;

      case "÷":
        btn = "/";
        display.innerText += btn;
        break;

      case "π":
        display.innerText = Math.PI;
        break;
      case "e":
        display.innerText = Math.E;
        break;
      case "exp":
        display.innerText = Math.exp(display.innerText);
        break;
      case "mod":
        btn = "%";
        display.innerText += btn;
        break;

      default:
        display.innerText += btn;
    }
  });
}

// result += btn;
// display.innerText = result;

// // if(btn == "="){
// //     result = eval(input_scr);
// // }
// if(btn == "C"){
//     result = "";
//     display.value = result;
// }

// select all the buttons
let btns = document.querySelectorAll("button");

// select the screen to show output
let display = document.getElementById("screen");
let result = "";
let memory = "";
let curr_dis_val;

// loop to get all buttons 

for (let items of btns) {
  ("use strict");

  // put an event on click to get innerText value
  items.addEventListener("click", (e) => {
    let btn = e.target.innerText;

    switch (btn) {
      // --------- memory functions start --------- //

      // memory clear (MC)
      case "MC":
        memory = "";
        break;

      // memory Store (MS - holds the memory value )
      case "MS":
        memory = display.innerText;
        break;

      // memory recall (MR - get the saved memory value )
      case "MR":
        console.log("in MR: " + memory);
        display.innerText += memory;
        break;

      // memory add (to add the memory val with current result) 
      case "M+":
        // first save the value using MS then apply M+
        curr_dis_val = Number.parseFloat(display.innerText);
        memory = Number.parseFloat(memory);
        memory += curr_dis_val;                        // adding the ms value with current display value:
        display.innerText = memory;
        break;

      case "M-":
        // first save the value using MS then apply M-
        curr_dis_val = Number.parseFloat(display.innerText);
        memory = Number.parseFloat(memory);
        memory = memory - curr_dis_val;              // subtract the ms value with current display value  
        display.innerText = memory;
        break;


      // Tested example: 20*72 + 9*80 - 15*41 + 11*33 - 13*64:

      // How it works: 20*72 (MS) + 9*80 (M+) - 15*41 (M-) + 11*33 (M+) - 13*64 (M-) = 1076

      /* At start save the result of equation in MS then get the result for next equation then press M+
          and continue untill the end of equation  */


      // ---------- memory functions end  ------------  //


      // to clear screen
      case "C":
        display.innerText = "";
        // memory = "";
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
          display.innerText = "Invalid Input";
        }
        break;

      // ----------- trigonometry & function start ----------- //

      case "sin":
        display.innerText = Math.sin(display.innerText).toFixed(8);
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

      // -----------  trigonometry & function end  ----------- //

      // ------------ Another Functions Start ------------  //

      case "x":
        btn = "*";
        display.innerText += btn;
        break;

      case "÷":
        btn = "/";
        display.innerText += btn;
        break;

      case "π":
        display.innerText += Math.PI.toFixed(10);
        eval(display.innerText);
        break;

      case "e":
        display.innerText += Math.E.toFixed(10);
        eval(display.innerText);
        break;

       // num^2 
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

        // square root
      case "2√𝑥":
        display.innerText = Math.sqrt(display.innerText);
        break;

      // factorial of number  
      case "n!":
        let num = Number.parseFloat(display.innerText);

        function fact(val) {
          if (val < 0) return -1;
          else if (val == 0) return 1;
          else {
            return val * fact(val - 1);
          }
        }
        let rslt = fact(num);
        display.innerText = rslt;
        break;

      // 10^num
      case "10𝑥":
        display.innerText = 10 ** eval(display.innerText);
        break;

      case "log":
        display.innerText = Math.log10(display.innerText).toFixed(8);
        break;

      case "ln":
        display.innerText = Math.log(display.innerText).toFixed(8);
        break;

      // num^num
      case "𝑥^y":
        btn = "**";
        display.innerText += btn;
        break;

      case "+/-":
        display.innerText = display.innerText * -1;
        break;

      // ------------ Another Functions Start ------------  //

      default:
        display.innerText += btn;
    }
  });
}

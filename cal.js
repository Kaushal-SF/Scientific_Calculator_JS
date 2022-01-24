let btns = document.querySelectorAll("button");
let display = document.getElementById("screen");
let result = "";

for (let items of btns) {
  items.addEventListener("click", (e) => {
    let btn = e.target.innerText;

    switch (btn) {
        case "X":
            
            btn = "*";
            display.innerText += btn; 
            break;

      case "C":
        display.innerText = "";
        break;

      case "←":
          if(display.innerText)
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

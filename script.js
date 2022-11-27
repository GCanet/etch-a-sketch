let container = document.querySelector(`.container`);

// start button

let startBUTTON = document.getElementById(`start`).addEventListener(`click`, startagain);

function startagain() {
  let numbers = prompt("Enter a number from 16 to 100: ", "");
  let a = numbers;
  canvas(a);
}

// drawing the grid function

function canvas(a) {
  let total = (a * a)
  let mod = a + 1;

  if (a < 100 || a > 15) {
      for (let i = 0; i < total; i++) {
        let div = document.createElement('div');

        if (i % mod === 0) {
          div.style.cssText = "border: 1px solid black";
        } else {
          div.style.cssText = "border: 1px solid black; height: 25px; width: 25px";
          div.style.backgroundColor = "white"
        }
        container.appendChild(div).setAttribute(`class`, `gridDivs`);
        div.innerHTML = "";
        div.addEventListener(`click`, paintit);
        div.addEventListener(`mouseover`, trailit);
      }
  if (a > 100 || a < 15) {
      alert(`Number has to be lower than 100 and higher than 15.`);
     }
  }
}

// click to black and hoover gray tail

function paintit(e) {
  e.target.style.backgroundColor = `#000`;
}

function trailit(e) {
  e.target.style.backgroundColor = `gray`;
}

// clear button

let clearBUTTON = document.getElementById(`clear`).addEventListener(`click`, clearall);

function clearall() {
    for (let i = 0; i < 2000; i++) {
      container[i].removeChild();
  }
}
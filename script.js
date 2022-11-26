let container = document.querySelector(`.container`);

// start button

let startBUTTON = document.getElementById(`start`);
startBUTTON.addEventListener(`click`, startagain());

function startagain() {
  let numbers = prompt("Enter a number from 16 to 100: ", "");
  let a = numbers;
  canvas(a);
}

// clear button

let clearBUTTON = document.getElementById(`clear`);
clearBUTTON.addEventListener(`click`, clearall());

function clearall() {
  let elements = document.getElementsByClassName(`.gridDivs`);
    for (let i = 0; i < elements.length; i++) {
      elements[i].removeChild();
  }
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
        }
        container.appendChild(div).setAttribute(`class`, `gridDivs`);
      }
  if (a > 100 || a < 15) {
      alert(`Number has to be lower than 100 and higher than 15.`);
     }
  }
}

// click to black and hoover gray tail


let grid = document.getElementsByClassName(`.container > div`);
grid.addEventListener(`click`, paintit());
grid.addEventListener(`hoover`, trailit());

function paintit(e) {
  e.target.style.backgroundColor = `black`;
}

function trailit(e) {
  e.target.style.backgroundColor = `gray`;
}
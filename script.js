let container = document.querySelector(`.container`);

// start button

function start() {
  let numbers = prompt("Enter a number from 16 to 100: ", "");
  let a = numbers;
  canvas(a);
}

let startBUTTON = document.getElementById(`start`).addEventListener
(`click`, start());

// clear button

function clear() {
  let elements = document.getElementsByClassName(`.container`);
    for (let i = 0; i < elements.length; i++) {
      elements[i].removeChild();
  }
}

let clearBUTTON = document.getElementById(`clear`).addEventListener
(`click`, clear());

// drawing the grid function

function canvas(a) {
  let total = (a * a) + a
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

let newchild = document.getElementsByClassName(`.gridDivs`);

let paintgrid = newchild.addEventListener
(`click`, () => {
    paintgrid.style.backgroundColor = `black`;
  });

let hooverdiv = newchild.addEventListener
(`hoover`, () => {
    hooverdiv.style.backgroundColor = `gray`;
  });
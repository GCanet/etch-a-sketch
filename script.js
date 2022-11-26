let container = document.querySelector(`.container`);
let newchild = document.querySelectorAll(`.gridDivs`);

// start button

function start() {
  var numbers = prompt("Enter two equal numbers (max value: 100) separated by x: ", "");
  let a = numbers.split("x")[0];
  let b = numbers.split("x")[1];
  canvas(a, b);
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

function canvas(a, b) {
  if (
    (a < 100 === b < 100) ||
    (a > 15 || b > 15) 
    ){
      for (let i = 0; i < a; i++) {
        newchild.appendChild(document.createElement(`p`)).setAttribute(`class`, `gridp`);
      }
      for (let i = 0; i < b; i++) {
        container.appendChild(document.createElement(`div`)).setAttribute(`class`, `gridDivs`);
      }
  }
  if (
    (a > 100 && b > 100) ||
    (a < 15 && b < 15) 
    ){
      alert(`Number has to be lower than 100 and higher than 15.`);
  }
}

// click to black and hoover gray tail

let paintgrid = document.getElementByClass(`.gridDivs`).addEventListener
(`click`, () => {
    paintgrid.style.backgroundColor = `black`;
  });

let paintp = document.getElementByClass(`.gridp`).addEventListener
(`click`, () => {
    paintp.style.backgroundColor = `black`;
  });

let hooverdiv = document.getElementByClass(`.gridDivs`).addEventListener
(`hoover`, () => {
    hooverdiv.style.backgroundColor = `gray`;
  });

let hooverp = document.getElementByClass(`.gridp`).addEventListener
(`hoover`, () => {
    hooverp.style.backgroundColor = `gray`;
  });
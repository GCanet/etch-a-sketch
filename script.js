// declaring variables for creating elements later

let container = document.querySelector(`.container`);

let newDiv = document.createElement(`div`);
newDiv.setAttribute(`class`, `gridDivs`);

let newP = document.createElement(`p`);
newP.setAttribute(`class`, `gridp`)

let NEWROW = document.container.appendChild(newDiv);
let NEWCHILD = queryselectorAll(`.container > div`).appendChild(newP);

// start button + NEED WORK

let startBUTTON = document.getElementById(`start`).addEventListener
(`click`, start());

function start() {
  clear();
  prompt(`something with arrays to take a and b`);
  // use those to run;
  container.canvas(a, b);
}

// clear button

let clear = document.getElementById(`clear`);
    clear.onclick = function(){
     var elements = document.getElementsByClassName(`.container`);
        for (var i = 0; i < elements.length; i++) {

          elements[i].removeChild();
        }
}

// drawing the grid function

function canvas(a, b) {
  if (a == b) {
    for (let i = 0; i < a; i++) {
      NEWCHILD++;
    }
    for (let i = 0; i < b; i++) {
      NEWROW++;
    }
  }
  if (a > 100 || b > 100) {
    alert(`The number needs to be lower than 100.`);
    clear++;
  }
}

// click to black and hoover gray tail

let paintgrid = document.getElementByClass(`gridDivs`).addEventListener
(`click`, () => {
    paintgrid.style.backgroundColor = `black`;
  });

let paintp = document.getElementByClass(`gridp`).addEventListener
(`click`, () => {
    paintgrid.style.backgroundColor = `black`;
  });

let hooverdiv = document.getElementByClass(`gridDivs`).addEventListener
(`hoover`, () => {
    hooverdiv.style.backgroundColor = `gray`
  });

let hooverp = document.getElementByClass(`gridp`).addEventListener
(`hoover`, () => {
    hooverp.style.backgroundColor = `gray`
  });
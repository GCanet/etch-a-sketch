let container = document.querySelector(`.container`);
canvas(16);

// start button

let startBUTTON = document.getElementById(`start`).addEventListener(`click`, startagain);

function startagain() {
  container.innerHTML = '';
  let numbers = prompt(`Enter a number from 16 to 100: `);
  let a = numbers;
  canvas(a);
}

// drawing the grid function

function canvas(a) {
  let totala = a * a;
  let squareSize = document.querySelector(`.container`).clientWidth / a;
  
  if (a < 100 || a > 15) {
    for (let i = 1; i < totala; i++) {
      let div = document.createElement(`div`);
      container.appendChild(div).setAttribute(`class`, `gridDivs`);
      div.style.width = squareSize + `px`;
      div.style.height = squareSize + `px`;       
      div.addEventListener(`click`, paintit);
      div.addEventListener(`mouseover`, trailit);
    }
  }
  if (a > 100 || a < 15) {
      alert(`Number has to be lower than 100 and higher than 15.`);
  }
}

// click to black and hoover gray tail functions

function paintit(e) {
  e.target.style.backgroundColor = `white`;
}

function trailit(e) {
  e.target.style.backgroundColor = `black`;
}

// clear button

let clearBUTTON = document.getElementById(`clear`).addEventListener(`click`, clearall);

function clearall() {
    container.innerHTML = '';
    canvas(16);
  }
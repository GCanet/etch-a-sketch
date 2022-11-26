/* container.forEach((div) => {
  div.addEventListener('click', () => {
    // code
  });
});

container.forEach((div) => {
  div.addEventListener('hoover', () => {
    // code
  });
}); */

let container = document.querySelector(`.container`);
let newDiv = document.createElement(`div`);
let newP = document.createElement(`p`);
let newROW = document.newDiv.appendChild(newP);
let startBUTTON = document.getElementById(`start`).addEventListener
(`click`, start());
let clearBUTTON = document.getElementById(`clear`).addEventListener
(`click`, clear());

function start() {
  clear();
  prompt("something with arrays to take a and b");
  // use those to run;
  container.rows(a, b);
}

function clear() {
  // code to clear canvas respecting last size
}

function rows(a, b) {
  if (a == b) {
    for (let i = 0; i < a; i++) {
      neWROW++;
    }
    for (let i = 0; i < b; i++) {
      newDiv++;
    }
  }
  if (a > 100 || b > 100) {
    alert(`The number needs to be lower than 100.`);
    // function to restart
  }
}
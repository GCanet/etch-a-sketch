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

container.newDiv.newP

let x;
// x = prompt(something with arrays to take a and b);

function grid(a, b) {
  if (a == b) {
    for (let i = 0; i < a; i++) {
      newP++;
    }
    for (let i = 0; i < b; i++) {
      newDiv++;
    }
  }
  if (a > 100 || b > 100) {
    alert(`The number needs to be lower than 100.`)
  }
}
// declaring variables for creating elements later

let container = document.querySelector(`.container`);

let newDiv = document.createElement(`div`);
newDiv.setAttribute(`class`, `gridDivs`);

let newP = document.createElement(`p`);
newP.setAttribute(`class`, `gridp`)

let NEWROW = document.container.appendChild(newDiv);
let NEWCHILD = queryselectorAll(`.container.div`).newP

// start button & clear button functions

let startBUTTON = document.getElementById(`start`).addEventListener
(`click`, start());
let clearBUTTON = document.getElementById(`clear`).addEventListener
(`click`, clear());

function start() {
  clear();
  prompt("something with arrays to take a and b");
  // use those to run;
  container.canvas(a, b);
}

function clear() {
  // code to clear canvas respecting last size
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
    clear();
  }
}

/* 

document.getElementByClass(`gridDivs`).addEventListener
(`click`, () => {
    // code to paint black
  });
});

document.getElementByClass(`gridp`).addEventListener
(`click`, () => {
    // code to paint black
  });
});

document.getElementByClass(`gridDivs`).addEventListener
(`hoover`, () => {
    // code trail
  });
});

document.getElementByClass(`gridp`).addEventListener
(`hoover`, () => {
    // code trail
  });
});

*/
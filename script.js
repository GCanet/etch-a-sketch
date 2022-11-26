// declaring variables for creating elements later

let container = document.querySelector(`.container`);

let newDiv = document.createElement(`div`);
newDiv.setAttribute(`class`, `gridDivs`);

let newP = document.createElement(`p`);
newP.setAttribute(`class`, `gridp`)

let NEWROW = document.container.appendChild(newDiv);
let NEWCHILD = queryselectorAll(`.container > div`).appendChild(newP);

// start button & clear button functions

let startBUTTON = document.getElementById(`start`).addEventListener
(`click`, start());

function start() {
  clear();
  prompt("something with arrays to take a and b");
  // use those to run;
  container.canvas(a, b);
}

let clear = document.getElementById(`clear`);
    clear.onclick = function(){
     var elements = document.getElementsByClassName('.container');
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
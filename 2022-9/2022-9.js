const { readFileSync } = require("fs");
let arrInput = readFileSync("./2022_day_9_input.txt", "utf-8").split(/\r?\n/);

//Separate each direction into direction + lenght

function separateArr() {
  let arr1 = [];
  for (let i = 0; i < arrInput.length; i++) {
    let oneMotion = [];
    oneMotion.push(arrInput[i][0]);
    if (arrInput[i].length === 3) {
      oneMotion.push(Number(arrInput[i][2]));
    } else {
      oneMotion.push(Number(arrInput[i][2].concat(arrInput[i][3])));
    }
    arr1.push(oneMotion);
  }
  return arr1;
}

const arr = separateArr();
//console.log(arr);

// How big is the field

let fieldSizeX = 0;
let fieldSizeY = 0;
let bigX = 0;
let smallX = 0;
let bigY = 0;
let smallY = 0;

function fieldCounter() {
  for (let i = 0; i < arr.length; i++) {
    let direction = arr[i][0];
    let steps = arr[i][1];

    if (direction === "U") {
      fieldSizeY = fieldSizeY + steps;
    } else if (direction === "D") {
      fieldSizeY = fieldSizeY - steps;
    } else if (direction === "L") {
      fieldSizeX = fieldSizeX - steps;
    } else if (direction === "R") {
      fieldSizeX = fieldSizeX + steps;
    }

    if (bigX <= fieldSizeX) {
      bigX = fieldSizeX;
    }
    if (smallX >= fieldSizeX) {
      smallX = fieldSizeX;
    }
    if (bigY <= fieldSizeY) {
      bigY = fieldSizeY;
    }
    if (smallY >= fieldSizeY) {
      smallY = fieldSizeY;
    }
  }
}

fieldCounter();

const fieldWidth = -smallX + bigX + 2;
const fieldHeight = -smallY + bigY + 2;

/*
console.log(fieldSizeX);
console.log(fieldSizeY);
console.log(smallX + " " + bigX);
console.log(smallY + " " + bigY);
console.log(fieldWidth);
console.log(fieldHeight);/*/
function fieldMaker() {
  const row = [];
  const field = [];
  for (let i = 0; i < fieldWidth; i++) {
    row.push(0);
  }

  for (let i = 0; i < fieldHeight; i++) {
    field.push([...row]);
  }
  return field;
}

function tailVisits() {
  const field = fieldMaker();
  let headX = -smallX;
  let headY = bigY;
  let lastheadX = headX;
  let lastheadY = headY;
  let tailX = headX;
  let tailY = headY;
  field[headY][headX] = 1;

  for (let i = 0; i < arr.length; i++) {
    let direction = arr[i][0];
    let steps = arr[i][1];
    //console.log("Direction: " + (i + 1) + ".  -" + arr[i]);

    for (let j = 0; j < steps; j++) {
      //console.log("step" + (j + 1));

      if (direction === "U") {
        headY -= 1;
      }
      if (direction === "D") {
        headY += 1;
      }
      if (direction === "L") {
        headX -= 1;
      }
      if (direction === "R") {
        headX += 1;
      }

      if (
        headX - tailX > 1 ||
        headX - tailX < -1 ||
        headY - tailY > 1 ||
        headY - tailY < -1
      ) {
        tailY = lastheadY;
        tailX = lastheadX;
        field[tailY][tailX] = 1;
      }

      lastheadX = headX;
      lastheadY = headY;
      /*      if (field[headY][headX] != 1) {    //Position of head
        field[headY][headX] = "H";
      } */

      /*      for (let k = 0; k <fieldHeight; k++) {     // prints field
        console.log(field[k].join());
      }*/
    }
  }

  const fieldMerge = field.flat();
  const sum = fieldMerge.reduce((acc, cur) => acc + cur, 0);
    console.log(sum);
}
console.log('Part1 : How many positions does the tail of the rope visit at least once?')
tailVisits();



/*-------------------------------------------Part two------------------------------------------------*/

function tailVisits2() {
  const field = fieldMaker();
  let startX = -smallX
  let startY = bigY

  let knotsX = [
    startX,
    startX,
    startX,
    startX,
    startX,
    startX,
    startX,
    startX,
    startX,
    startX,
  ];
  let knotsY = [
    startY,
    startY,
    startY,
    startY,
    startY,
    startY,
    startY,
    startY,
    startY,
    startY,
  ];

  for (let i = 0; i < arr.length; i++) {
    let direction = arr[i][0];
    let steps = arr[i][1];
    // console.log("Direction: " + (i + 1) + ".  -" + arr[i]);

    for (let k = 0; k < steps; k++) {
      // determine where to move the head
      //console.log("step" + (k + 1));

      if (direction === "U") {
        knotsY[0] -= 1;
      }
      if (direction === "D") {
        knotsY[0] += 1;
      }
      if (direction === "L") {
        knotsX[0] -= 1;
      }
      if (direction === "R") {
        knotsX[0] += 1;
      }

      for (let j = 1; j < knotsX.length; j++) {
        // determine if its touching -> if its touching, do nothing
        if (
          knotsX[j - 1] - knotsX[j] > 1 ||
          knotsX[j - 1] - knotsX[j] < -1 ||
          knotsY[j - 1] - knotsY[j] > 1 ||
          knotsY[j - 1] - knotsY[j] < -1
        ) {
          // it isn't touching, where is it
          if (knotsY[j - 1] > knotsY[j] && knotsX[j] === knotsX[j - 1]) {
            knotsY[j]++; // move down
          } else if (knotsY[j - 1] < knotsY[j] && knotsX[j] === knotsX[j - 1]) {
            knotsY[j]--; // move up
          } else if (knotsY[j - 1] === knotsY[j] && knotsX[j - 1] > knotsX[j]) {
            knotsX[j]++; // move right
          } else if (knotsY[j - 1] === knotsY[j] && knotsX[j - 1] < knotsX[j]) {
            knotsX[j]--; // move left
          }
          // it isn't in the same row or column it neads to move diagonaly
          else if (knotsY[j - 1] < knotsY[j] && knotsX[j - 1] > knotsX[j]) {
            knotsX[j]++; //move up-right
            knotsY[j]--;
          } else if (knotsY[j - 1] > knotsY[j] && knotsX[j - 1] > knotsX[j]) {
            knotsX[j]++; //move down-right
            knotsY[j]++;
          } else if (knotsY[j - 1] > knotsY[j] && knotsX[j - 1] < knotsX[j]) {
            knotsX[j]--; //move down-left
            knotsY[j]++;
          } else if (knotsY[j - 1] < knotsY[j] && knotsX[j - 1] < knotsX[j]) {
            knotsX[j]--; //move up-left
            knotsY[j]--;
          }
        }
      }

      field[knotsY[9]][knotsX[9]] = 1;
    }
  }
  const fieldMerge = field.flat();
  const sum = fieldMerge.reduce((acc, cur) => acc + cur, 0);
  console.log(sum);
}


console.log('Part2 : How many positions does the tail of the rope visit at least once?')
tailVisits2();


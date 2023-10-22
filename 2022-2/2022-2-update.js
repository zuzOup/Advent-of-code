const { readFileSync } = require("fs");
let input = readFileSync("./2022-2-input.txt", "utf-8").split(/\r?\n/);

const object = {
  A: 1, //rock elf
  B: 2, //paper elf
  C: 3, //scissors elf
  X: 1, // rock u
  Y: 2, // paper u
  Z: 3, // scissors u
};

let sum1 = 0;

for (let i = 0; i < input.length; i++) {
  const elfRPS = object[input[i][0]];
  const yourRPS = object[input[i][2]];
  if (elfRPS === yourRPS) {
    sum1 += 3;
  } else if (elfRPS - yourRPS === -1 || elfRPS - yourRPS === 2) {
    sum1 += 6;
  }
  sum1 += yourRPS;
}

console.log("Answer Part 1: " + sum1);

/*-----------------Part 2------------------------*/
const object2 = {
  A: 1, //rock elf
  B: 2, //paper elf
  C: 3, //scissors elf
  X: 0, // loose
  Y: 3, // draw
  Z: 6, // win
};

let sum2 = 0;

for (let i = 0; i < input.length; i++) {
  const elfRPS = object2[input[i][0]];
  const yourRPS = object2[input[i][2]];
  if (yourRPS === 0) {
    elfRPS === 1 ? (sum2 += 3) : (sum2 += elfRPS - 1);
  } else if (yourRPS === 3) {
    sum2 += elfRPS + yourRPS;
  } else if (yourRPS === 6) {
    elfRPS === 3 ? (sum2 += 1 + yourRPS) : (sum2 += elfRPS + 1 + yourRPS);
  }
}

console.log("Answer Part 2: " + sum2);

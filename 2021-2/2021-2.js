const { readFileSync } = require("fs");
let arr = [];

function syncReadFile(filename) {
  const contents = readFileSync(filename, "utf-8");
  arr = contents.split(/\r?\n/);

  return arr;
}

syncReadFile("./input.txt");

let forward = [];
let up = [];
let down = [];

for (let i = 0; i < arr.length; i++) {
  if (arr[i][0] === "f") {
    forward.push(Number(arr[i][8]));
  } else if (arr[i][0] === "u") {
    up.push(Number(arr[i][3]));
  } else if (arr[i][0] === "d") {
    down.push(Number(arr[i][5]));
  }
}

down = down.reduce((a, b) => a + b, 0);
up = up.reduce((a, b) => a + b, 0);
forward = forward.reduce((a, b) => a + b, 0);

const sum = (down - up) * forward;

console.log(`Part one position:`);
console.log(sum);

let forward2 = 0;
let aim = 0;
let depth = [];

for (let i = 0; i < arr.length; i++) {
  if (arr[i][0] === "f") {
    forward2 = forward2 + Number(arr[i][8]);
    if (aim !== 0) {
      depth.push(Number(arr[i][8]) * aim);
    }
  } else if (arr[i][0] === "u") {
    aim = aim - Number(arr[i][3]);
  } else if (arr[i][0] === "d") {
    aim = aim + Number(arr[i][5]);
  }
}

depth = depth.reduce((a, b) => a + b, 0);

const final = depth * forward2;

console.log(`Part Two position:`);
console.log(final);

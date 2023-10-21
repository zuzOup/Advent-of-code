const { readFileSync } = require("fs");

let arr = [];

function syncReadFile(filename) {
  const contents = readFileSync(filename, "utf-8");

  arr = contents.split(/\r?\n/);

  // console.log(arr); // 👉️ ['One', 'Two', 'Three', 'Four']

  return arr;
}

syncReadFile("./input.txt");

//console.log(arr)
//console.log(typeof arr[1])

let arrNumber = "";
const arrSolution = [];

for (let i = 0; i < arr.length; i++) {
  arrNumber = Number(arr[i]);
  arrSolution.push(arrNumber);
}

//console.log(arrSolution)

const zero = [];

for (let i = 0; i < arrSolution.length; i++) {
  if (arrSolution[i] === 0) {
    zero.push(i);
  }
}

//console.log(zero)

const sum = [];
const partSum = [];

for (let k = 0; k < zero.length; k++) {
  //napise mi to 13
  if (k === 0) {
    partSum = arrSolution.slice(0, zero[k]);

    partSum = partSum.reduce((a, b) => a + b, 0);
    sum.push(partSum);
  } else if (k !== 0) {
    partSum = arrSolution.slice(zero[k - 1], zero[k]);
    partSum = partSum.reduce((a, b) => a + b, 0);
    sum.push(partSum);
  }
}

// console.log(sum)
// console.log(...sum)

const biggest = Math.max(...sum);
const elf = sum.indexOf(biggest) + 1;

//console.log(biggest)
//console.log(elf)

console.log(
  `The ${elf}th is the elf carrying most calories. He is carrying ${biggest} of calories. `
);

sum.sort(function (a, b) {
  return b - a;
});

const firstThree = sum[0] + sum[1] + sum[2];
//console.log(sum[0]);
//console.log(sum[1]);
//console.log(sum[2]);

console.log(
  `The 3 elfs that are carrying the most of calories are carrying ${firstThree} of calories combined. `
);

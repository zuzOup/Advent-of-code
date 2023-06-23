const { readFileSync } = require("fs");

let arr = [];

function syncReadFile(filename) {
  const contents = readFileSync(filename, "utf-8");
  arr = contents.split(/\r?\n/);
  return arr;
}

syncReadFile("./2022-1-input.txt");

//console.log(arr)

//console.log(typeof arr[1])

let arrNumber = "";
let arr2 = [];

for (let i = 0; i < arr.length; i++) {
  arrNumber = Number(arr[i]);
  arr2.push(arrNumber);
}

//console.log(arr2)

let arr3 = [];

for (let j = 0; j < arr2.length; j++) {
  if (arr2[j] === 0) {
    arr3.push(j);
  }
}

//console.log(arr3)

let sum = [];
let partialSum = [];

for (let k = 0; k < arr3.length; k++) {
  if (k === 0) {
    partialSum = arr2.slice(0, arr3[k]);

    partialSum = partialSum.reduce((a, b) => a + b, 0);
    sum.push(partialSum);
  } else if (k !== 0) {
    partialSum = arr2.slice(arr3[k - 1], arr3[k]);
    partialSum = partialSum.reduce((a, b) => a + b, 0);
    sum.push(partialSum);
  }
}

// console.log(sum)
// console.log(...sum)

const largest = Math.max(...sum);
const elf = sum.indexOf(largest) + 1;

//console.log(largest)
//console.log(elf)

console.log(
  `The ${elf}th is the elf carrying the most calories. He is carrying ${largest} of calories. `
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

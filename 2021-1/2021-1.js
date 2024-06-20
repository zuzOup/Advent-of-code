const { readFileSync } = require("fs");
let arr = [];

function syncReadFile(filename) {
  const contents = readFileSync(filename, "utf-8");
  arr = contents.split(/\r?\n/);
  arr = arr.map((x) => (x = Number(x)));
  return arr;
}

syncReadFile("./input.txt");

//console.log(arr)

let counter = 0;

for (let i = 1; i < arr.length; i++) {
  if (arr[i] > arr[i - 1]) {
    counter++;
  }
}
console.log(counter);

let tripletArr = [];
let tripletCounter = 0;

for (let i = 0; i < arr.length - 2; i++) {
  tripletArr.push(arr[i] + arr[i + 1] + arr[i + 2]);
}

for (let i = 1; i < tripletArr.length; i++) {
  if (tripletArr[i] > tripletArr[i - 1]) {
    tripletCounter++;
  }
}

console.log(tripletCounter);

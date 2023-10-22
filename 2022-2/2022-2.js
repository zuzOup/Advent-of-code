const { readFileSync } = require("fs");

let arr = [];

function syncReadFile(filename) {
  const contents = readFileSync(filename, "utf-8");

  arr = contents.split(/\r?\n/);

  // console.log(arr); // 👉️ ['One', 'Two', 'Three', 'Four']

  return arr;
}

syncReadFile("./2022-2-input.txt");

//console.log(arr)

let sum = [];

for (i = 0; i < arr.length; i++) {
  if (arr[i] === "A X") {
    sum.push(4);
  } else if (arr[i] === "A Y") {
    sum.push(8);
  } else if (arr[i] === "A Z") {
    sum.push(3);
  } else if (arr[i] === "B X") {
    sum.push(1);
  } else if (arr[i] === "B Y") {
    sum.push(5);
  } else if (arr[i] === "B Z") {
    sum.push(9);
  } else if (arr[i] === "C X") {
    sum.push(7);
  } else if (arr[i] === "C Y") {
    sum.push(2);
  } else if (arr[i] === "C Z") {
    sum.push(6);
  }
}

//console.log(sum)
sum = sum.reduce((a, b) => a + b, 0);

console.log(sum);

let sum2 = [];
for (i = 0; i < arr.length; i++) {
  if (arr[i] === "A X") {
    sum2.push(3);
  } else if (arr[i] === "A Y") {
    sum2.push(4);
  } else if (arr[i] === "A Z") {
    sum2.push(8);
  } else if (arr[i] === "B X") {
    sum2.push(1);
  } else if (arr[i] === "B Y") {
    sum2.push(5);
  } else if (arr[i] === "B Z") {
    sum2.push(9);
  } else if (arr[i] === "C X") {
    sum2.push(2);
  } else if (arr[i] === "C Y") {
    sum2.push(6);
  } else if (arr[i] === "C Z") {
    sum2.push(7);
  }
}
//console.log(sum2)
sum2 = sum2.reduce((a, b) => a + b, 0);

console.log(sum2);

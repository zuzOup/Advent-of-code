const { readFileSync } = require("fs");
const { parse } = require("path");
let input = readFileSync("./2022-4-input.txt", "utf-8")
  .split(/\r?\n/)
  .map((x) => x.split(","))
  .map((x) => x.map((y) => y.split("-")))
  .map((x) => x.flat())
  .map((x) => x.map((y) => parseFloat(y)));

let counter1 = 0;
input.forEach((x) => {
  if (
    (x[1] - x[0] >= x[3] - x[2] && x[0] <= x[2] && x[1] >= x[3]) ||
    (x[1] - x[0] < x[3] - x[2] && x[0] >= x[2] && x[1] <= x[3])
  ) {
    counter1++;
  }
});

console.log("Answer 4 part 1: " + counter1);

/*--------------------Part 2--------------------*/

let counter2 = 0;
input.forEach((x) => {
  if (
    (x[2] <= x[1] && x[2] >= x[0]) ||
    (x[0] >= x[2] && x[0] <= x[3]) ||
    (x[1] >= x[2] && x[1] <= x[3]) ||
    (x[3] >= x[0] && x[3] <= x[1])
  ) {
    counter2++;
  }
});
console.log("Answer 4 part 2: " + counter2);

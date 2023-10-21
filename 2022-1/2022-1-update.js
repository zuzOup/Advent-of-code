const { readFileSync } = require("fs");
let input = readFileSync("./2022-1-input.txt", "utf-8")
  .split(/\r?\n/)
  .map((x) => Number(x));

function arraySplit() {
  const arr = [];
  let sum = 0;

  for (let i = 0; i < input.length; i++) {
    if (input[i] !== 0) {
      sum += input[i];
    } else {
      arr.push(sum);
      sum = 0;
    }
  }
  return arr;
}

const inputSplitedPerElf = arraySplit();

console.log(
  // Part 1️⃣ print
  `The elf carrying the most calories is carrying ${Math.max(
    ...inputSplitedPerElf
  )} of calories. `
);

/*-------------------------Part 2 begins--------------------------------------------------- */

inputSplitedPerElf.sort((a, b) => b - a);
const threeElfs = inputSplitedPerElf.slice(0, 3).reduce((a, c) => a + c, 0);

console.log(
  // Part 2️⃣ print
  `The 3 elfs that are carrying the most of calories are carrying ${threeElfs} of calories combined. `
);

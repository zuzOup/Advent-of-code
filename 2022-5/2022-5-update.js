const { readFileSync } = require("fs");
let input = readFileSync("./2022-5-input-full.txt", "utf-8")
  .split(/\r?\n/)
  .slice(10)
  .map((x) => x.replace("move ", ""))
  .map((x) => x.replace(" from ", "-stack"))
  .map((x) => x.replace(" to ", "-stack"))
  .map((x) => x.split("-"));

for (let i = 0; i < input.length; i++) {
  input[i][0] = parseInt(input[i][0]);
}

function stackMaker() {
  let inputCrates = readFileSync("./2022-5-input-full.txt", "utf-8").split(
    /\r?\n/
  );

  const crates = {};
  const cratesCount = inputCrates[8][inputCrates[8].length - 2];

  for (let i = 1; i <= cratesCount; i++) {
    crates[`stack${i}`] = [];
  }

  inputCrates = inputCrates.slice(0, 8);

  for (let i = 0; i < inputCrates.length; i++) {
    let counter = 0;
    for (let j = 1; j < inputCrates[i].length; j += 4) {
      counter++;
      if (inputCrates[i][j] !== " ") {
        crates[`stack${counter}`].unshift(inputCrates[i][j]);
      }
    }
  }
  return crates;
}

const crates1 = stackMaker();

/*---------------------part 1 ----------*/

input.forEach((x) => {
  for (let i = 0; i < x[0]; i++) {
    crates1[x[2]].push(crates1[x[1]].pop());
  }
});

let answer1 = "";
Object.values(crates1).forEach((x) => (answer1 += x.pop()));

console.log("Answer 5, 1st half: " + answer1);

/*---------------------part 2 ----------*/
const crates2 = stackMaker();

input.forEach((x) => {
  let stack = [];
  for (let i = 0; i < x[0]; i++) {
    stack.push(crates2[x[1]].pop());
  }
  for (let i = 0; i < x[0]; i++) {
    crates2[x[2]].push(stack.pop());
  }
});

let answer2 = "";
Object.values(crates2).forEach((x) => (answer2 += x.pop()));

console.log("Answer 5, 2st half: " + answer2);

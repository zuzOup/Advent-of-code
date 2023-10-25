const { readFileSync } = require("fs");
let input = readFileSync("./2022-5-input.txt", "utf-8")
  .split(/\r?\n/)
  .map((x) => x.replace("move ", ""))
  .map((x) => x.replace(" from ", "-stack"))
  .map((x) => x.replace(" to ", "-stack"))
  .map((x) => x.split("-"));

for (let i = 0; i < input.length; i++) {
  input[i][0] = parseInt(input[i][0]);
}

//console.log(input);

function crates() {
  return {
    stack1: ["B", "S", "V", "Z", "G", "P", "W"],
    stack2: ["J", "V", "B", "C", "Z", "F"],
    stack3: ["V", "L", "M", "H", "N", "Z", "D", "C"],
    stack4: ["L", "D", "M", "Z", "P", "F", "J", "B"],
    stack5: ["V", "F", "C", "G", "J", "B", "Q", "H"],
    stack6: ["G", "F", "Q", "T", "S", "L", "B"],
    stack7: ["L", "G", "C", "Z", "V"],
    stack8: ["N", "L", "G"],
    stack9: ["J", "F", "H", "C"],
  };
}

const crates1 = crates();

input.forEach((x) => {
  for (let i = 0; i < x[0]; i++) {
    crates1[x[2]].push(crates1[x[1]].pop());
  }
});

let answer1 = "";
Object.values(crates1).forEach((x) => (answer1 += x.pop()));

console.log("Answer 5, 1st half: " + answer1);

/*---------------------part 2 ----------*/
const crates2 = crates();

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

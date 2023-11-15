const { readFileSync } = require("fs");
let input = readFileSync("2022-12-input.txt", "utf-8").split(/\r?\n/);

let input2 = input.filter((x) => x !== "").map((x) => JSON.parse(x));

function compare() {
  for (let i = 0; i < input2.length; i += 2) {
    let first = input2[i][0];
    let second = input2[i + 1][0];
     if()



  }
}

console.log(input2[0][0]);
console.log(input2[1][0]);

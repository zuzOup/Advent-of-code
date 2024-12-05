const { readFileSync } = require("fs");
let input = readFileSync("test.txt" /*"input2024_04.txt"*/, "utf-8")
  .split(/\r?\n/)
  .map((x) => x.split(""));

/*input ... [["a","b","c"],[...]]*/
function answer1(input) {
  return input;
}

console.log(answer1(input));

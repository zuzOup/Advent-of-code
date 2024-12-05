const { readFileSync } = require("fs");
let input = readFileSync("input2024_03.txt", "utf-8");

/*---------------------------------- PART 1 -----------------------------------------*/

function answer1(string) {
  return string
    .split("mul(")
    .map((x) => x.split(")")[0])
    .map((x) => x.split(","))
    .filter((x) => x.length === 2 && Number(x[0]) <= 999 && Number(x[1] <= 999)) // I probably should've added >0 / >=0 to cover all edge cases, but it worked without it for both parts so....
    .map((x) => Number(x[0]) * Number(x[1]))
    .reduce((acc, cur) => acc + cur, 0);
}

console.log("Answer 1:" + answer1(input));

/*---------------------------------- PART 2 -----------------------------------------*/

function answer2(string) {
  return string
    .split("do()")
    .map((x) => x.split("don't()")[0])
    .join();
}

console.log("Answer2:" + answer1(answer2(input)));

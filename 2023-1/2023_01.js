const { readFileSync } = require("fs");
let input = readFileSync("input2023_01.txt", "utf-8").split(/\r?\n/);

function findSum(arr) {
  arr = arr
    .map((x, i) => {
      const first = x[x.search(/[1-9]/)];
      const reverse = x.split("").reverse().join("");
      const last = reverse[reverse.search(/[1-9]/)];

      return parseFloat(first + last);
    })
    .reduce((a, c) => a + c, 0);
  return arr;
}

let result1 = Array.from(input);

console.log("Answer part1: " + findSum(result1));
/*---------------------------Part 2----------------------------*/

let result2 = Array.from(input).map((x) => {
  x = x

    .replaceAll("eightwo", "82")
    .replaceAll("twone", "21")
    .replaceAll("oneight", "18")
    .replaceAll("one", "1")
    .replaceAll("two", "2")
    .replaceAll("three", "3")
    .replaceAll("four", "4")
    .replaceAll("five", "5")
    .replaceAll("six", "6")
    .replaceAll("seven", "7")
    .replaceAll("eight", "8")
    .replaceAll("nine", "9");

  return x;
});

console.log("Answer part2: " + findSum(result2));

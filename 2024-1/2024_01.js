const { readFileSync } = require("fs");
let input = readFileSync("input2024_01.txt", "utf-8").split(/\r?\n/);

const list_left = input.map((x) => parseInt(x.split("   ")[0])).sort((a, b) => a - b);
const list_right = input.map((x) => parseInt(x.split("   ")[1])).sort((a, b) => a - b);

function answer1(list1, list2) {
  return list1.reduce((acc, cur, i) => acc + Math.abs(cur - list2[i]), 0);
}

console.log("Answer 1: " + answer1(list_left, list_right));

// ------------------(*ᴗ͈ˬᴗ͈)ꕤ*.ﾟ-----------PART 2------------------

function answer2(list1, list2) {
  return list1.reduce((acc, cur) => acc + cur * list2.filter((x) => x === cur).length, 0);
}

console.log("Answer 2: " + answer2(list_left, list_right));

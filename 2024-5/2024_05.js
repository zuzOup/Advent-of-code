const { readFileSync } = require("fs");
// let input = readFileSync("test2024_05.txt", "utf-8").split(/\r?\n/);
let input = readFileSync("input2024_05.txt", "utf-8").split(/\r?\n/);
//remove last emty row from .txt file

const prints = input
  .slice(input.findIndex((x) => x.length === 0) + 1)
  .map((x) => x.split(","));

const rules = input
  .slice(
    0,
    input.findIndex((x) => x.length === 0)
  )
  .sort();

  
const pairs = (prints) => {
  return prints.map((x) => {
    let arr = [];
    for (let i = 0; i < x.length - 1; i++) {
      arr = [...arr, x[i] + "|" + x[i + 1]];
    }
    return arr;
  });
};

/*------------------------------PART 1 -------------------------------------*/

function answer1(prints, rules) {
  return pairs(prints).reduce((acc, cur, i) => {
    if (cur.every((pair) => rules.includes(pair))) {
      return acc + Number(prints[i][(prints[i].length - 1) / 2]);
    }
    return acc;
  }, 0);
}

console.log("Answer 1:" + answer1(prints, rules));

/*------------------------------PART 2 -------------------------------------*/

function answer2(prints, rules) {
  return pairs(prints).reduce((acc, cur, i) => {
    if (!cur.every((pair) => rules.includes(pair))) {
      let arr = [...prints[i]];

      do {
        for (let i = 0; i < arr.length - 1; i++) {
          if (!rules.includes(arr[i] + "|" + arr[i + 1])) {
            [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
          }
        }
      } while (!pairs([arr])[0].every((x) => rules.includes(x)));

      return acc + Number(arr[(arr.length - 1) / 2]);
    }
    return acc;
  }, 0);
}

console.log("Answer 2:" + answer2(prints, rules));

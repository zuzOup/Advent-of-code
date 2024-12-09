const { readFileSync } = require("fs");
let input = readFileSync("input2024_07.txt", "utf-8")
  .split(/\r?\n/)
  .map((x) => x.split(": "))
  .map((x) => {
    return [Number(x[0]), x[1].split(" ").map((y) => Number(y))];
  });

function counter(input, fce) {
  let count = 0;
  for (let i = 0; i < input.length; i++) {
    const sum = input[i][0];
    const nums = input[i][1];

    const results = nums.reduce((acc, cur, e) => {
      if (e === 0) return [cur];
      if (acc.includes(sum)) return acc; // "break" it early

      const arr = acc.map((x) => fce(x, cur));

      return arr.flat();
    }, []);

    if (results.includes(sum)) count = count + sum;
  }

  return count;
}

function answer1(x, cur) {
  return [x * cur, x + cur];
}

function answer2(x, cur) {
  return [x * cur, x + cur, Number(`${x}${cur}`)];
}

console.log("Answer 1:" + counter(input, answer1));

console.log("Answer 2:" + counter(input, answer2));

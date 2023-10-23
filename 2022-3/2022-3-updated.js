const { readFileSync } = require("fs");
let input = readFileSync("./2022-3-input.txt", "utf-8").split(/\r?\n/);

const inputSplitted = input.map((x) => x.split(""));

let sum = 0;

inputSplitted.forEach((x) => {
  const char = x
    .slice(0, x.length / 2)
    .find((e) => x.slice(x.length / 2, x.length).includes(e));
  char.charCodeAt(0) < 95
    ? (sum += char.charCodeAt(0) - 38)
    : (sum += char.charCodeAt(0) - 96);
});

console.log("3rd day/1st half answer: " + sum);

/* part 2*/

let sum2 = 0;
for (let i = 0; i < inputSplitted.length; i += 3) {
  for (char of inputSplitted[i]) {
    if (
      inputSplitted[i + 1].includes(char) &&
      inputSplitted[i + 2].includes(char)
    ) {
      char.charCodeAt(0) < 95
        ? (sum2 += char.charCodeAt(0) - 38)
        : (sum2 += char.charCodeAt(0) - 96);
      break;
    }
  }
}

console.log("3rd day/2st half answer: " + sum2);

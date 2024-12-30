const { readFileSync } = require("fs");
let input = readFileSync("input2024_09.txt", "utf-8")
  .split("")
  .map((x) => Number(x));

// let input = "2333133121414131402".split("").map((x) => Number(x));

const amphipod = (input) => {
  idCounter = 0;
  idGap = true;

  return input
    .map((x) => {
      let a = [];

      for (let i = 0; i < x; i++) {
        a = idGap ? [...a, idCounter] : [...a, "."];
      }

      idGap = !idGap;
      if (idGap) idCounter++;

      return a;
    })
    .reduce((acc, cur) => {
      if (cur.length === 0) return acc;
      return [...acc, cur];
    }, []);
};

const reducer = (x) => {
  return x.reduce((acc, cur, i) => {
    if (!isNaN(cur)) {
      return acc + cur * i;
    }
    return acc;
  }, 0);
};

function answer1(amphipod) {
  const amph = amphipod.flat();
  for (let i = 0; i < amph.length; i++) {
    if (amph[i] === "." && amph.slice(i).some((x) => x !== "." && x !== "-")) {
      const index = amph.findLastIndex((x) => x !== "." && x !== "-");

      amph[i] = amph[index];
      amph[index] = "-";
    }
  }

  return reducer(amph);
}

console.log("Answer1: " + answer1(amphipod(input)));

function answer2(amphipod) {
  const amph = amphipod.toReversed();
  let counter = amphipod.findLast((x) => x !== ".")[0];

  for (let i = 0; i < amph.length; i++) {
    if (!amph[i].includes(".") && amph[i][0] === counter) {
      counter--;

      const index = amph.findLastIndex(
        (x) => x.length >= amph[i].length && x.includes(".")
      );

      if (index === -1 || i >= index) continue;

      if (amph[i].length === amph[index].length) {
        amph[index] = amph[i];

        amph[i] = Array.from(".".repeat(amph[i].length));
      } else {
        amph[index] = amph[index].slice(0, amph[index].length - amph[i].length);
        amph.splice(index + 1, 0, amph[i]);
        amph[i] = Array.from(".".repeat(amph[i].length));
      }
    }
  }

  return reducer(amph.flat().toReversed());
}

console.log("Answer 2: " + answer2(amphipod(input)));

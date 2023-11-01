const { readFileSync } = require("fs");
const arrAddx = readFileSync("./2022-10-input.txt", "utf-8").split(/\r?\n/);

function changeAddxToNum(arr) {
  let arrChange = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== "noop") {
      arrChange.push(Number(arr[i].slice(5)));
    } else {
      arrChange.push(arr[i]);
    }
  }
  return arrChange;
}

const arr = changeAddxToNum(arrAddx);

function doesXStrenghtens(cycle) {
  const cycArr = [20, 60, 100, 140, 180, 220];
  if (cycArr.includes(cycle)) {
    return cycle;
  }
  return 0;
}

function counter(arr) {
  let cycle = 0;
  let X = 1;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    cycle++;
    sum = sum + X * doesXStrenghtens(cycle);
    if (arr[i] !== "noop") {
      cycle++;
      sum = sum + X * doesXStrenghtens(cycle);
      X += arr[i];
    }
  }
  return sum;
}

console.log(`Answe 10, part1: ` + counter(arr));

function newLine(cycle) {
  const cycArr = [41, 81, 121, 161, 201];
  if (cycArr.includes(cycle)) {
    return 40;
  }
  return 0;
}

function CRT(arr) {
  let artBase = new Array(240).fill(" ");
  let cycle = 0;
  let X = 1;

  function shouldChange(cycle, X) {
    return cycle === X || cycle === X + 1 || cycle === X + 2;
  }

  for (let i = 0; i < arr.length; i++) {
    cycle++;
    if (shouldChange(cycle, X)) {
      artBase[cycle - 1] = "#";
    }
    X += newLine(cycle);

    if (arr[i] !== "noop") {
      cycle++;
      X += newLine(cycle);
      if (shouldChange(cycle, X)) {
        artBase[cycle - 1] = "#";
      }
      X += arr[i];
    }
  }
  return artBase;
}

const message = CRT(arr);

for (let i = 0; i < message.length; i += 40) {
  console.log(`${message.slice(i, i + 40)}`);
}

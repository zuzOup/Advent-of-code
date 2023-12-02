const { readFileSync } = require("fs");
let input = readFileSync("input2023_2.txt", "utf-8")
  .split(/\r?\n/)
  .map((x) => x.split(": "))
  .map((x) => {
    const number = parseFloat(x[0].slice(5));
    x.shift();
    x = x[0].split("; ");
    return (x = [number, ...x]);
  });

function part1(arr) {
  const cubes = { blue: 14, green: 13, red: 12 };
  const cubesKeys = Object.keys(cubes);
  const sum = arr.reduce((sum, game) => {
    let isOkay = true;
    for (let i = 1; i < game.length; i++) {
      const splitted = game[i].split(", ");
      splitted.forEach((dice) => {
        cubesKeys.map((cube) => {
          if (
            dice.includes(cube) &&
            parseFloat(dice.replace(` ${cube}`, "")) > cubes[cube]
          ) {
            isOkay = false;
          }
        });
      });
    }
    isOkay ? (sum = game[0] + sum) : (sum = sum);
    return sum;
  }, 0);
  return sum;
}

console.log("Answer Part 1: " + part1(input));

/*--------------------Part2------------------------- */

function part2(arr) {
  const sum = arr.reduce((sum, game) => {
    let cubes = {
      red: 0,
      blue: 0,
      green: 0,
    };
    const cubesKeys = Object.keys(cubes);
    for (let i = 1; i < game.length; i++) {
      const splitted = game[i].split(", ");
      splitted.forEach((dice) => {
        cubesKeys.map((cube) => {
          if (
            dice.includes(cube) &&
            parseFloat(dice.replace(` ${cube}`, "")) > cubes[cube]
          ) {
            cubes[cube] = parseFloat(dice.replace(` ${cube}`, ""));
          }
        });
      });
    }
    return (sum = sum + cubes.red * cubes.blue * cubes.green);
  }, 0);
  return sum;
}

console.log("Answer Part 2: " + part2(input));

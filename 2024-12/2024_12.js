const { readFileSync } = require("fs");
// let input = readFileSync("input2024_12.txt", "utf-8")
//   .split(/\r?\n/)
//   .map((x) => x.split(""));

// if (input[input.length - 1].length === 0) {
//   input.pop();
// }

// let input = [
//   ["O", "O", "O", "O", "O"],
//   ["O", "X", "O", "X", "O"],
//   ["O", "O", "O", "O", "O"],
//   ["O", "X", "O", "X", "O"],
//   ["O", "O", "O", "O", "O"]
// ]

let input = [
  ["A", "A", "A", "A"],
  ["B", "B", "C", "D"],
  ["B", "B", "C", "C"],
  ["E", "E", "E", "C"],
];

function getGardenCoordinates(input) {
  return input.reduce((garden, row, i) => {
    row.forEach((field, j) => {
      (garden[field] ??= []).push([i, j]);
    });
    return garden;
  }, {});
}

const arraysEqual = (a, b) => {
  return a.length === b.length && a.every((xy, i) => xy === b[i]);
};

const sides = [
  [-1, 0],
  [0, -1],
  [0, 1],
  [1, 0],
];

//             top (x-1, y)
// left (x, y-1)  [x,y]  right (x, y+1)
//             bot (x+1,y)

function getPerimeter(plot) {
  let perimetr = 0;

  for (let i = 0; i < plot.length; i++) {
    let x = plot[i][0];
    let y = plot[i][1];

    console.log(x, y);

    sides.forEach(side=> {
      if( plot.some(sqr => arraysEqual(plot[i], plot[i].map((x,i)=> x+side[i])){
        perimetr++
      }
    })

    for (let i = 0; i < 4; i++) {
      if( plot.some(sides => arraysEqual(sides[i], inner))}


    }
  }

  return perimetr;
}

const garden = getGardenCoordinates(input);

getPerimeter(garden.A);

console.log(garden);
console.log(input);

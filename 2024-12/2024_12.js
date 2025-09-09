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

function getPerimeter(plot) {



  
  let perimetr = 0;

  for (let i = 0; i < plot.length; i++) {
      let x =plot[i][0]
      let y = plot[i][1]

      if (plot)

  }
    
    
    return perimetr;
}

const garden = getGardenCoordinates(input);

console.log(garden);
console.log(input);

const { readFileSync } = require("fs");
let input = readFileSync(/*"test.txt" */ "input2024_04.txt", "utf-8")
  .split(/\r?\n/)
  .map((x) => x.split(""));

const row = input.length - 1;
const col = input[0].length - 1;
/*input ... [["a","b","c"],[...]]*/

const coordinates = {
  up: function (x, y) {
    return [x, y - 1];
  },

  upright: function (x, y) {
    return [x + 1, y - 1];
  },

  right: function (x, y) {
    return [x + 1, y];
  },

  downright: function (x, y) {
    return [x + 1, y + 1];
  },

  down: function (x, y) {
    return [x, y + 1];
  },

  downleft: function (x, y) {
    return [x - 1, y + 1];
  },

  left: function (x, y) {
    return [x - 1, y];
  },

  upleft: function (x, y) {
    return [x - 1, y - 1];
  },
};

const cross = {
  upright: coordinates.upright,
  downleft: coordinates.downleft,
  downright: coordinates.downright,
  upleft: coordinates.upleft,
};

const pairs = [
  [coordinates.upright, coordinates.downleft],
  [coordinates.downright, coordinates.upleft],
];

const bounds = (xy, row, col) => {
  return xy[0] >= 0 && xy[1] >= 0 && xy[0] <= col && xy[1] <= row;
};

function answer1(input) {
  let count = 0;
  for (let y = 0; y <= row; y++) {
    for (let x = 0; x <= col; x++) {
      if (input[y][x] === "X") {
        Object.entries(coordinates).forEach((d) => {
          if (
            bounds(d[1](x, y), row, col) &&
            input[d[1](x, y)[1]][d[1](x, y)[0]] === "M"
          ) {
            const direction = d[0];
            const coorM = coordinates[direction](d[1](x, y)[0], d[1](x, y)[1]);

            if (bounds(coorM, row, col) && input[coorM[1]][coorM[0]] === "A") {
              const coorA = coordinates[direction](coorM[0], coorM[1]);

              if (bounds(coorA, row, col) && input[coorA[1]][coorA[0]] === "S") {
                count++;
              }
            }
          }
        });
      }
    }
  }

  return count;
}
console.log("Answer 1: " + answer1(input));

function answer2(input) {
  let count = 0;
  for (let y = 0; y <= row; y++) {
    for (let x = 0; x <= col; x++) {
      if (input[y][x] === "A") {
        if (Object.entries(cross).every((c) => bounds(c[1](x, y), row, col))) {
          const MS = pairs.map((p) => {
            return p.map((fce) => input[fce(x, y)[1]][fce(x, y)[0]]).join("");
          });

          if (MS.every((fr) => fr === "MS" || fr === "SM")) {
            count++;
          }
        }
      }
    }
  }
  return count;
}

console.log("Answer 2: " + answer2(input));

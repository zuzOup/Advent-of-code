const { readFileSync } = require("fs");
let input = readFileSync("input2024_04.txt", "utf-8")
  .split(/\r?\n/)
  .map((x) => x.split(""));

const row = input.length - 1;
const col = input[0].length - 1;
/*input ... [["a","b","c"],[...]]*/

const coor = {
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
  upright: coor.upright,
  downleft: coor.downleft,
  downright: coor.downright,
  upleft: coor.upleft,
};

const pairs = [
  [coor.upright, coor.downleft],
  [coor.downright, coor.upleft],
];

const bounds = (xy, row, col) => {
  return xy[0] >= 0 && xy[1] >= 0 && xy[0] <= col && xy[1] <= row;
};

function answer1(input) {
  let count = 0;
  for (let y = 0; y <= row; y++) {
    for (let x = 0; x <= col; x++) {
      if (input[y][x] === "X") {
        Object.entries(coor).forEach((d) => {
          const xy = d[1](x, y);

          if (bounds(xy, row, col) && input[xy[1]][xy[0]] === "M") {
            const coorM = coor[d[0]](xy[0], xy[1]);

            if (bounds(coorM, row, col) && input[coorM[1]][coorM[0]] === "A") {
              const coorA = coor[d[0]](coorM[0], coorM[1]);

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
      if (
        input[y][x] === "A" &&
        Object.entries(cross).every((c) => bounds(c[1](x, y), row, col)) &&
        pairs
          .map((p) => {
            return p.map((fce) => input[fce(x, y)[1]][fce(x, y)[0]]).join("");
          })
          .reduce((acc, cur) => {
            return cur !== "MS" && cur !== "SM" ? false : acc;
          }, true)
      )
        count++;
    }
  }
  return count;
}

console.log("Answer 2: " + answer2(input));

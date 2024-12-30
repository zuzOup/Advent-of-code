const { readFileSync } = require("fs");
let input = readFileSync("input2024_10.txt", "utf-8")
  .split(/\r?\n/)
  .map((x) => x.split("").map((y) => Number(y)));
// let input = readFileSync("test2024_10.txt", "utf-8")
//   .split(/\r?\n/)
//   .map((x) => x.split("").map((y) => Number(y)));

const coor = {
  up: function (x, y) {
    return [x, y - 1];
  },

  right: function (x, y) {
    return [x + 1, y];
  },

  down: function (x, y) {
    return [x, y + 1];
  },

  left: function (x, y) {
    return [x - 1, y];
  },
};

function answer(input, rating) {
  let scores = [];
  for (let y = 0; y < input.length; y++) {
    for (let x = 0; x < input[y].length; x++) {
      if (input[y][x] === 0) {
        let counter = 1;

        let trails = [[x, y]];

        while (counter <= 9) {
          let curTrails = [];
          trails.forEach((t) => {
            Object.values(coor).forEach((c) => {
              const x1 = c(t[0], t[1])[0];
              const y1 = c(t[0], t[1])[1];

              if (input?.[y1]?.[x1] && input[y1][x1] === counter) {
                curTrails = [...curTrails, [x1, y1]];
              }
            });
          });

          if (rating) {
            //part 2
            trails = [...curTrails];
          } else {
            //part 1
            trails = [...curTrails].reduce((acc, cur) => {
              if (acc.some((a) => a[0] === cur[0] && a[1] === cur[1])) {
                return acc;
              } else return [...acc, cur];
            }, []);
          }

          counter++;
        }
        scores = [...scores, trails.length];
      }
    }
  }
  return scores.reduce((a, b) => a + b, 0);
}

console.log("Answer 1:" + answer(input, false));
console.log("Answer 2:" + answer(input, true));

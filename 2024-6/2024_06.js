const { readFileSync } = require("fs");
let input = readFileSync("input2024_06.txt", "utf-8") //delete extra empty rows from .txt file
  .split(/\r?\n/)
  .map((x) => x.split(""));
// let input = readFileSync("test2024_06.txt", "utf-8")
//   .split(/\r?\n/)
//   .map((x) => x.split(""));

const start = input.reduce((acc, cur, i) => {
  if (cur.includes("^")) {
    return [cur.indexOf("^"), i];
  }
  return acc;
}, []);

const coor = {
  0: function (x, y) {
    //up
    return [x, y - 1];
  },

  1: function (x, y) {
    //right
    return [x + 1, y];
  },

  2: function (x, y) {
    //down
    return [x, y + 1];
  },

  3: function (x, y) {
    //left
    return [x - 1, y];
  },
};

/*------------------------- PART 1 ---------------------------*/

function answer1(input, start) {
  let field = JSON.parse(JSON.stringify(input));

  let X = start[0];
  let Y = start[1];
  let dir = 0;

  do {
    if (field[coor[dir](X, Y)[1]][coor[dir](X, Y)[0]] !== "#") {
      field[Y][X] = "X";

      X = coor[dir](X, Y)[0];
      Y = coor[dir](X, Y)[1];
    } else {
      dir = (dir + 1) % 4;
    }
  } while (
    !coor[dir](X, Y).includes(-1) &&
    !coor[dir](X, Y).includes(input[0].length) &&
    !coor[dir](X, Y).includes(input.length)
  );

  return (
    field.reduce((acc, cur) => {
      return acc + cur.filter((x) => x === "X").length;
    }, 0) + 1
  );
}

console.log("Answer 1:" + answer1(input, start));

/*------------------------- PART 2 ---------------------------*/

// Note, this is very ugly and very slow. instead of being smart, it's hard coded to break from the infinite loop after it runs 10000 times (6000 also works, 5000 does not) -> than it counts how many times it head to break out of it....

function answer2(input, start) {
  let count = 0;

  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input[i].length; j++) {
      if ((j === start[0] && i === start[1]) || input[i][j] === "#") continue;

      let field = JSON.parse(JSON.stringify(input));
      field[i][j] = "#";

      let X = start[0];
      let Y = start[1];
      let dir = 0;
      let loop = 0;

      do {
        if (field[coor[dir](X, Y)[1]][coor[dir](X, Y)[0]] !== "#") {
          X = coor[dir](X, Y)[0];
          Y = coor[dir](X, Y)[1];
          loop++;
          if (loop === 6000) {
            count++;
            break;
          }
        } else {
          dir = (dir + 1) % 4;
        }
      } while (
        !coor[dir](X, Y).includes(-1) &&
        !coor[dir](X, Y).includes(input[0].length) &&
        !coor[dir](X, Y).includes(input.length)
      );
    }
  }
  return count;
}

console.log("Answer 2:" + answer2(input, start));

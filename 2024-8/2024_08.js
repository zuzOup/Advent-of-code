const { readFileSync } = require("fs");
let input = readFileSync("input2024_08.txt", "utf-8")
  .split(/\r?\n/)
  .map((x) => x.split(""));

function answer1(input) {
  let symbols = {}; // S: [[x,y],[x,y]]
  let field = [];
  for (let y = 0; y < input.length; y++) {
    field = [...field, []];
    for (let x = 0; x < input[y].length; x++) {
      field[y] = [...field[y], "."];

      if (input[y][x] !== ".") {
        const prev = symbols[input[y][x]] || [];

        symbols[input[y][x]] = [...prev, [x, y]];
      }
    }
  }

  for (let i = 0; i < Object.keys(symbols).length; i++) {
    const anthenas = Object.values(symbols)[i];

    const pairs = anthenas.reduce((acc, cur, j) => {
      // [[[x,y],[x,y]],[],..]
      if (j === anthenas.length - 1) return acc;

      let arr = [];
      for (let k = j + 1; k < anthenas.length; k++) {
        arr = [...arr, [cur, anthenas[k]]];
      }

      return [...acc, ...arr];
    }, []);

    pairs.forEach((x) => {
      //this needs work, but i'm tired
      const difX = x[0][0] - x[1][0];
      const difY = x[0][1] - x[1][1];

      const node1 = [x[0][0] + difX, x[0][1] + difY];

      if (node1.filter((x) => x >= 0 && x < input.length).length === 2) {
        field[node1[1]][node1[0]] = "#";
      }

      const node2 = [x[1][0] - difX, x[1][1] - difY];
      if (node2.filter((x) => x >= 0 && x < input.length).length === 2) {
        field[node2[1]][node2[0]] = "#";
      }
    });
  }

  return field.flat().reduce((acc, cur) => {
    return cur === "#" ? acc + 1 : acc;
  }, 0);
}

// console.log(answer1(input));

/*------------------------------------------------------PART 2 -----------------------*/

function answer2(input) {
  let symbols = {}; // S: [[x,y],[x,y]]
  let field = [];
  for (let y = 0; y < input.length; y++) {
    field = [...field, []];
    for (let x = 0; x < input[y].length; x++) {
      field[y] = [...field[y], "."];

      if (input[y][x] !== ".") {
        const prev = symbols[input[y][x]] || [];

        symbols[input[y][x]] = [...prev, [x, y]];
      }
    }
  }

  for (let i = 0; i < Object.keys(symbols).length; i++) {
    const anthenas = Object.values(symbols)[i];

    const pairs = anthenas.reduce((acc, cur, j) => {
      // [[[x,y],[x,y]],[],..]
      if (j === anthenas.length - 1) return acc;

      let arr = [];
      for (let k = j + 1; k < anthenas.length; k++) {
        arr = [...arr, [cur, anthenas[k]]];
      }

      return [...acc, ...arr];
    }, []);

    /*---same as part one till here--- */
    pairs.forEach((x) => {
      //this needs work, but i'm tired

      const difX = x[0][0] - x[1][0];
      const difY = x[0][1] - x[1][1];

      const start1 = x[0];

      let node1 = [x[0][0] + difX, x[0][1] + difY];

      while (node1.filter((x) => x >= 0 && x < input.length).length === 2) {
        field[node1[1]][node1[0]] = "#";

        const node1X = node1[0] + difX;
        const node1Y = node1[1] + difY;

        node1 = [node1X, node1Y];
      }

      let node2 = [x[1][0] - difX, x[1][1] - difY];

      while (node2.filter((x) => x >= 0 && x < input.length).length === 2) {
        field[node2[1]][node2[0]] = "#";

        const node2X = node2[0] - difX;
        const node2Y = node2[1] - difY;

        node2 = [node2X, node2Y];
      }
    });
  }

  const merge = input.map((x, i) => x.map((y, j) => (y === "." ? field[i][j] : y)));

  return merge.flat().reduce((acc, cur) => {
    return cur !== "." ? acc + 1 : acc;
  }, 0);
}

console.log(answer2(input));

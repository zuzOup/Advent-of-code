const { readFileSync } = require("fs");
let input = readFileSync("input2024_02.txt", "utf-8").split(/\r?\n/);
input.pop(); // remove the extra empty row in txt file

const data = input.map((x) => x.split(" ").map((y) => parseInt(y)));

const rules = (prev, next, direction) => {
  return (
    prev === next || Math.abs(next - prev) > 3 || Math.sign(next - prev) !== direction
  );
};

// -------------------  ≽^•⩊•^≼  ------------------- PART 1 -------------------  ≽^•⩊•^≼  -------------------

function answer1(arr) {
  return arr.reduce((acc, cur) => {
    let direction = Math.sign(cur[1] - cur[0]);
    for (let i = 1; i < cur.length; i++) {
      if (rules(cur[i - 1], cur[i], direction)) return acc;
    }
    return acc + 1;
  }, 0);
}

console.log("Answer1:" + answer1(data));

// -------------------  ≽^•⩊•^≼  ------------------- PART 2 -------------------  ≽^•⩊•^≼  -------------------

function answer2(arr) {
  return arr.reduce((acc, cur) => {
    let direction = Math.sign(cur[1] - cur[0]);

    for (let i = 1; i < cur.length; i++) {
      if (rules(cur[i - 1], cur[i], direction)) {
        // .toSpliced() isn't working in VS Code - not part of the ECMAScript standart

        let new1 = [...cur];
        new1.shift();

        let new2 = [...cur];
        new2.splice(i, 1);

        let new3 = [...cur];
        new3.splice(i - 1, 1);

        const isFixed = [new1, new2, new3].reduce((acc2, cur2) => {
          direction = Math.sign(cur2[1] - cur2[0]);
          for (let j = 1; j < cur2.length; j++) {
            if (rules(cur2[j - 1], cur2[j], direction)) return acc2;
          }
          return true;
        }, false);

        return isFixed ? acc + 1 : acc;
      }
    }
    return acc + 1;
  }, 0);
}

console.log("Answer 2:" + answer2(data));

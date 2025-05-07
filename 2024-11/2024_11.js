const { readFileSync } = require("fs");
let input = readFileSync("input2024_11.txt", "utf-8")
  .split(" ")
  .map((x) => Number(x));

function bruteForceAnswer(input, blinks) {
  // definately won't burn your computer down, nuh-uh
  //https://www.reddit.com/r/adventofcode/comments/1hbmu6q/2024_day_11_we_knew_it_would_happen/
  let stones = [...input];
  let counter = 0;
  while (counter < blinks) {
    counter++;
    const newArrangement = stones.reduce((acc, cur) => {
      if (cur === 0) {
        return [...acc, 1];
      } else if (cur.toString().length % 2 === 0) {
        return [
          ...acc,
          Number(cur.toString().slice(0, cur.toString().length / 2)),
          Number(cur.toString().slice(cur.toString().length / 2)),
        ];
      } else {
        return [...acc, cur * 2024];
      }
    }, []);

    stones = [...newArrangement];
  }
  return stones.length;
}
// it took like 5 minutes for answer 1...
// console.log("Answer 1:" + bruteForceAnswer(input, 25));

function slitlyFasterBruteForce(input, blinks) {
  let stoneCount = 0;
  for (let i = 0; i < input.length; i++) {
    console.log(input[i]);
    let counter = 0;
    let stones = [input[i]];
    while (counter < blinks) {
      counter++;
      console.log(counter);

      const newArrangement = stones.reduce((acc, cur) => {
        if (cur === 0) {
          return [...acc, 1];
        } else if (cur.toString().length % 2 === 0) {
          return [
            ...acc,
            Number(cur.toString().slice(0, cur.toString().length / 2)),
            Number(cur.toString().slice(cur.toString().length / 2)),
          ];
        } else {
          return [...acc, cur * 2024];
        }
      }, []);
      stones = [...newArrangement];
    }
    stoneCount = stoneCount + stones.length;
  }
}



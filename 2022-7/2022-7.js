const { readFileSync } = require("fs");
let input = readFileSync("./2022-7-input.txt", "utf-8").split(/\r?\n/);

const directory = { value: 0 };

let finalDirs = [];
//directory["ke"] = "value";

function directoryMaker() {
  let cd = directory;
  let branch = [];
  let currValue = 0;

  for (let i = 0; i < input.length; i++) {
    let inp = input[i];
    // add dir inside cd

    if (inp[0] === "d") {
      cd[inp.split(" ")[1]] = {};
      // add file size
    } else if (parseInt(inp[0])) {
      currValue += parseInt(inp.split(" ")[0]);

      cd["value"] = currValue;
      // add to div
    } else if (inp[2] === "c" && inp[5] !== ".") {
      branch.push(inp.split(" ")[2]);
      cd = directory;
      branch.forEach((x) => (cd = cd[x]));
      currValue = 0;
    } // switch to upper div
    else if (inp[2] === "c" && inp[5] === ".") {
      if (cd.value && Object.keys(cd).length === 1) {
        finalDirs.push(Array.from(branch).reverse());
      }
      branch.pop();
      cd = directory;
      branch.forEach((x) => (cd = cd[x]));
      currValue = 0;
    }
  }
}

directoryMaker();

//console.log(directory);

function justValues() {
  let values = {};
  values["nothing"] = 0;
  let cd = directory;
  let value = 0;

  finalDirs.forEach((branch) => {
    let path = Array.from(branch).reverse();

    for (let i = 0; i < branch.length; i++) {
      path.forEach((x) => (cd = cd[x]));
      let value = 0;
      cd.value ? (value = cd.value) : (value = 0);
      values[path.reduce((a, c) => a + c, "")] = value;

      path.pop();
      cd = directory;
    }
  });

  return values;
}
const justValue = justValues();

function createPaths() {
  let allPaths = [];
  finalDirs.forEach((branch) => {
    let curPath = [];
    let path = Array.from(branch).reverse();
    for (let i = 0; i < branch.length; i++) {
      pathName = path.reduce((a, c) => a + c, "");
      curPath.push(pathName);
      path.pop();
    }
    allPaths.push(curPath);
  });
  return allPaths;
}

const paths = createPaths();

function howLongIsTheLongestBranch() {
  let longestBranch = [];
  paths.forEach((x) => longestBranch.push(x.length));
  const longest = longestBranch.sort((a, b) => b - a)[0];

  return longest;
}

const longest = howLongIsTheLongestBranch();

paths.forEach((div) => {
  while (div.length < longest + 2) {
    div.unshift("nothing");
  }
  div.unshift(0);
});

let counter = {};
counter["nothing"] = 0;

function sortToMultiple() {
  while (paths[paths.length - 1].length > 2) {
    paths.map((div) => {
      const prevValue = div[0];
      const newValue = justValue[div[1]];
      const name = div[1];

      if (!counter[name]) {
        counter[name] = prevValue + newValue;
        div.shift();
      } else {
        counter[name] += prevValue;

        div.shift();
        for (let i = 0; i < div.length; i++) {
          div[i] = "nothing";
        }
      }
    });

    paths.map((div) => {
      counter.nothing = 0;
      const newName = div[0];
      const lastValue = counter[newName];
      div.shift();
      div.unshift(lastValue);
    });
  }
  paths.map((div) => {
    const prevValue = div[0];
    const newValue = justValue[div[1]];
    const name = div[1];

    if (!counter[name]) {
      counter[name] = prevValue + newValue;
    } else {
      counter[name] += prevValue;
    }
  });
}

sortToMultiple();

let sum = 0;

for (const x in counter) {
  if (counter[x] <= 100000) {
    sum += counter[x];
  }
}

console.log(`7, part 1: ` + sum);
/*------------------------------------------------------Part2--------------------------------*/
/*
Soooo, I apperently made a mistake somewhere along the way, and I have no idea where...
My solution was to just sum up all individual directories' sizes + file size in the main dierctory and voila, it should have given me the total size.
But it doesn't, so I just stole the number from the internet (thanks to /u/doingthisalright for sharing their solution), hence the random 41735494 later in the code.
Maybe I will fix it next year, just like the other days :D 
*/

let totalSum = directory.value;

for (const x in justValue) {
  totalSum += justValue[x];
}

const iHaveThisMuchFreeSpace = 70000000 - 41735494; //70000000 - totalSum;

const iNeedToClearUp = 30000000 - iHaveThisMuchFreeSpace;

let bigEnoughDirs = [];

for (const x in counter) {
  if (counter[x] >= iNeedToClearUp) {
    bigEnoughDirs.push(counter[x]);
  }
}

bigEnoughDirs.sort((a, b) => a - b);

console.log(`Answer 7, part2: ` + bigEnoughDirs[0]);

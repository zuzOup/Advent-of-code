const arr = [
  ["R", 5],
  ["U", 8],
  ["L", 8],
  ["D", 3],
  ["R", 17],
  ["D", 10],
  ["L", 25],
  ["U", 20],
];

function fieldMaker() {
  const row = [];
  const field = [];
  for (let i = 0; i < 26; i++) {
    row.push(".");
  }

  for (let i = 0; i < 25; i++) {
    field.push([...row]);
  }
  return field;
}

function tailVisits2() {
  const field = fieldMaker();
  //console.log(field)

  let startX = 11;
  let startY = 15;

  let knotsX = [
    startX,
    startX,
    startX,
    startX,
    startX,
    startX,
    startX,
    startX,
    startX,
    startX,
  ];
  let knotsY = [
    startY,
    startY,
    startY,
    startY,
    startY,
    startY,
    startY,
    startY,
    startY,
    startY,
  ];

  for (let i = 0; i < arr.length; i++) {
    let direction = arr[i][0];
    let steps = arr[i][1];

    for (let k = 0; k < steps; k++) {
      field[knotsY[9]][knotsX[9]] = "*";
      // determine where to move the head
      console.log("Direction: " + (i + 1) + ".  -" + arr[i]);
      console.log("step" + (k + 1));

      if (direction === "U") {
        knotsY[0] -= 1;
      }
      if (direction === "D") {
        knotsY[0] += 1;
      }
      if (direction === "L") {
        knotsX[0] -= 1;
      }
      if (direction === "R") {
        knotsX[0] += 1;
      }

      for (let j = 1; j < knotsX.length; j++) {
        // determine if its touching -> if its touching, do nothing
        if (
          knotsX[j - 1] - knotsX[j] > 1 ||
          knotsX[j - 1] - knotsX[j] < -1 ||
          knotsY[j - 1] - knotsY[j] > 1 ||
          knotsY[j - 1] - knotsY[j] < -1
        ) {
          // it isn't touching, where is it
          if (knotsY[j - 1] > knotsY[j] && knotsX[j] === knotsX[j - 1]) {
            knotsY[j]++; // move down
          } else if (knotsY[j - 1] < knotsY[j] && knotsX[j] === knotsX[j - 1]) {
            knotsY[j]--; // move up
          } else if (knotsY[j - 1] === knotsY[j] && knotsX[j - 1] > knotsX[j]) {
            knotsX[j]++; // move right
          } else if (knotsY[j - 1] === knotsY[j] && knotsX[j - 1] < knotsX[j]) {
            knotsX[j]--; // move left
          }
          // it isn't in the same row or column it neads to move diagonaly
          else if (knotsY[j - 1] < knotsY[j] && knotsX[j - 1] > knotsX[j]) {
            knotsX[j]++; //move up-right
            knotsY[j]--;
          } else if (knotsY[j - 1] > knotsY[j] && knotsX[j - 1] > knotsX[j]) {
            knotsX[j]++; //move down-right
            knotsY[j]++;
          } else if (knotsY[j - 1] > knotsY[j] && knotsX[j - 1] < knotsX[j]) {
            knotsX[j]--; //move down-left
            knotsY[j]++;
          } else if (knotsY[j - 1] < knotsY[j] && knotsX[j - 1] < knotsX[j]) {
            knotsX[j]--; //move up-left
            knotsY[j]--;
          }
        }
      }
      field[knotsY[9]][knotsX[9]] = "*";

      for (let n = 0; n < 9; n++) {
        if (field[knotsY[n]][knotsX[n]] !== "*") {
          field[knotsY[n]][knotsX[n]] = n;
          field[knotsY[0]][knotsX[0]] = "H";
        }
      }
      for (let m = 0; m < 21; m++) {
        // prints field
        console.log(field[m].join(""));
      }

      for (let n = 0; n < 9; n++) {
        if (field[knotsY[n]][knotsX[n]] !== "*") {
          field[knotsY[n]][knotsX[n]] = ".";
        }
      }
    }
  }
}

tailVisits2();
/*const field= tailVisits2()

const fieldMerge = field7.flat();
const sum = fieldMerge.reduce((acc, cur) => acc + cur, 0);*/

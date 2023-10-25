const { readFileSync } = require("fs");
let arr = [];

function syncReadFile(filename) {
  const contents = readFileSync(filename, "utf-8");
  arr = contents.split(/\r?\n/);

  return arr;
}

syncReadFile("./2022-5-input.txt");

//console.log(arr)
const prikazy = [];

for (let i = 0; i < arr.length; i++) {
  let prikaz = arr[i];
  //console.log(prikaz)
  if (prikaz[6] === " ") {
    //console.log(prikaz)
    let prikaz2 = [Number(prikaz[5]), Number(prikaz[12]), Number(prikaz[17])];
    //console.log(prikaz2)
    prikazy.push(prikaz2);
  } else if (prikaz[6] !== " ") {
    let prikaz3 = [
      Number(prikaz[5] + prikaz[6]),
      Number(prikaz[13]),
      Number(prikaz[18]),
    ];

    prikazy.push(prikaz3);
  }
}

//console.log(prikazy);

let arr1 = ["B", "S", "V", "Z", "G", "P", "W"];
let arr2 = ["J", "V", "B", "C", "Z", "F"];
let arr3 = ["V", "L", "M", "H", "N", "Z", "D", "C"];
let arr4 = ["L", "D", "M", "Z", "P", "F", "J", "B"];
let arr5 = ["V", "F", "C", "G", "J", "B", "Q", "H"];
let arr6 = ["G", "F", "Q", "T", "S", "L", "B"];
let arr7 = ["L", "G", "C", "Z", "V"];
let arr8 = ["N", "L", "G"];
let arr9 = ["J", "F", "H", "C"];

let arrcely = [arr1, arr2, arr3, arr4, arr5, arr6, arr7, arr8, arr9];

function funkce(prikazy, arrcely) {
  for (let i = 0; i < prikazy.length; i++) {
    let kolikkrabic = prikazy[i][0];
    let odkud = prikazy[i][1] - 1;
    let kam = prikazy[i][2] - 1;

    //console.log(kolikkrabic)
    let krabice = arrcely[odkud].slice(-kolikkrabic);
    //krabice = krabice.reverse()

    let zbylekrabice = arrcely[odkud].slice(
      0,
      arrcely[odkud].length - kolikkrabic
    );
    //console.log(zbylekrabice)

    let novekrabice = arrcely[kam].concat(krabice);

    arrcely[odkud] = zbylekrabice;
    arrcely[kam] = novekrabice;

    //console.log(kolikkrabic);
    //console.log(odkud);
    //console.log(kam);
    //console.log(krabice);
    //console.log(zbylekrabice);
  }

  return arrcely;
}

funkce(prikazy, arrcely);

console.log("1: " + arrcely[0]);
console.log("2: " + arrcely[1]);
console.log("3: " + arrcely[2]);
console.log("4: " + arrcely[3]);
console.log("5: " + arrcely[4]);
console.log("6: " + arrcely[5]);
console.log("7: " + arrcely[6]);
console.log("8: " + arrcely[7]);
console.log("9: " + arrcely[8]);

let odpoved = [];
for (let i = 0; i < arrcely.length; i++) {
  let mezizastavka = arrcely[i].slice(-1);
  odpoved.push(mezizastavka);
}

odpoved = odpoved.flat();
odpoved = odpoved.join("");

console.log(odpoved);

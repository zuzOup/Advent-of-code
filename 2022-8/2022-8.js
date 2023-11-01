const { readFileSync } = require("fs");
const rows = readFileSync("./2022-8-input.txt", "utf-8").split(/\r?\n/);

function fullArr(arr) {
  let fullArr = [];
  for (let i = 0; i < arr.length; i++) {
    let row = arr[i].split("");
    fullArr.push(row);
  }
  fullArr = fullArr.flat();
  fullArr = fullArr.map((x) => (x = Number(x)));
  return fullArr;
}

const arr = fullArr(rows);

function isItVisible(arr) {
  let counter = 0;

  for (let i = 0; i < arr.length; i++) {
    if (i < 99 || i % 99 === 0 || (i + 1) % 99 === 0 || i > arr.length - 99) {
      counter++;
    } else {
      let rowStartIndex = 0;
      let rowEndIndex = 0;
      let columnStartIndex = [];

      let rowBefore = [];
      let rowAfter = [];
      let columnBefore = [];
      let columnAfter = [];

      for (let j = i; j > i - 99; j--) {
        if (j % 99 === 0) {
          rowStartIndex = j;
          rowEndIndex = j + 98;
        }
      }

      for (let j = i; j > 0; j = j - 99) {
        if (j < 99) {
          columnStartIndex = j;
        }
      }

      //Row before/after i
      rowBefore = arr.slice(rowStartIndex, i);
      rowAfter = arr.slice(i + 1, rowEndIndex + 1);

      //column before

      for (let j = columnStartIndex; j < i; j = j + 99) {
        columnBefore.push(arr[j]);
      }

      //columnafter

      for (let j = i + 99; j < arr.length; j = j + 99) {
        columnAfter.push(arr[j]);
      }

      if (
        rowBefore.every((x) => arr[i] > x) ||
        rowAfter.every((x) => arr[i] > x) ||
        columnBefore.every((x) => arr[i] > x) ||
        columnAfter.every((x) => arr[i] > x)
      ) {
        counter++;
      }
    }
  }
  return counter;
}

const treesVisible = isItVisible(arr);

console.log(`Trees Visible:`);
console.log(treesVisible);

/*===========================================================/ᐠ.ᆺ.ᐟ\==============================
==================================/ᐠ｡ꞈ｡ᐟ\===================================/ᐠ｡ꞈ｡ᐟ\=================
====================== /ᐠ . ۪ . ᐟ\====================✧/ᐠ-ꞈ-ᐟ\===========================/ᐠ｡ꞈ｡ᐟ\=====
==================================================================/ᐠ｡ꞈ｡ᐟ\==========================
==================*:･ﾟ✧(=✪ ᆺ ✪=)*:･ﾟ✧================================================✧/ᐠ-ꞈ-ᐟ\*/

function podminka(i, arr) {
  return i > 99 && i % 99 !== 0 && (i + 1) % 99 !== 0 && i < arr.length - 99;
}

function WhatTreeIsBest(arr) {
  let ScenicScoreArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (i > 99 && i % 99 !== 0 && (i + 1) % 99 !== 0 && i < arr.length - 99) {
      let rowStartIndex = 0;
      let rowEndIndex = 0;
      let columnStartIndex = [];

      let rowBefore = [];
      let rowBeforeReversed = [];
      let rowAfter = [];

      let columnBefore = [];
      let columnAfter = [];
      let columnBeforeReversed = [];

      for (let j = i; j > i - 99; j--) {
        if (j % 99 === 0) {
          rowStartIndex = j;
          rowEndIndex = j + 98;
        }
      }

      for (let j = i; j > 0; j = j - 99) {
        if (j < 99) {
          columnStartIndex = j;
        }
      }

      //Row before/after i
      rowBefore = arr.slice(rowStartIndex, i);
      rowBeforeReversed = rowBefore.reverse();
      rowAfter = arr.slice(i + 1, rowEndIndex + 1);

      //column before

      for (let j = columnStartIndex; j < i; j = j + 99) {
        columnBefore.push(arr[j]);
      }

      columnBeforeReversed = columnBefore.reverse();
      //columnafter

      for (let j = i + 99; j < arr.length; j = j + 99) {
        columnAfter.push(arr[j]);
      }

      let left = LeftUpDownRigth(arr, i, rowBeforeReversed);
      let up = LeftUpDownRigth(arr, i, columnBeforeReversed);
      let down = LeftUpDownRigth(arr, i, columnAfter);
      let right = LeftUpDownRigth(arr, i, rowAfter);
      let counter = left * up * down * right;
      ScenicScoreArr.push(counter);
    }
  }

  return Math.max(...ScenicScoreArr);
}

function LeftUpDownRigth(arr, i, LUDR) {
  let counter = 0;
  if (LUDR.findIndex((x) => x >= arr[i]) !== -1) {
    counter =
      LUDR.slice(
        0,
        LUDR.findIndex((x) => x >= arr[i])
      ).length + 1;
    return counter;
  } else {
    return LUDR.length;
  }
}

const BestScore = WhatTreeIsBest(arr);

console.log(`Tree with the best score:`);
console.log(BestScore);

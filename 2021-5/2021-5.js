const { readFileSync } = require("fs");
let arr = readFileSync("./input.txt", "utf-8").split(/\r?\n/);

for (let i = 0; i < arr.length; i++) {
  arr[i] = arr[i].split(" -> ");
}

//onsole.log(arr);

for (let i = 0; i < arr.length; i++) {
  arr[i][0] = arr[i][0].split(",");
  arr[i][1] = arr[i][1].split(",");
}

for (let i = 0; i < arr.length; i++) {
  arr[i] = arr[i].flat();
}

function isItVerticalorHorizontal(arr) {
  let modArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][0] === arr[i][2] || arr[i][1] === arr[i][3]) {
      modArr.push(arr[i]);
    }
  }
  return modArr;
}

function horizontal(arr) {
  let modArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][0] === arr[i][2]) {
      modArr.push(arr[i]);
    }
  }
  return modArr;
}

function vertical(arr) {
  let modArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][1] === arr[i][3]) {
      modArr.push(arr[i]);
    }
  }
  return modArr;
}

function diagonal(arr) {
  let modArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][0] !== arr[i][2] && arr[i][1] !== arr[i][3]) {
      modArr.push(arr[i]);
    }
  }
  return modArr;
}

/*----------------------------------------------------------------------------------------------------------
============================================================================================================
---------------------------------------------1️⃣--ŘEŠENÍ PART ONE--1️⃣---------------------------------------
============================================================================================================
----------------------------------------------------------------------------------------------------------*/

const arrXY = isItVerticalorHorizontal(arr);
const arrX = horizontal(arr);
const arrY = vertical(arr);

function SpreadLiner(spreadLine1, spreadLine2) {
  let SpreadedLine = [];

  if (spreadLine1 < spreadLine2) {
    for (let i = spreadLine1; i <= spreadLine2; i++) {
      SpreadedLine.push(i);
    }
  } else if (spreadLine1 > spreadLine2) {
    for (let i = spreadLine2; i <= spreadLine1; i++) {
      SpreadedLine.push(i);
    }
  }
  return SpreadedLine;
}

function Spread(arr, pozice1, pozice2, pozice3) {
  // Pozice Horizontalni : 1,3,0,1 ; Pozice Vertikalni: 0,2,31;
  let spread = [];
  for (let i = 0; i < arr.length; i++) {
    spread.push(
      [
        ...[Number(arr[i][pozice3])],
        SpreadLiner(Number(arr[i][pozice1]), Number(arr[i][pozice2])),
      ].flat()
    );
  }
  return spread;
}

const VerticalArr = Spread(arrX, 1, 3, 0); // arr[i] jsou jednotlive hor. linky, arr[i][0] je X souradnice, zbytek jsou Y
const HorizontalArr = Spread(arrY, 0, 2, 3); // // arr[i] jsou jednotlive ver. linky, arr[i][0] je Y souradnice, zbytek jsou X

//console.log(HorizontalArr)

/*==========================================================================================================
==========================================================================================================*/

function gridMaker(arrVertical, arrHorizontal) {
  // [X,Y]
  let grid = [];

  let gridcislo = 0;

  for (let i = 0; i < arrVertical.length; i++) {
    for (let j = 1; j < arrVertical[i].length; j++) {
      gridcislo = (arrVertical[i][0] + 1000) * 1000 + arrVertical[i][j];
      grid.push(gridcislo);
    }
  }

  for (let i = 0; i < arrHorizontal.length; i++) {
    for (let j = 1; j < arrHorizontal[i].length; j++) {
      gridcislo = (arrHorizontal[i][j] + 1000) * 1000 + arrHorizontal[i][0];
      grid.push(gridcislo);
    }
  }

  return grid;
}

const grid = gridMaker(VerticalArr, HorizontalArr);

//console.dir(grid,{"maxArrayLength":null})

function duplicatesFinder(arr) {
  let duplicates = [];
   for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j] && !duplicates.includes(arr[i])) {
        duplicates.push(arr[i]);
      }
    }
  }

  return duplicates.length;
}

const duplicates = duplicatesFinder(grid);

console.log("Linky se protnou:");
console.log(duplicates);

/*----------------------------------------------------------------------------------------------------------
============================================================================================================
---------------------------------------------1️⃣--ŘEŠENÍ PART dva--1️⃣---------------------------------------
============================================================================================================
----------------------------------------------------------------------------------------------------------*/
const dia = diagonal(arr);

function diagonalSpreadGrid(arr) {
  //dia
  let SpreadedLine = [];
  let spreadedLine1 = 0;
  let spreadedLine2 = 0;
  let grid = [];
  let x1 = 0;
  let x2 = 0;
  let y1 = 0;
  let y2 = 0;
  let difference = 0;
  for (let i = 0; i < arr.length; i++) {
    x1 = Number(arr[i][0]);
    y1 = Number(arr[i][1]);
    x2 = Number(arr[i][2]);
    y2 = Number(arr[i][3]);

    if (x1 < x2 && y1 > y2) {
      difference = y1 - y2;
      for (let j = 0; j < difference+1; j++) {
        spreadedLine1 = (x1 + j + 1000) * 1000;
        spreadedLine2 = y1 - j;
        SpreadedLine = spreadedLine1 + spreadedLine2;
        grid.push(SpreadedLine);
      }
    } else if (x1 < x2 && y1 < y2) {
      difference = x2 - x1;
      for (let j = 0; j < difference+1; j++) {
        spreadedLine1 = (x1 + j + 1000) * 1000;
        spreadedLine2 = y1 + j;
        SpreadedLine = spreadedLine1 + spreadedLine2;
        grid.push(SpreadedLine);
      }
    } else if (x1 > x2 && y1 < y2) {
      difference = x2 - x1;
      for (let j = 0; j < difference+1; j++) {
        spreadedLine1 = (x1 - j + 1000) * 1000;
        spreadedLine2 = y1 + j;
        SpreadedLine = spreadedLine1 + spreadedLine2;
        grid.push(SpreadedLine);
      }
    } else if (x1 > x2 && y1 > y2) {
      difference = x2 - x1;
      for (let j = 0; j < difference+1; j++) {
        spreadedLine1 = (x1 - j + 1000) * 1000;
        spreadedLine2 = y1 - j;
        SpreadedLine = spreadedLine1 + spreadedLine2;
        grid.push(SpreadedLine);
      }
    }
  }
  return grid;
}

const DiaVerHor = [...diagonalSpreadGrid(dia),...grid]

const duplicatesPartWo = duplicatesFinder(DiaVerHor);

console.log("Linky se protnou:");
console.log(duplicatesPartWo)

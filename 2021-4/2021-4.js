const { readFileSync } = require("fs");
let arr = readFileSync("./input.txt", "utf-8").split(/\r?\n/);

function arrChange() {
  let board = [];
  let arrofBoards = [];
  for (let i = 0; i < arr.length; i = i + 6) {
    board = [];
    board.push(arr[i]);
    board.push(arr[i + 1]);
    board.push(arr[i + 2]);
    board.push(arr[i + 3]);
    board.push(arr[i + 4]);
    arrofBoards.push(board);
  }
  return arrofBoards;
}

const arrBoards = arrChange();

//console.log(arrBoards)

function splitBoards() {
  let splitBoards = [];
  for (let i = 0; i < arrBoards.length; i++) {
    let board = arrBoards[i];
    let boardofNumbers = [];
    for (let j = 0; j < board.length; j++) {
      let numbers = board[j].split(" ");

      boardofNumbers.push(numbers);
    }
    let boardwithSpace = boardofNumbers.flat();
    let boardwithoutspace = [];
    for (let k = 0; k < boardwithSpace.length; k++) {
      if (boardwithSpace[k] !== "") {
        boardwithoutspace.push(Number(boardwithSpace[k]));
      }
    }

    splitBoards.push(boardwithoutspace);
  }
  return splitBoards;
}

const splitBoardsArr = splitBoards();
const draw = [
  46, 79, 77, 45, 57, 34, 44, 13, 32, 88, 86, 82, 91, 97, 89, 1, 48, 31, 18, 10,
  55, 74, 24, 11, 80, 78, 28, 37, 47, 17, 21, 61, 26, 85, 99, 96, 23, 70, 3, 54,
  5, 41, 50, 63, 14, 64, 42, 36, 95, 52, 76, 68, 29, 9, 98, 35, 84, 83, 71, 49,
  73, 58, 56, 66, 92, 30, 51, 20, 81, 69, 65, 15, 6, 16, 39, 43, 67, 7, 59, 40,
  60, 4, 90, 72, 22, 0, 93, 94, 38, 53, 87, 27, 12, 2, 25, 19, 8, 62, 33, 75,
];

/*----------------------------------------------------------------------------------------------------------
============================================================================================================
---------------------------------------------1️⃣--ŘEŠENÍ PART ONE--1️⃣---------------------------------------
============================================================================================================
----------------------------------------------------------------------------------------------------------*/

function doesThisBoardHasTheNumber(cislo) {
  let arrSplit = [...splitBoardsArr];
  for (let i = 0; i < arrSplit.length; i++) {
    for (let k = 0; k < arrSplit[i].length; k++) {
      if (arrSplit[i][k] === cislo) {
        arrSplit[i][k] = "X";
      }
    }
  }
  return arrSplit;
}

function draws() {
  let newArr;
  for (let i = 0; i < draw.length; i++) {
    newArr = doesThisBoardHasTheNumber(draw[i]);

    for (let j = 0; j < newArr.length; j++) {
      if (
        (newArr[j][0] === "X" &&
          newArr[j][1] === "X" &&
          newArr[j][2] === "X" &&
          newArr[j][3] === "X" &&
          newArr[j][4] === "X") ||
        (newArr[j][5] === "X" &&
          newArr[j][6] === "X" &&
          newArr[j][7] === "X" &&
          newArr[j][8] === "X" &&
          newArr[j][9] === "X") ||
        (newArr[j][10] === "X" &&
          newArr[j][11] === "X" &&
          newArr[j][12] === "X" &&
          newArr[j][13] === "X" &&
          newArr[j][14] === "X") ||
        (newArr[j][15] === "X" &&
          newArr[j][16] === "X" &&
          newArr[j][17] === "X" &&
          newArr[j][18] === "X" &&
          newArr[j][19] === "X") ||
        (newArr[j][20] === "X" &&
          newArr[j][21] === "X" &&
          newArr[j][22] === "X" &&
          newArr[j][23] === "X" &&
          newArr[j][24] === "X") ||
        (newArr[j][0] === "X" &&
          newArr[j][5] === "X" &&
          newArr[j][10] === "X" &&
          newArr[j][15] === "X" &&
          newArr[j][20] === "X") ||
        (newArr[j][1] === "X" &&
          newArr[j][6] === "X" &&
          newArr[j][11] === "X" &&
          newArr[j][16] === "X" &&
          newArr[j][21] === "X") ||
        (newArr[j][2] === "X" &&
          newArr[j][7] === "X" &&
          newArr[j][12] === "X" &&
          newArr[j][17] === "X" &&
          newArr[j][22] === "X") ||
        (newArr[j][3] === "X" &&
          newArr[j][8] === "X" &&
          newArr[j][13] === "X" &&
          newArr[j][18] === "X" &&
          newArr[j][23] === "X") ||
        (newArr[j][4] === "X" &&
          newArr[j][9] === "X" &&
          newArr[j][14] === "X" &&
          newArr[j][19] === "X" &&
          newArr[j][24] === "X")
      ) {
        return [...newArr[j], draw[i]];
      }
    }
  }
}

const winningBoard = draws();
const winningNumber = winningBoard.pop();

function score(arr) {
  let numbersOnBoard = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== "X") {
      numbersOnBoard.push(arr[i]);
    }
  }
  const sum = numbersOnBoard.reduce((a, b) => a + b, 0);
  return sum;
}

console.log("Final score is:");
console.log(winningNumber * score(winningBoard));

/*------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------
--------------------------------------------------PART TWO----------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------*/

function drawsLosing() {
  let newArr;
  for (let i = 0; i < draw.length; i++) {
    newArr = doesThisBoardHasTheNumber(draw[i]);

    for (let j = 0; j < newArr.length; j++) {
      if (
        (newArr[j][0] === "X" &&
          newArr[j][1] === "X" &&
          newArr[j][2] === "X" &&
          newArr[j][3] === "X" &&
          newArr[j][4] === "X") ||
        (newArr[j][5] === "X" &&
          newArr[j][6] === "X" &&
          newArr[j][7] === "X" &&
          newArr[j][8] === "X" &&
          newArr[j][9] === "X") ||
        (newArr[j][10] === "X" &&
          newArr[j][11] === "X" &&
          newArr[j][12] === "X" &&
          newArr[j][13] === "X" &&
          newArr[j][14] === "X") ||
        (newArr[j][15] === "X" &&
          newArr[j][16] === "X" &&
          newArr[j][17] === "X" &&
          newArr[j][18] === "X" &&
          newArr[j][19] === "X") ||
        (newArr[j][20] === "X" &&
          newArr[j][21] === "X" &&
          newArr[j][22] === "X" &&
          newArr[j][23] === "X" &&
          newArr[j][24] === "X") ||
        (newArr[j][0] === "X" &&
          newArr[j][5] === "X" &&
          newArr[j][10] === "X" &&
          newArr[j][15] === "X" &&
          newArr[j][20] === "X") ||
        (newArr[j][1] === "X" &&
          newArr[j][6] === "X" &&
          newArr[j][11] === "X" &&
          newArr[j][16] === "X" &&
          newArr[j][21] === "X") ||
        (newArr[j][2] === "X" &&
          newArr[j][7] === "X" &&
          newArr[j][12] === "X" &&
          newArr[j][17] === "X" &&
          newArr[j][22] === "X") ||
        (newArr[j][3] === "X" &&
          newArr[j][8] === "X" &&
          newArr[j][13] === "X" &&
          newArr[j][18] === "X" &&
          newArr[j][23] === "X") ||
        (newArr[j][4] === "X" &&
          newArr[j][9] === "X" &&
          newArr[j][14] === "X" &&
          newArr[j][19] === "X" &&
          newArr[j][24] === "X")
      ) {
        delete newArr[j];
      }
    }

    if (newArr.flat().length === 25) {
      return newArr;
      /*
        let newnewArr = [...newArr]
    
        for (let k = 0; k<newnewArr.length; k++){
            
            if(newArr[k]!== undefined){
                let index = draw[i]
                
                let lastwinningboard = newArr.flat()
                   
                return [...lastwinningboard,index]

            }
        }*/
    }
  }
}

const loosingboardindex = drawsLosing();
const loosingboard = loosingboardindex.flat();

console.log(loosingboardindex[65]);

function create() {
  let create = [];
  for (let i = 0; i < splitBoardsArr.length; i++) {
    if (loosingboardindex[i] !== loosingboard) {
      create.push("prazdno");
    } else if (loosingboardindex[i][0] === "X") {
      create.push(loosingboard);
    }
  }

  //console.log(create)
}
create();
//console.log(loosingboard)

/*

const LastwinningBoard = drawsLosing();
const LastwinningNumber = LastwinningBoard.pop();

console.log("Final score of loosing board is:");
console.log(LastwinningNumber * score(LastwinningBoard));

*/
/*
function doesThisBoardHasTheNumber2(cislo) {
    let arrSplit = loosingboard;
    for (let i = 0; i < arrSplit.length; i++) {
      for (let k = 0; k < arrSplit[i].length; k++) {
        if (arrSplit[i][k] === cislo) {
          arrSplit[i][k] = "X";
        }
      }
    }
    return arrSplit;
  }


function draws2() {
    let newArr;
    for (let i = 0; i < draw.length; i++) {
      newArr = doesThisBoardHasTheNumber2(draw[i]);
  
      for (let j = 0; j < newArr.length; j++) {
        if (
          (newArr[j][0] === "X" &&
            newArr[j][1] === "X" &&
            newArr[j][2] === "X" &&
            newArr[j][3] === "X" &&
            newArr[j][4] === "X") ||
          (newArr[j][5] === "X" &&
            newArr[j][6] === "X" &&
            newArr[j][7] === "X" &&
            newArr[j][8] === "X" &&
            newArr[j][9] === "X") ||
          (newArr[j][10] === "X" &&
            newArr[j][11] === "X" &&
            newArr[j][12] === "X" &&
            newArr[j][13] === "X" &&
            newArr[j][14] === "X") ||
          (newArr[j][15] === "X" &&
            newArr[j][16] === "X" &&
            newArr[j][17] === "X" &&
            newArr[j][18] === "X" &&
            newArr[j][19] === "X") ||
          (newArr[j][20] === "X" &&
            newArr[j][21] === "X" &&
            newArr[j][22] === "X" &&
            newArr[j][23] === "X" &&
            newArr[j][24] === "X") ||
          (newArr[j][0] === "X" &&
            newArr[j][5] === "X" &&
            newArr[j][10] === "X" &&
            newArr[j][15] === "X" &&
            newArr[j][20] === "X") ||
          (newArr[j][1] === "X" &&
            newArr[j][6] === "X" &&
            newArr[j][11] === "X" &&
            newArr[j][16] === "X" &&
            newArr[j][21] === "X") ||
          (newArr[j][2] === "X" &&
            newArr[j][7] === "X" &&
            newArr[j][12] === "X" &&
            newArr[j][17] === "X" &&
            newArr[j][22] === "X") ||
          (newArr[j][3] === "X" &&
            newArr[j][8] === "X" &&
            newArr[j][13] === "X" &&
            newArr[j][18] === "X" &&
            newArr[j][23] === "X") ||
          (newArr[j][4] === "X" &&
            newArr[j][9] === "X" &&
            newArr[j][14] === "X" &&
            newArr[j][19] === "X" &&
            newArr[j][24] === "X")
        ) {
          return [...newArr[j], draw[i]];
        }
      }
    }
  }

  console.log(draws2())


  */

console.log((12 + 27 + 38 + 8 + 87) * 94);

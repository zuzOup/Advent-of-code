const { readFileSync } = require("fs");
let input = readFileSync("input2023-3.txt", "utf-8")
  .split(/\r?\n/)
  .map((x) => x.split(""));

const numbers = /\d/;
const dot = ".";

function sum(arr) {
  let sum = 0;
  arr.forEach((row, index) => {
    if()

    for (let i = 0; i < row.length; i++) {
      
      if (row[i].match(numbers)) {
        /*
        !row[i - 1].match(numbers) &&
        !row[i + 1].match(numbers)*/
        // one number
        { if( !row[i - 1].match(numbers) &&!row[i + 1].match(numbers) ){

          console.log(row[i]);
          console.log(index);
          console.log(i);}}

        }
      }
    })
  }

sum(input);

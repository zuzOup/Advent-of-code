// Loading the data

const { readFileSync } = require("fs");
const { ReadableStreamDefaultController } = require("node:stream/web");
let arr = readFileSync("./input.txt", "utf-8").split(/\r?\n/);
//console.log(arr)

// Create Bits

function CreateBits(position) {
  let arrayBit = [];
  for (let i = 0; i < arr.length; i++) {
    arrayBit.push(Number(arr[i][position]));
  }
  const Bit = arrayBit.reduce((a, b) => a + b, 0);
  if (Bit > 500) {
    return "1";
  } else {
    return "0";
  }
}

// Gamma
function CreateGamma() {
  let createGamma = "";
  for (let i = 0; i < 12; i++) {
    createGamma = createGamma + CreateBits(i);
  }
  return createGamma;
}

const gamma = parseInt(CreateGamma(), 2);
//console.log(gamma);

// Epsilon
function CreateEpsilon() {
  let createEpsilon = "";
  for (let i = 0; i < CreateGamma().length; i++) {
    if (CreateGamma()[i] === "0") {
      createEpsilon = createEpsilon + "1";
    } else if (CreateGamma()[i] === "1") {
      createEpsilon = createEpsilon + "0";
    }
  }
  return createEpsilon;
}
const epsilon = parseInt(CreateEpsilon(), 2);

// Power consumption

console.log(`Power consumtion: `);
console.log(gamma * epsilon);

/*------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------
--------------------------------------------------PART TWO----------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------*/

function counter(position, arr, oxCO) {             //kterých bitů je méně/více
  let counter1 = 0;
  let counter0 = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][position] === "1") {
      counter1++;
    } else {
      counter0++;
    }
  }
  if (oxCO === "ox") {
    if (counter1 >= counter0) {
      return "1";
    } else {
      return "0";
    }
  } else if (oxCO === "CO") {
    if (counter1 < counter0) {
      return "1";
    } else {
      return "0";
    }
  }
}

function trim(arr, position, oxCO) {             
  let newArr = [...arr];
  let trimArr = [];
  for (let i = 0; i < newArr.length; i++) {
    if (counter(position, newArr, oxCO) === "1") {
      if (newArr[i][position] === "1") {
        trimArr.push(newArr[i]);
      }
    } else {
      if (newArr[i][position] === "0") {
        trimArr.push(newArr[i]);
      }
    }
  }
  return trimArr;
}

const trim1 = trim(arr, 0, "ox");
const trim2 = trim(trim1, 1, "ox");
const trim3 = trim(trim2, 2, "ox");
const trim4 = trim(trim3, 3, "ox");
const trim5 = trim(trim4, 4, "ox");
const trim6 = trim(trim5, 5, "ox");
const trim7 = trim(trim6, 6, "ox");
const trim8 = trim(trim7, 7, "ox");
const trim9 = trim(trim8, 8, "ox");
const trim10 = trim(trim9, 9, "ox");
const trim11 = trim(trim10, 10, "ox");
const trim12 = trim(trim11, 11, "ox");

const firstTrim =  trim(arr, 0, "ox")

const ble = firstTrim.reduce((acc, curr, index) => {
  const temp = trim(acc, index + 1, "ox")
  if (temp.length >= 1 ) {
    return temp
  }
  return acc
}, firstTrim)


const oxygen = parseInt(trim12, 2);



const CO1 = trim(arr, 0, "CO");
const CO2 = trim(CO1, 1, "CO");
const CO3 = trim(CO2, 2, "CO");
const CO4 = trim(CO3, 3, "CO");
const CO5 = trim(CO4, 4, "CO");
const CO6 = trim(CO5, 5, "CO");
const CO7 = trim(CO6, 6, "CO");
const CO8 = trim(CO7, 7, "CO");
const CO9 = trim(CO8, 8, "CO");

const CO = parseInt(CO9, 2);


const firstTrim2 =  trim(arr, 0, "CO")


const ble2 = firstTrim2.reduce((acc, curr, index) => {
  const temp = trim(acc, index + 1, "CO")
  if (temp.length >= 1 ) {
    return temp
  }
  return acc
}, firstTrim2)



console.log(`Life support: `);
console.log(oxygen * CO);

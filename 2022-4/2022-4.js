const { readFileSync } = require("fs");
let arr = [];

function syncReadFile(filename) {
  const contents = readFileSync(filename, "utf-8");
  arr = contents.split(/\r?\n/);
  return arr;
}

syncReadFile("./2022-4-input.txt");

//console.log(arr)
const arrBezCarky = [];

function stringtoArr(arr) {
  let arrPracovni = [];

  for (let i = 0; i < arr.length; i++) {
    arrPracovni = arr[i].split(",");
    arrBezCarky.push(arrPracovni);
  }

  return arrBezCarky;
}
stringtoArr(arr);

const arrDve = arrBezCarky.flat();

//console.log(arrDve)

const arrTri = [];

function delim(arrDve) {
  let arrPracovni = [];

  for (let i = 0; i < arrDve.length; i++) {
    arrPracovni = arrDve[i].split("-");
    arrTri.push(arrPracovni);
  }

  return arrBezCarky;
}

delim(arrDve);
//console.log(arrTri)

let arrscislama = [];

function cisla(arrTri) {
  for (let i = 0; i < arrTri.length; i++) {
    let prvnicislo = parseInt(arrTri[i][0]);
    let druhecislo = parseInt(arrTri[i][1]);

    let miniarr = [];
    for (let j = prvnicislo; j <= druhecislo; j++) {
      miniarr.push(j);
    }
    arrscislama.push(miniarr);
    //let
  }
  return arrscislama;
}

cisla(arrTri);
//console.log(arrscislama)

const containsAll = (arr1, arr2) =>
  arr2.every((arr2Item) => arr1.includes(arr2Item));

let pocitadlo = 0;
let antipocitadlo = 0;

//console.log(arrscislama.length)
//const delkaArrsCislama = arrscislama.length
//console.log(delkaArrsCislama)

//console.log(arrscislama[1998])

function pocitanicko(arrscislama) {
  for (let i = 0; i < arrscislama.length; i += 2) {
    let prvni = arrscislama[i];
    let druhy = arrscislama[i + 1];
    let prvnidvojicka = prvni.length;
    let druhadvojicka = druhy.length;

    //console.log(prvni)
    //console.log(druhy)
    // console.log(prvnidvojicka)
    //console.log(druhadvojicka)

    //console.log(`jedna se o ${i/2+1} dvojici`)
    if (prvnidvojicka <= druhadvojicka) {
      // console.log("druhy je delsi")
      if (containsAll(druhy, prvni)) {
        //console.log("prvni je obsazen v druhem")
        pocitadlo = pocitadlo + 1;
        // console.log(pocitadlo)
      } else {
        //console.log("prvni neni obsazen v druhem, ani naopak")
        antipocitadlo = antipocitadlo + 1;
        //console.log(pocitadlo)
      }
    } else if (prvnidvojicka >= druhadvojicka) {
      // console.log('prvni je delsi')
      if (containsAll(prvni, druhy)) {
        //console.log("druhy je obsazen v druhem")
        pocitadlo = pocitadlo + 1;
        //console.log(pocitadlo)
      } else {
        //console.log("druhy neni obsazen v prvnim, ani naopak")
        //console.log(pocitadlo)
      }
    }
  }
}

pocitanicko(arrscislama);
console.log(`První odpověď: ${pocitadlo}`);

function druhepocitanicko(arrscislama) {
  let docasnyarr = [];

  for (let i = 0; i < arrscislama.length; i += 2) {
    let prvni = arrscislama[i];
    let druhy = arrscislama[i + 1];
    let prvnidvojicka = prvni.length;
    let druhadvojicka = druhy.length;

    for (let j = 0; j < prvnidvojicka; j++) {
      for (let k = 0; k < druhadvojicka; k++) {
        if (prvni[j] === druhy[k]) docasnyarr.push(i);
      }
    }
  }

  //console.log(doscasnyarr)
  let druhydocasny = [...new Set(docasnyarr)];
  console.log(`Druhá odpověď: ${druhydocasny.length}`);
}

druhepocitanicko(arrscislama);

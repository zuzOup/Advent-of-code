const {readFileSync} = require('fs')
const monkeyArr = readFileSync('./2022_day_11_input.txt','utf-8').split(/\n/)

//console.log(monkeyArr)
function monkeyStats(arr){
          const arrSplit = []
     for(let i = 0; i<arr.length; i+=7){
          let oneMonkeyArr = []
          let monkeyNumber = []
          // Number of monkey
          oneMonkeyArr.push(arr[i][7])
          // Starting Items
          monkeyNumber = arr[i+1].split(': ')
          monkeyNumber.shift()
          monkeyNumber= monkeyNumber[0].split(', ')
          monkeyNumber= monkeyNumber.map(x=> x = Number(x))
          oneMonkeyArr.push(monkeyNumber)
          // operation

          console.log(monkeyNumber)


     }
     //console.log(arrSplit)
}

monkeyStats(monkeyArr)













class monkey {
     constructor(){
          this.startingItem = 80;
          this.operation = 'new = old + 5';
          this.testDiv = 2;
          this.testTrue = 4;
          this.testFalse = 3;
     }
}


const monkey0 = new monkey
console.log(monkey0)
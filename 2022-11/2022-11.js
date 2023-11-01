class monkey {
  constructor(
    monkeyNumber,
    startingItemValue,
    operationValue,
    testDivValue,
    testTrueValue,
    testFalseValue
  ) {
    (this.Monkey = monkeyNumber),
      (this.startingItem = startingItemValue),
      (this.operation = operationValue),
      (this.testDiv = testDivValue),
      (this.testTrue = testTrueValue),
      (this.testFalse = testFalseValue),
      (this.counter = 0);
  }
  AddStarting(num) {
    this.startingItem.push(num);
  }

  CounterAdd() {
    this.counter++;
  }
}

const monkey0 = new monkey(0, [80], ["*", 5], 2, 4, 3);
const monkey1 = new monkey(1, [75, 83, 74], ["+", 7], 7, 5, 6);
const monkey2 = new monkey(2, [86, 67, 61, 96, 52, 63, 73], ["+", 5], 3, 7, 0);
const monkey3 = new monkey(
  3,
  [85, 83, 55, 85, 57, 70, 85, 52],
  ["+", 8],
  17,
  1,
  5
);
const monkey4 = new monkey(4, [67, 75, 91, 72, 89], ["+", 4], 11, 3, 1);
const monkey5 = new monkey(5, [66, 64, 68, 92, 68, 77], ["*", 2], 19, 6, 2);
const monkey6 = new monkey(6, [97, 94, 79, 88], ["*", "old"], 5, 2, 7);
const monkey7 = new monkey(7, [77, 85], ["+", 6], 13, 4, 0);

const monkeys = [
  monkey0,
  monkey1,
  monkey2,
  monkey3,
  monkey4,
  monkey5,
  monkey6,
  monkey7,
];

/*==============================================================================================
   ================================================================================================
   ==============================================================================================*/

function rounds() {
  for (let i = 1; i < 21; i++) {
    /*20 rounds or 10000*/
    /* console.log(
      "------------------------Round " + i + "------------------------"
    );*/

    for (let j = 0; j < monkeys.length; j++) {
      /*console.log("--------------------------------------------------------------------------");
      console.log("monkey " + j);
      console.log(monkeys[j].operation[0] + monkeys[j].operation[1]);*/
      if (monkeys[j].startingItem.length !== 0) {
        /* console.log(monkeys[j].startingItem);
        console.log("-------------");*/
        /*if no starting Item move to next monkey */
        for (let k = 0; k < monkeys[j].startingItem.length; k++) {
          let startingItem = monkeys[j].startingItem[k]; //identify starting Item worry level
          let newItem = 0; // future worry level
          //console.log("start: " + startingItem);

          if (
            monkeys[j].operation[0] === "+" && //new = old + number
            monkeys[j].operation[1] !== "old"
          ) {
            newItem = startingItem + monkeys[j].operation[1];
          } else if (
            monkeys[j].operation[0] === "*" && //new = old * number
            monkeys[j].operation[1] !== "old"
          ) {
            newItem = startingItem * monkeys[j].operation[1];
          } else if (
            monkeys[j].operation[0] === "+" && //new = old + old
            monkeys[j].operation[1] === "old"
          ) {
            newItem = startingItem + startingItem;
          } else if (
            monkeys[j].operation[0] === "*" && //new = old * old
            monkeys[j].operation[1] === "old"
          ) {
            newItem = startingItem * startingItem;
          }
          // console.log("newworry level: " + newItem);
          // new worry level is devided by 3 and rounded down
          newItem = Math.floor(newItem / 3); //Turned of for part 2
          //console.log("newworry level/3: " + newItem);
          //Division test
          if (newItem % monkeys[j].testDiv === 0) {
            //throw to testTrue monkey
            //console.log("throw to true " + monkeys[j].testTrue);
            monkeys[monkeys[j].testTrue].AddStarting(newItem);
            // throw to testFlase monkey
          } else {
            // console.log("throw to false " + monkeys[j].testFalse);
            monkeys[monkeys[j].testFalse].AddStarting(newItem);
          }
          // count item
          monkeys[j].CounterAdd();
          //console.log("counter " + monkeys[j].counter);
        }
        // all items were thrown, monkey has empty hands
        monkeys[j].startingItem = [];
      }
    }
  }
}
rounds();

function monkeyBusiness() {
  let monkeyBusinessArr = [];
  monkeys.forEach((x) => monkeyBusinessArr.push(x.counter));
  //console.log(monkeyBusinessArr);

  monkeyBusinessArr.sort((a, b) => a - b);
  //console.log(monkeyBusinessArr);
  monkeyBusinessArr = monkeyBusinessArr.slice(-2);
  console.log(
    "What is the level of monkey business after 20 rounds of stuff-slinging simian shenanigans?"
  );
  console.log(monkeyBusinessArr[0] * monkeyBusinessArr[1]);
}
monkeyBusiness();

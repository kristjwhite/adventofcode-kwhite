import { isSymbol } from "util";

const fs = require("fs");

const inputData = fs.readFileSync("./data/input.txt", `utf-8`);
const separateLines = inputData.split(/\n/g);
let indexX: number = 0;
let isTreeCounter = 0;
let answer = 0
let movementConfigX: number[] = [1, 3, 5, 7, 1];
let movementConfigY: number[] = [1, 1, 1, 1, 2];

for (let iteration = 0; iteration <= movementConfigY.length -1 ; iteration++) {
  console.log(
    "Checking Config; Right:",
    movementConfigX[iteration],
    " Down: ",
    movementConfigY[iteration]
  );

  answer =
    treeHittingCalculator(
      movementConfigX[iteration],
      movementConfigY[iteration]
    );
  console.log("Answer so far: ", answer);
}
console.log("Answer", answer);

function treeHittingCalculator(rightMove: number, downMove: number) {
  for (let i = 1; i <= separateLines.length - 1; i + downMove) {
    indexX = indexX + rightMove;
    if (indexX > 30) {
      indexX = indexX - 31;
    }
    if (separateLines[i].charAt(indexX) == "#") {
      isTreeCounter++;
    }
  }

  return isTreeCounter;
}

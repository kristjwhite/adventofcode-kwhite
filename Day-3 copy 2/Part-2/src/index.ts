const fs = require("fs");

const inputData = fs.readFileSync("./data/input.txt", `utf-8`);

const separateLines = inputData.split(/\n/g);

let answer = 1;
let movementConfigX: number[] = [1, 3, 5, 7, 1];
let movementConfigY: number[] = [1, 1, 1, 1, 2];

for (let n = 0; n <= movementConfigX.length - 1; n++) {
  answer =
    answer * treeHittingCalculator(movementConfigX[n], movementConfigY[n]);

  console.log("Answer so far: ", answer);
}
console.log("Answer", answer);

function treeHittingCalculator(rightMove: number, downMove: number) {
  let isTreeCounter = 0;
  let indexX: number = 0;
  console.log("Checking Config; Right:", rightMove, " Down: ", downMove);
  for (let i = downMove; i <= separateLines.length - 1; i = i + downMove) {
    indexX = indexX + rightMove;
    if (indexX > 30) {
      indexX = indexX - 31;
    }
    if (separateLines[i].charAt(indexX) == "#") {
      isTreeCounter++;
    }
  }
  console.log("Answer this iteration is ", isTreeCounter);
  return isTreeCounter;
}

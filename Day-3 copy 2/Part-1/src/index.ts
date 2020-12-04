import { isSymbol } from "util";

const fs = require("fs");

const inputData = fs.readFileSync("./data/input.txt", `utf-8`);
const separateLines = inputData.split(/\n/g);
let indexX: number = 0;
let isTreeCounter = 0;



  for (let i = 1; i <= separateLines.length - 1; i++) {
    indexX = indexX + 3;
    if (indexX > 30) {
      indexX = indexX - 31;
    }
    if (separateLines[i].charAt(indexX) == "#") {
      isTreeCounter++;
    }
  }

console.log("Answer: ", isTreeCounter)

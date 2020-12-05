import { parse } from "path";
import { rowCalc, colCalc } from "./positionCalcs";

const fs = require("fs");

const inputData = fs.readFileSync("./data/input.txt", `utf-8`);

let separateData: string = inputData.split("\n");

let highestPass = 0;
for (let i = 0; i < separateData.length; i++) {
  console.log("output: ", separateData[i]);
  let row: number = rowCalc(separateData[i]);
  let col: number = colCalc(separateData[i]);
  console.log("Row: ",row, " & Col: ", col)
  let passNumber: number = (row * 8) + col;
  console.log("output: ", passNumber);
  if (passNumber >= highestPass) {
    highestPass = passNumber;
  }
}
console.log(highestPass);

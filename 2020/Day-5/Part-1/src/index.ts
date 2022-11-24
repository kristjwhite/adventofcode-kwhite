import { parse } from "path";
import { rowCalc, colCalc } from "./positionCalcs";

const fs = require("fs");

const inputData = fs.readFileSync("./data/input.txt", `utf-8`);

let separateData: string = inputData.split("\n");

let highestPass = 0;
for (let i = 0; i < separateData.length; i++) {
  let row: number = rowCalc(separateData[i]);
  let col: number = colCalc(separateData[i]);

  let passNumber: number = row * 8 + col;

  if (passNumber >= highestPass) {
    highestPass = passNumber;
  }
}
console.log("Top value:", highestPass);

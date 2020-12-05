import { calculatePassIds } from "./positionCalcs";

const fs = require("fs");

const inputData = fs.readFileSync("./data/input.txt", `utf-8`);

let separateData: string[] = inputData.split("\n");

let allIds = calculatePassIds(separateData);

console.log("All values:", allIds);

var sortedArray: number[] = allIds.sort((n1, n2) => n1 - n2);

console.log("Sorted values:", sortedArray);

let mySeat = findGap(sortedArray);

console.log("My Seat", mySeat);
function findGap(array: number[]) {
  for (let i = 0; i < array.length; i++) {
    if (array[i + 1] - array[i] == 2) {
      let mid = (array[i + 1] + array[i]) / 2;
      return mid;
    }
  }
}

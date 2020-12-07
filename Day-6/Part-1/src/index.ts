const fs = require("fs");

const inputData = fs.readFileSync("./data/input.txt", `utf-8`);

let separateGroups: string = inputData.split("\n\n");

console.log("Groups split: ", separateGroups[0])


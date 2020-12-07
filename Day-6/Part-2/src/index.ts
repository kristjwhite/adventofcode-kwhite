const fs = require("fs");

const inputData = fs.readFileSync("./data/input.txt", `utf-8`);

let separateGroups: string[] = inputData.split("\n\n");
let sumAnswer = 0

console.log("Groups split: ", separateGroups[0])

separateGroups.forEach((value,index) => {
    separateGroups[index] = value.replace(/\n/g, "")
});
console.log("Cleaned Groups split: ", separateGroups[0])

separateGroups.forEach((value,index) => {


 sumAnswer = sumAnswer + removeDuplicateCharacters(value).length
});

console.log("Sum Total", sumAnswer)

export function removeDuplicateCharacters(string: string) {
    return string
      .split('')
      .filter(function(item, pos, self) {
        return self.indexOf(item) == pos;
      })
      .join('');
  }

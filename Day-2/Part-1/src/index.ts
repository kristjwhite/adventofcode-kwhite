const fs = require("fs");
const csvToJson = require("convert-csv-to-json");

const inputData = fs.readFileSync("./data/passwords.txt", `utf-8`);
const separateLines = inputData.split(/\n/g);
let counter: number = 0;
for (let i = 0; i < separateLines.length - 1; i++) {
  let newArray = separateLines[i].split(/\s/g);

  let ruleLimits: number[] = findLimits(newArray);

  const letter = newArray[1].charAt(0);
  const password = newArray[2];

  if (
    password.includes(letter) &&
    findValidPasswords(password, letter, ruleLimits[0], ruleLimits[1]) == true
  ) {
    counter++;
  }
}
console.log("Valid Passwords: ", counter);
function findLimits(line: string) {
  const rule: string = line[0];
  const subStrings = rule.split("-");
  let lowerLimit: number = parseInt(subStrings[0]);
  let upperLimit: number = parseInt(subStrings[1]);
  return [lowerLimit, upperLimit];
}

function findValidPasswords(
  password: string,
  letter: string,
  lowerLimit: number,
  upperLimit: number
) {
  let numberOfMatches = 0;
  for (var i = 0; i < password.length; i++) {
    let letterToCheck: string = password.charAt(i);
    if (letterToCheck == letter) {
      numberOfMatches++;
    }
  }
  let validPassword = false;
  if (numberOfMatches >= lowerLimit && numberOfMatches <= upperLimit) {
    validPassword = true;
  }
  return validPassword;
}

// console.log("Data: ", csvData)

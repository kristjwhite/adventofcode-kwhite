const fs = require("fs");

const inputData = fs.readFileSync("./data/passwords.txt", `utf-8`);
const separateLines = inputData.split(/\n/g);
let counter: number = 0;
for (let i = 0; i < separateLines.length-1 ; i++) {
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
  let firstValue: number = parseInt(subStrings[0])-1;
  let secondValue: number = parseInt(subStrings[1])-1;
  return [firstValue, secondValue];
}

function findValidPasswords(
  password: string,
  letter: string,
  firstNumber: number,
  secondNumber: number
) {
  let validPassword = false;

    let firstLetterCheck: boolean = (password.charAt(firstNumber) == letter);
    let secondLetterCheck: boolean = (password.charAt(secondNumber) == letter);
    // console.log("Letter is: ", letter)
    // console.log("First Value: ", password.charAt(firstNumber), " is ", firstLetterCheck)
    // console.log("Second Value: ", password.charAt(secondNumber), " is ", secondLetterCheck)
    if (firstLetterCheck !== secondLetterCheck) {
       validPassword = true;
  }

  return validPassword;
}

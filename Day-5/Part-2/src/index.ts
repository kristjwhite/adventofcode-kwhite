import * as validChecks from "./validChecks"
const fs = require("fs");

const inputData = fs.readFileSync("./data/input.txt", `utf-8`);
const validData = fs.readFileSync("./data/validData.txt", `utf-8`);
const invalidData = fs.readFileSync("./data/invalidData.txt", `utf-8`);
//TODO: Move functions into own files adn write tests for them!
interface Passport {
  ecl: string;
  pid: string;
  eyr: string;
  hcl: string;
  byr: string;
  iyr: string;
  hgt: string;
  cid?: string;
}

let separateData: string = inputData.split("\n\n");
let cleanedData: any = [];
let jsonParsed: any = [];
let validCounter: number = 0;
let correctFormat: any = [];
for (let i = 0; i < separateData.length - 1; i++) {
  cleanedData[i] = separateData[i].replace(/(\r\n|\n|\r)/gm, " ");

  jsonParsed = getJsonData(cleanedData[i]);
  let isValid = isPassport(jsonParsed);
  if (isValid == true) {
    correctFormat.push(jsonParsed)
  }
}
for (let i = 0; i < correctFormat.length; i++) {

  let isValid = isValidPassport(correctFormat[i]);
  if (isValid == true) {
    validCounter++
  }
  if (isValid == false){
    console.log("Invalid Passport:", correctFormat[i])
  }
}
console.log("Valid Passports:", validCounter)
function isPassport(obj: any): obj is Passport {
  return (
      obj &&
      typeof obj.ecl && typeof(obj.ecl) == 'string' &&
      typeof obj.pid && typeof(obj.pid) == 'string' &&
      typeof obj.eyr && typeof(obj.eyr) == 'string' &&
      typeof obj.hcl && typeof(obj.hcl) == 'string' &&
      typeof obj.byr && typeof(obj.byr) == 'string' &&
      typeof obj.iyr && typeof(obj.iyr) == 'string' &&
      typeof obj.hgt && typeof(obj.hgt) == 'string'
  );
}

export function isValidPassport(obj: any): obj is Passport {
  return (
    obj &&
    typeof obj.ecl && validChecks.isEclValid(obj.ecl) &&
    typeof obj.pid && validChecks.isPidValid(obj.pid) &&
    typeof obj.eyr && validChecks.isEyrValid(obj.eyr) &&
    typeof obj.hcl && validChecks.isHclValid(obj.hcl) &&
    typeof obj.byr && validChecks.isByrValid(obj.byr) &&
    typeof obj.iyr && validChecks.isIyrValid(obj.iyr) &&
    typeof obj.hgt && validChecks.isHgtValid(obj.hgt)
  );
}




export function getJsonData(query: string) {
  let arrayOfKeyValues = query.split(/\s/g);
  let modifiedArray = new Array();
  for (let i = 0; i < arrayOfKeyValues.length; i++) {
    let arrayValues = arrayOfKeyValues[i].split(":");
    let arrayString =
      '"' + arrayValues[0] + '"' + ":" + '"' + arrayValues[1] + '"';
    modifiedArray.push(arrayString);
  }
  let jsonDataString = "{" + modifiedArray.toString() + "}";
  let jsonData = JSON.parse(jsonDataString);
  return jsonData;
}

import * as validChecks from "./validChecks"
const fs = require("fs");

const inputData = fs.readFileSync("./data/input.txt", `utf-8`);
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
for (let i = 0; i < separateData.length - 1; i++) {
  cleanedData[i] = separateData[i].replace(/(\r\n|\n|\r)/gm, " ");

  jsonParsed = getJsonData(cleanedData[i]);
  let isValid = isPassport(jsonParsed);
  if (isValid == true) {
    validCounter++;
  }
  console.log("Valid Passport: ", isValid);
}
console.log("Total Valid = ", validCounter);

function isPassport(obj: any): obj is Passport {
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




function getJsonData(query: string) {
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

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
    typeof obj.ecl && isEclValid(obj.ecl) &&
    typeof obj.pid && isPidValid(obj.pid) &&
    typeof obj.eyr && isEyrValid(obj.eyr) &&
    typeof obj.hcl && isHclValid(obj.hcl) &&
    typeof obj.byr && isByrValid(obj.byr) &&
    typeof obj.iyr && isIyrValid(obj.iyr) &&
    typeof obj.hgt && isHgtValid(obj.hgt)
  );
}

function isByrValid(val: string) {
  return val.length <= 4 && Number(val) < 2002 && Number(val) > 1920;
}

function isIyrValid(val: string) {
  return val.length <= 4 && Number(val) < 2020 && Number(val) > 2010;
}

function isEyrValid(val: string) {
  return val.length <= 4 && Number(val) < 2030 && Number(val) > 2020;
}
function isHgtValid(val: string) {
  if (val.slice(-2) == "cm") {
    return Number(val) < 150 && Number(val) > 193;
  }
  if (val.slice(-2) == "in") {
    return Number(val) < 59 && Number(val) > 76;
  }

  return false;
}

function isHclValid(val: string) {
  if (val.search(`/#[0-9A-Fa-f]{6}/gi`) == -1) {
    console.log("Invalid HCL: ", val);
    return false;
  }
  console.log("Valid HCL: ", val);
  return true;
}

function isEclValid(val: string) {
  let validColours = [`amb`, `blu`, `brn`, `gry`, `grn`, `hzl`, `oth`];

  for (let i = 0; i < validColours.length - 1; i++) {
    if (val == validColours[i]) {
      return true;
    }
  }
  return false;
}

function isPidValid(val: string) {
  if (val.search(`/{9}/g`) == -1 || !isNaN(+Number(val))) {
    console.log("Invalid PID: ", val);
    return false;
  }
  return true;
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

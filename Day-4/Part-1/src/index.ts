const fs = require("fs");

const inputData = fs.readFileSync("./data/input.txt", `utf-8`);

 interface Passport {
  ecl: string;
  pid: string;
  eyr: string;
  hcl: string;
  byr: string;
  iyr: string;
  hgt: string;
  cid?: string;
};


let separateData: string = inputData.split("\n\n");
let cleanedData: any = [];
let jsonParsed: any = [];
let validCounter:number = 0
for (let i = 0; i < separateData.length-1; i++) {
  cleanedData[i] = separateData[i].replace(/(\r\n|\n|\r)/gm, " ");

  jsonParsed = (getJsonData(cleanedData[i]));
  let isValid = isPassport(jsonParsed)
  if( isValid == true){
    validCounter++
  }
  console.log("Valid Passport: ", isValid);
}
console.log("Total Valid = ", validCounter)



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

const fs = require("fs");
import { doAllStringsContain } from './function'

const inputData = fs.readFileSync("./data/input.txt", `utf-8`);

let separateGroups: string[] = inputData.split("\n\n");
let sumAnswer = 0;
let subGroups;

separateGroups.forEach((value, index) => {
  subGroups = value.split(/\n/g);

  console.log("-------------");
  console.log("Cleaned Groups value: ", value);
  console.log("Before: ",sumAnswer)
  sumAnswer = sumAnswer + isCharInAllGroups(subGroups);
  console.log("After: ",sumAnswer)
  // subGroups.forEach((value,index) => {
  // })
});

separateGroups.forEach((value, index) => {});

console.log("Sum Total", sumAnswer);

export function isCharInAllGroups(array: string[]) {

  let isInAll = 0;
  let first: string = array.shift()!
  if(array.length == 0){
    return first.length
  }
  array = array.filter(Boolean);

  let letterArray = first.split("")
  for(let i = 0; i < letterArray.length; i++){
    let contained = doAllStringsContain(letterArray[i],array)
    if (contained == true){
      isInAll++
    }
  }
  console.log(letterArray)
  return isInAll
  }

const fs = require('fs');

const inputData = fs.readFileSync('./data/data.txt', `utf-8`);
const separateLines = inputData.split(/\n/g);
const main = (data) => {
  console.log(data);

  let calories = [];
  let calorie = 0;
  for (let i in data) {
    if (data[i] !== '') {
      calorie = calorie + Number(data[i]);
    } else {
      calories.push(calorie);
      calorie = 0;
    }
  }
  return calories
    .sort()
    .reverse()
    .slice(0, 3)
    .reduce((p, a) => p + a, 0);

  // return horizontal * depth;
};
const answer = main(separateLines);
console.log('Answer: ', answer);

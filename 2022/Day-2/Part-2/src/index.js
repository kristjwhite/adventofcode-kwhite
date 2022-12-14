const fs = require('fs');

const inputData = fs.readFileSync('./data/data.txt', `utf-8`);
const separateLines = inputData.split(/\n/g);

let loss = {
  A: 3,
  B: 1,
  C: 2,
};

let draw = {
  A: 1,
  B: 2,
  C: 3,
};

let win = {
  A: 2,
  B: 3,
  C: 1,
};

const main = (data) => {
  let points = 0;
  for (let i in data) {
    const opponent = data[i].slice(0, 1);
    const result = data[i].slice(2, 3);
    let outcome = {
      X: loss[opponent],
      Y: draw[opponent] + 3,
      Z: win[opponent] + 6,
    };
    points += outcome[result];
  }
  return points;
};
const answer = main(separateLines);
console.log('Answer: ', answer);

const fs = require('fs');

const inputData = fs.readFileSync('./data/data.txt', `utf-8`);
const separateLines = inputData.split(/\n/g);
// A = Rock
// B = Paper
// C = Scissors
// X = Loss = 1
// Y = Draw = 2
// Z = Win = 3

const calculateLoss = (sign) => {
  let p = 0;
  switch (sign) {
    case 'A':
      p += 3;
      break;
    case 'B':
      p += 1;
      break;
    case 'C':
      p += 2;
      break;
  }
  return p;
};
const calculateDraw = (sign) => {
  let p = 0;
  switch (sign) {
    case 'A':
      p += 1;
      break;
    case 'B':
      p += 2;
      break;
    case 'C':
      p += 3;
      break;
  }
  return (p += 3);
};
const calculateWin = (sign) => {
  let p = 0;
  switch (sign) {
    case 'A':
      p += 2;
      break;
    case 'B':
      p += 3;
      break;
    case 'C':
      p += 1;
      break;
  }

  return (p += 6);
};
const main = (data) => {
  let points = 0;
  for (let i in data) {
    const opponent = data[i].slice(0, 1);
    const result = data[i].slice(2, 3);

    if (result == 'X') {
      points += calculateLoss(opponent);
    }
    if (result == 'Y') {
      points += calculateDraw(opponent);
    }
    if (result == 'Z') {
      points += calculateWin(opponent);
    }
  }
  return points;
};
const answer = main(separateLines);
console.log('Answer: ', answer);

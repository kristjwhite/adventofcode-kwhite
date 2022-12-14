const fs = require('fs');

const inputData = fs.readFileSync('./data/data.txt', `utf-8`);
const separateLines = inputData.split(/\n/g);
// A = Rock
// B = Paper
// C = Scissors
// X = Rock = 1
// Y = Paper = 2
// Z = Scissors = 3
const main = (data) => {
  let points = 0;
  for (let i in data) {
    const opponent = data[i].slice(0, 1);
    const response = data[i].slice(2, 3);
    switch (response) {
      case 'X':
        points += 1;
        break;
      case 'Y':
        points += 2;
        break;
      case 'Z':
        points += 3;
        break;
    }
    if (opponent == 'A') {
      if (response == 'X') {
        points += 3;
      }
      if (response == 'Y') {
        points += 6;
      }
    }
    if (opponent == 'B') {
      if (response == 'Y') {
        points += 3;
      }
      if (response == 'Z') {
        points += 6;
      }
    }
    if (opponent == 'C') {
      if (response == 'Z') {
        points += 3;
      }
      if (response == 'X') {
        points += 6;
      }
    }
  }
  return points;
};
const answer = main(separateLines);
console.log('Answer: ', answer);

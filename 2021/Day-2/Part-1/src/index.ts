import fs from 'fs';

const inputData = fs.readFileSync('./data/data.txt', `utf-8`);
const separateLines = inputData.split(/\n/g);
export const main = (data: Array<string>) => {
  let horizontal = 0;
  let depth = 0;

  for (let i in data) {
    const splitString = data[i].split(' ');
    const direction = splitString[0];
    const value = Number(splitString[1]);

    switch (direction) {
      case 'forward':
        horizontal += value;
        break;
      case 'down':
        depth += value;
        break;
      case 'up':
        depth -= value;
        break;
    }
  }
  console.log('Horizontal Value: ', horizontal);
  console.log('Depth Value: ', depth);
  return horizontal * depth;
};
const answer = main(separateLines);
console.log('Answer: ', answer);

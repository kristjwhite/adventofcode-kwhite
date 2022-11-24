import { data } from '../data/data.json';

console.log('Table Size: ', data);
console.log('Table Size: ', data.length);
export const compareValues = (val1: number, val2: number, counter: number) => {
  if (val1 < val2) {
    return (counter += 1);
  }
  return counter;
};
export const main = (data: Array<number>) => {
  let increasedDepthCounter = 0;

  for (let n = 0; n <= data.length - 1; n++) {
    let val1 = data[n] + data[n + 1] + data[n + 2];
    let val2 = data[n + 1] + data[n + 2] + data[n + 3];

    increasedDepthCounter = compareValues(val1, val2, increasedDepthCounter);
  }

  return increasedDepthCounter;
};
const increasedDepthCounter = main(data);
console.log('Total depth increases = ', increasedDepthCounter);

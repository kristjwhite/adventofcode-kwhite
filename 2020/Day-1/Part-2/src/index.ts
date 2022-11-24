const inputData = require("../data/expense.json");

const expectedSum = 2020;

const inputMock = inputData;

for (let i = 0; i < inputMock.length; i++) {
  let secondValue = inputMock.slice(i + 1);
  for (let n = 0; n < secondValue.length; n++) {
    let thirdValue = secondValue.slice(n + 1);
    for (let a = 0; a < thirdValue.length; a++) {
      //   console.log("-----------------------------");
      //   console.log("Loop Number", i, " = ", inputMock[i]);
      //   console.log("First slice", i, " = ", secondValue[n]);
      //   console.log("Second slice", i, " = ", thirdValue[a]);
      if (inputMock[i] + secondValue[n] + thirdValue[a] == expectedSum) {
        let answer = inputMock[i] * secondValue[n] * thirdValue[a];
        console.log(
          "Answer:",
          inputMock[i],
          " x ",
          secondValue[n],
          " x ",
          thirdValue[a],
          " = ",
          answer
        );
      }
    }
  }
}

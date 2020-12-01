"use strict";
var inputData = require("./expense.json");
var expectedSum = 2020;
var highValues = inputData.foreach(function (expense) {
    if (expense > expectedSum) {
        return;
    }
});
console.log("High Values", highValues);

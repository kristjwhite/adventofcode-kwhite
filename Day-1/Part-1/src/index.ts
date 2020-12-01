const inputData = require("../data/expense.json")

const expectedSum = 2020

console.log( "Table Size: ", inputData.length)

let higherData = []
let lowerData = []

for(let expense of inputData) {
    if(expense > (expectedSum/2)){
        higherData.push(expense)
        console.log("Value Higher: ", expense)
    }else{
        lowerData.push(expense)
        console.log("Value Lower: ", expense)
    }
}

for(let lowerExpense of lowerData){
    for(let higherExpense of higherData){
        if(lowerExpense+higherExpense == expectedSum){
            let answer = lowerExpense*higherExpense
            console.log("Answer:", lowerExpense, " x ", higherExpense, " = ", answer)
        }

    }
}

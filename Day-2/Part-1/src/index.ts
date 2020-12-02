const fs = require('fs')
const results:any = [];


const inputData = fs.readFileSync("./data/passwords.txt", `utf-8`)
console.log("Data: ", inputData)

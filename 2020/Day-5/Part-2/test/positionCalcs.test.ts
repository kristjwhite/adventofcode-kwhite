import * as calcs from '../src/positionCalcs'



describe('Row Checker', ()=>{
    const testData:any[] = [
        ["BFFFBBFRRR", 70],
        ["FFFBBBFRRR", 14],
        ["BBFFBBFRLL", 102]
    ]
    it.each(testData)("should eval to the right row" ,(testData,correctAnswer)=>{
        const check = calcs.rowCalc(testData)

        expect(check).toEqual(correctAnswer)
    })
})
describe('Row Checker', ()=>{
    const testData:any[] = [
        ["BFFFBBFRRR", 7],
        ["FFFBBBFRRR", 7],
        ["BBFFBBFRLL", 4]
    ]
    it.each(testData)("should eval to the right row" ,(testData,correctAnswer)=>{
        const check = calcs.colCalc(testData)

        expect(check).toEqual(correctAnswer)
    })
})

describe('Boarding Pass Calc', ()=>{
    const testData:any[] = [
        ["BFFFBBFRRR", 567],
        ["FFFBBBFRRR", 119],
        ["BBFFBBFRLL", 820],
        ["FFFFFFFLLL", 8]
    ]
    it.each(testData)("should eval to the right row" ,(testData,correctAnswer)=>{
        let col = calcs.colCalc(testData)
        let row = calcs.rowCalc(testData)
        let passNumber: number = (row * 8) + col;
        expect(passNumber).toEqual(correctAnswer)
    })
})

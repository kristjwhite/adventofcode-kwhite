import * as func from '../src/function'



describe('Check string contains', ()=>{
    const testData:any[] = [["a","abc"] ,["b", "bcd"]]
    it.each(testData)("should eval to true" ,(testLetter, testString)=>{
        const check = func.containsLetter(testLetter,testString)

        expect(check).toEqual(true)
    })
})

describe('Check string does not contain', ()=>{
    const testData:any[] = [["z","abc"] ,["a", "bcd"]]
    it.each(testData)("should eval to false" ,(testLetter, testString)=>{
        const check = func.containsLetter(testLetter,testString)

        expect(check).toEqual(false)
    })
})

describe('Check strings contain', ()=>{
    const testData:any[] = ["a"]
    it.each(testData)("should eval to true" ,(testLetter)=>{
        const check = func.doAllStringsContain(testLetter,["abc" ,"bafs", "abcd"])

        expect(check).toEqual(true)
    })
})

describe('Check string do not contain', ()=>{
    const testData:any[] = ["a"]
    it.each(testData)("should eval to false" ,(testLetter)=>{
        const check = func.doAllStringsContain(testLetter,["bcd","abc","dce"])

        expect(check).toEqual(false)
    })
})

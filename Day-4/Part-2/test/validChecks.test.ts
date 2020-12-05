import * as validChecks from '../src/validChecks'

describe('Birth Year Checker', ()=>{
    const validByrData = ["1980", "1989", "2001", "1920", "1944", "2002",]
    const invalidByrData = ["1919", "2004", "20abc" ]
    it.each(validByrData)("should return true for valid birth year %s" ,async(testCase)=>{
        const check = validChecks.isByrValid(testCase)
        expect(check).toBe(true)
    })
    it.each(invalidByrData)("should return true for invalid birth year %s",async(testCase)=>{
        const check = validChecks.isByrValid(testCase)
        expect(check).toBe(false)
    })
})

describe('Issue Year Checker', ()=>{
    const validIyrData = ["2012", "2014", "2015", "2010"]
    const invalidIyrData = ["1919", "19202", "2009", "2021", "20abc" ]
    it.each(validIyrData)("should return true for valid issue year %s",async(testCase)=>{
        const check = validChecks.isIyrValid(testCase)
        expect(check).toBe(true)
    })
    it.each(invalidIyrData)('should return false for invalid issue year %s',async(testCase)=>{
        const check = validChecks.isIyrValid(testCase)
        expect(check).toBe(false)
    })
})

describe('Expiration Year Checker', ()=>{
    const validEyrData = ["2020", "2029", "2022", "2021" ,"2030"]
    const invalidEyrData = ["1919", "19202", "2019", "2031", "20abc" ]
    it.each(validEyrData)("should return true for valid expiration year %s",async(testCase)=>{
        const check = validChecks.isEyrValid(testCase)
        expect(check).toBe(true)
    })
    it.each(invalidEyrData)('should return false for invalid expiration year %s',async(testCase)=>{
        const check = validChecks.isEyrValid(testCase)
        expect(check).toBe(false)
    })
})

describe('Height Checker', ()=>{
    const validHgtData = ["60in", "176cm", "190cm", "150cm", "193cm" ,"59in", "76in"]
    const invalidHgtData = ["190in", "150in", "58cm", "76cm", "20abc" ]
    it.each(validHgtData)("should return true for valid height: %s",async(testCase)=>{
        const check = validChecks.isHgtValid(testCase)
        expect(check).toBe(true)
    })
    it.each(invalidHgtData)('should return false for invalid height: %s',async(testCase)=>{
        const check = validChecks.isHgtValid(testCase)
        expect(check).toBe(false)
    })
})


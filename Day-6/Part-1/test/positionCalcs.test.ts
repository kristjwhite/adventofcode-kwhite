import * as func from '../src/functions'



describe('Row Checker', ()=>{
    const testData:any[] = [["abcdef",6], ["aaaa",1], ["abcabc", 3]]
    it.each(testData)("should eval to the right row" ,(testData,correctAnswer)=>{
        const check = func.uniqueCharCount(testData)

        expect(check).toEqual(correctAnswer)
    })
})


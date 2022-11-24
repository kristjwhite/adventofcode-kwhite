export function containsLetter(letter:string, string:string){
    console.log("Checking: ", string, " contains ", letter)
return (string.includes(letter))
}

export function doAllStringsContain(letter:string,strings:string[]){
    let arr:boolean[] = []
    for(let i = 0; i<strings.length;i++){
        arr.push(containsLetter(letter,strings[i]))
    }
    let checker = arr.every(v => v === true);
    return checker
}

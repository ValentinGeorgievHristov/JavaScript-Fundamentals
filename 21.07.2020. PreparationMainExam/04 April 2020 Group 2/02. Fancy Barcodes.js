function solve(input) {
    let countStrings = input.shift();
    let patternWords = /([#@]+)(?<word>[\w]{6,})\1/g
    let patternDigits = /(?<digitIter>[0-9])/g


    for (let i = 0; i < countStrings; i++) {

        let barcodes = input.shift();
        let match = barcodes.matchAll(patternWords);
        let matchDigits = barcodes.matchAll(patternDigits)
        console.log(matchDigits);
        for (let el of match) {
            let singleWord = el.groups.word;
            console.log(singleWord);
            let digitLine = '';

        }


    }




}
solve(
    ['3', '@#FreshFisH@#', '@###Brea0D@###', '@##Che46sE@##']
)
// for (let j = 0; j < singleWord.length; j++) {   //Логика Ники!
//     let N = Number(singleWord[j]);
//     if( N != NaN)
//         digitLin +=singleWord[j];

//     console.log(digitLin);
//     console.log(singleWord[j]);
// }
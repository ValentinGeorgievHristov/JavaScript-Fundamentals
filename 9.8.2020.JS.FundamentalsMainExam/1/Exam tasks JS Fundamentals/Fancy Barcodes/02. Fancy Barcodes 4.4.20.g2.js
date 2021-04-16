// НЕ Е ОСОБЕНО ДОБРО РЕШЕНИЕТО!!!
function solve(input) {                    
    let countStrings = input.shift();
    let patternWords = /(@[#]+)[A-Za-z0-9]{6,}\1/g //  /([#@]+)(?<word>[\w]{6,})\1/g
    let patternDigits = /(?<digitIter>[0-9])/g



    for (let i = 0; i < countStrings; i++) {
        // let result = '';
        let barcodes = input.shift();
        let group;
        let matchBarcodes = barcodes.match(patternWords); //.join('');
        if (matchBarcodes == null) {
            console.log('Invalid barcode');
        } else {
            //console.log(matchBarcodes);
            let matchDigits = barcodes.match(patternDigits);
            if (matchDigits == null) {
                group = '00';
            } else {
                group = matchDigits.join('');
            }
            console.log(`Product group: ${group}`);
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
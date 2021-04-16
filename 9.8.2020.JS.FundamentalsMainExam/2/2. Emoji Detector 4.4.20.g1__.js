function solve(input) {
    let text = input.shift();
    
    let patternWords = /([::|**]{2})(?<word>[A-Z][a-z]{2,})\1/g 
    let patternDigits = /(?<digitIter>[0-9])/g
    let matchDigits = text.match(patternDigits).map(Number).reduce((a, b) => a * b, 1);    //REDUCE *

    console.log(`Cool threshold: ${matchDigits}`);

    let match = patternWords.exec(text);
    let counter = 0;
    let coolDigits = [];

    while (match) {
        counter++;

        let wordOfWords = match.groups.word;
        let sumWordDigits = calculate(wordOfWords);

        if (sumWordDigits >= matchDigits) {                     //SRAVNQVAM SUMA SAS SBOR OT DVA PATERNA
            coolDigits.push(match[0]);
        };

        match = patternWords.exec(text);
    }

    function calculate(str) {                                       // KALKULACII S CHAR_CODE_AT
        let result = 0;
        let char = str.split('')
        for (let i = 0; i < char.length; i++) {
            //console.log(str.charCodeAt(i));
            result += str.charCodeAt(i);
        }

        return result;

    }
    console.log(`${counter} emojis found in the text. The cool ones are:`);
    console.log(coolDigits.join('\n'));
}
solve(
    // [
    //     'In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**'
    // ]
    [
        '5, 4, 3, 2, 1, go! The 1-th consecutive banana-eating contest has begun! ::Joy:: **Banana** ::Wink:: **Vali** ::valid_emoji::'
      ]
    // [
    //     "It is a long established fact that 1 a reader will be distracted by 9 the readable content of a page when looking at its layout. The point of using ::LoremIpsum:: is that it has a more-or-less normal 3 distribution of 8 letters, as opposed to using 'Content here, content 99 here', making it look like readable **English**."
    // ]
)
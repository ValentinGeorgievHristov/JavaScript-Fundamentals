function solve(input) {

    let text = input.shift().split(' ');
    // console.log(text);
    let patternEmojis = /([::|**]{2})(?<word>[A-Za-z]{3,})\1/g;
    let patternDigits = /(?<digits>[0-9])/g;

    //let match = text.match(patternEmojis);


    for (let i = 0; i < text.length; i++) {



        let matchDigits = text[i].match(patternDigits)
        if (matchDigits != null) {
            matchDigits=matchDigits.map(Number);
            console.log(matchDigits);
            let matchD = (matchDigits.reduce((a, b) => a * b, 1))
            console.log(matchD);
            console.log('----------------------------------------------------');
        }
        //matchDigits = matchDigits.split(',').map(Number);
        //   console.log(`${matchDigits}`);
        // let match = patternEmojis.exec(text[i]);
        let match = text[i].match(patternEmojis);
        //console.log(`${match} -> ${text[i]}`);



    }
}
solve(
    [
        'In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**'
    ]
)
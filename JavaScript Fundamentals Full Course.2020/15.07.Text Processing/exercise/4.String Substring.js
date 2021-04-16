function solve(word, text) {

    let wordLowerCase = word.toLowerCase();
    text = text.toLowerCase();
    if (text.split(' ').includes(wordLowerCase)) {
        console.log(word);
    } else {
        console.log(`${word} not found!`);
    }
    // // console.log(wordLowerCase);
    // // console.log(textLowerCase);
    //     if(textLowerCase.includes(wordLowerCase)){
    //         console.log(word);
    //     }else{
    //         console.log(`${word} not found!`);
    // //     }
    // splitted.forEach(splitted => {
    //     if (splitted === wordLowerCase) {
    //         console.log(word);
    //     } else {
    //         console.log(`${word} not found!`);
    //     }
    // });

}
solve('python',
    'JavaScript is the best programming language'

)
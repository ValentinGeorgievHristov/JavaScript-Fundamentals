function solve(input) {

    let words = {};

    for (const word of input) {
        // console.log(word);
        if (words[word]) {
            words[word]++;
        } else {
            words[word] = 1
        }
    }
    let wordEntries = Object.entries(words)
    //console.log(wordEntries);

    let sortedWordEntries = wordEntries.sort((a, b) => {
        let wordCountA = a[1];
        let wordCountB = b[1];

        return wordCountB - wordCountA;

    });
    //console.log(sortedWordEntries);

    for (const kvp of sortedWordEntries) {
        console.log(`${kvp[0]} -> ${kvp[1]} times`);
    }
}
solve(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"])
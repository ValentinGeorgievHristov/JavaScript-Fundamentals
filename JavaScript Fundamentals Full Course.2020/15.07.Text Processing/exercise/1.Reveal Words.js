function solve(wantedWords, text) {
    
    let words = wantedWords.split(', ');

    words.forEach(word => {
      let asterix = '*'.repeat(word.length);
     text = text.replace(asterix,word)
    });
console.log(text);
}
solve('great, learning',
'softuni is ***** place for ******** new programming languages')
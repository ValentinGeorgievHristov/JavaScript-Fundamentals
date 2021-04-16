function solve(input) {
    let objWord = {};
   

    input.forEach(word => {
        let count = 0;

        if (!objWord.hasOwnProperty(word)) {
            objWord[word] = count;
        } else {
            objWord[word] = count++;
        }

    });
console.log(objWord);

}
solve(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"])
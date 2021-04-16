function solve(input) {
    //let map = new Map();
    let obj = {};

    input.forEach(word => {
        if (input.includes(word)) {        //(!obj.hasOwnProperty[word])
            obj[word] = 0;
        } else {
           obj[word]++;
        }
        console.log(obj);
    });
}
solve(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"])
function solve(input) { //yeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    let obj = {};
    let splitted = input
        .shift()
        .split(' ');

    for (let element of splitted) {
        obj[element] = 0;
    };
    // console.log(input)

    for (const currentWord of input) {
        if (Object.keys(obj).includes(currentWord)) {
            obj[currentWord]++
        }
        //  console.log(obj[element]);
    }
    // console.log(obj);
    let entries = Object
    .entries(obj)
    .sort((a, b) => b[1] - a[1]);

    for (const kvp of entries) {
console.log(`${kvp[0]} - ${kvp[1]}`);
    }

}
solve([
    'this sentence', 'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurances', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
])
function solve(elements) {
    let result = [];
    let textResult = '';

    let swapOpperations = Math.ceil(elements.length / 2);

    for (let i = 0; i < swapOpperations; i++) {
        result[i] = elements[elements.length - 1 - i];
        result[elements.length-1-i]=elements[i];
    }
for(let element of result){
    textResult += element + ' ';
}
console.log(textResult);
}
solve(['a', 'b', 'c', 'd', 'e'])
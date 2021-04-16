function solve(str) {
let splittedText = str.split('');


let result = '';

for (let i = 0; i < splittedText.length; i++) {
    if(splittedText[i]!==splittedText[i+1]){
        result += splittedText[i]
    }
    
}
    console.log(result);

}
solve('aaaaabbbbbcdddeeeedssaa')
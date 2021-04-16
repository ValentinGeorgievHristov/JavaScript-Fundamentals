function solve(input) {
    let text = input;
    let pattern = /(=|\/)(?<word>[A-Za-z]{3,})\1/g;
    let match = pattern.exec(text);
    let res = '';
    let sum = 0;

    while (match) {

        let words = match.groups.word;
        res += words + ', ' 
        sum += match.groups.word.length
       
      // // console.log(`Destinations:${words.join('')}`);

        match = pattern.exec(text);
    }
let n  = res.slice(0, -1);
    n  = n.slice(0, -1);
//console.log(n);

console.log(`Destinations: ${n}`);
console.log(`Travel Points: ${sum}`);
}
solve('=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=')
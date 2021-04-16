function solve(input) {
    let arr = input[0].toString()
        .toLowerCase()
        .split(' ')

    let obj = {};
    let res = '';

    arr.forEach(element => {

        if (obj[element]) {
            obj[element]++
        } else {
            obj[element] = 1
        }
    });
    let entries = Object.entries(obj)
    
    for (const kvp of entries) {
        if (kvp[1] % 2 !== 0) {
            res += kvp[0] + ' ';
        }
        
    };
    console.log(res); 
   
}
solve([
            ' Java C# Php PHP Java PhP 3 C# 3 1 5 C#'])
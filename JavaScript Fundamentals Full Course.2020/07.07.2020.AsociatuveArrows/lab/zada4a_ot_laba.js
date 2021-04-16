function solve(input){
    let arr = {};

    input.forEach(element => {
        let data = element.split(' ');
        arr[data[0]]=data[1];
        //console.log(element);
        console.log( arr[data[0]]);
        //console.log(data[1]);
        //console.log(data);
        
    });
    for (const key in arr) {
        console.log(`${key} -> ${arr[key]}`);
    }
}
solve([
'Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344'
])
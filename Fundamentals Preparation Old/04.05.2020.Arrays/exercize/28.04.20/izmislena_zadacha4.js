function solve(arr) {              //hjgf.join('')////,join(`\n`)
    let even ="";
    let odd = "";
     let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            even +=" "+ arr[i]
        } else if (arr[i] % 2 === 1) {
            odd += " "+ arr[i]
        }
        result = even+odd
        }
    console.log(Array.from([result],x=>x)); 
    for (let k=0; k<result.length; k++){
        console.log(result[k])
    }
}
solve([1, 22, 3, 4, 5, 6, 7, 8])

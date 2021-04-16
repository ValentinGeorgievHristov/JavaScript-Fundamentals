function solve(num) {            //имало лесен вариант за филтър на тази задача 
    let arr = num;  
    let even = [];
    let odd = [];
    arr = num.toString().split("")
return arr
    for (let i = 0; i < arr.length; i++) {

        if (arr[i] % 2 == 0) {
            even.push(arr[i]);
            return even
        } else if (odd % 2 == 1) {
            odd.push(arr[i]);
            return odd
        } 
    }
}
console.log(solve(1000435))
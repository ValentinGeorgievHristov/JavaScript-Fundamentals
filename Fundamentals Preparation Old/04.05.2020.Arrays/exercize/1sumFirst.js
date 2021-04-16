function solve(arr) {
    let arrNum = arr.map(Number);
    let popped = [];
    let sh = [];
    let res = 0;
    popped = arrNum.pop();
    sh = arrNum.shift();
    res = popped+sh;
    console.log(res);
    
    // for (let i = 0; i < arr.length; i++) {
       
    // }
//console.log(popped);
//console.log(sh);

}
solve(['11', '58', '69'])
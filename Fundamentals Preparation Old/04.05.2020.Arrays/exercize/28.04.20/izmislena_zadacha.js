function solve(arr){
    let countUnderZero=0;
    let subZeroSum = 0;
   let underZeroSum = 0;
for (let i=0; i<arr.length; i++){
    if (arr[i]<0){
        subZeroSum +=arr[i];
    }else {
        countUnderZero++;
        underZeroSum +=arr[i];
    }
}
console.log(countUnderZero);  // брой положителни елементи на масив
console.log(subZeroSum)     // сума под нула
console.log(underZeroSum)     // сума положителни

}
solve([5,6,-10,7,-3])
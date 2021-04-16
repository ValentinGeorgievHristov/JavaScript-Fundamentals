function solve(arr) {
    let minNum = Number.MAX_SAFE_INTEGER;
    //let maxNum = Number.MIN_SAFE_INTEGER;
    let arr = [3, 2, 5, 1, 4];
  
    for (let i = 0; i < arr.length; i++) {
    if (minNum > arr[i]) {
       minNum= arr[i]   // вярно е и да седи в сянка за сега!
       // let removedItem = solve.splice(pos,arr[i]) 
        console.log(minNum);
        
    }

    }
// console.log(minNum); 
}
solve([12])
 //склад
//  console.log(arr);
// for(let i=0; i<arr.length; i++){
// console.log(arr[i]);
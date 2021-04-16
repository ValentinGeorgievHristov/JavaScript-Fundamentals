function solve(arr){
let newP
    for (let i=0; i<arr.length; i++){
        for (let j=1; j<arr.length; j++){
        if(arr[i]==arr[j]){
               newP = splice(arr[j])
        }
        }
    }
    console.log(newP);
    
}
solve([7, 8, 9, 7, 2, 3, 4, 1, 2])
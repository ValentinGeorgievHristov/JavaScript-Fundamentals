function solve(arr){
 

    for(let i=0; i<arr.length;i++){
 //console.log(arr[i]);
 if(arr[i]%2===0){
   arr[i]+i
 }else if(arr[i]%2===1){
 arr[i]+i
 
}

    }
    console.log(arr[i]);
}
solve([5, 15, 23, 56, 35]);
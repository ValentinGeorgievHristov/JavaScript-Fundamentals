function solve(arr) {
    let leftSum = 0;
    let rightSum = 0;
    let areSumsEqual = false;
    for (let i = 0; i < arr.length; i++) {
        leftSum = 0;
        rightSum = 0;
//console.log(arr[i]);
for(let j=0; j < i; j++){
    leftSum+=arr[j];

}
for (let k=i+1; k<arr.length; k++){
   rightSum+=arr[k];
}
if(leftSum===rightSum){
    console.log(i);
    areSumsEqual = true
    
}

    }
    //console.log(leftSum);
    if (areSumsEqual!==true){
        console.log("no");
        
    }

}
solve([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4])
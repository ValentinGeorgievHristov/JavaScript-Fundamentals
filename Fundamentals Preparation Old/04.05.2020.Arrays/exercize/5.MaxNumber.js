function solve(arr){
    let result=0;
    let isTopInteger = true;

    for(let i=0; i<arr.length; i++){
        for(let j = i+1; j<arr.length; j++ ){
            if(arr[i]<arr[j]){
                isTopInteger = false;
            }
            if (isTopInteger==true){
                result+=(`${arr[j]} `)
        }
    }
    
}
console.log(result);
}
solve([14, 24, 3, 19, 15, 17])
function solve(n, inputArr){        //сбъркал съм при преписването но е важна идеята. Имам я решена на 2 реда.
let arr=[];           
for (let i=0; i<n; i++){
    arr.push(inputArr[i]);
    let output = " ";
    for(let i = arr.length-1; i>=0; i--){
        output+=`${arr[i]}`;
       
        
    }
    console.log(output);
}
//console.log(output);
}
solve(3, [10, 20, 30, 40, 50]);

function solve(num) {
let res = ""
let res1 = ""
let res2 = ""

for (let i=1; i<=num; i++){
    for(let j=i+1; j<num;j++){
        for(let k=j+1; k==num;k++){
            res += i+ " ";
            res1 += j+ " ";
            res2 += k+ " ";
            console.log(res)  
            // console.log(res1)  
            // console.log(res2)  
        }
        console.log(res1)
    }
    console.log(res2)
}
//console.log(res)
}
solve(3);
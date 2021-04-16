function solve(arrStr) {
let arr= arrStr.map(Number);
let result = 0;
for (const el of arr) {
   if(el%2===0)=> result+=el
//result+=el
   }
    
}
    console.log(result);
    
}
solve(['2','4','6','8','10'] )

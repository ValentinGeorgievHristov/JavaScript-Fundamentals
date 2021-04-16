function solve(input) {
   let elements = input.split(' ').map((ele)=>ele.toLowerCase());

   let obj = generateObject(new Set(elements));

   elements.forEach((ele) => {
       obj[ele] +=1;
   })

    customElements.forEach((ele)=> {    // ot 6ti red
        obj[ele]+=1;
});

let oddKeys = Object.keys(obj).filter((key) => obj[key] % 2 !==0 );

console.log(oddKeys.join(' '));

function generateObject(set){
let obj = {};
set.forEach((ele)=>{
    obj[ele]=0;
});
return obj;
}
solve([
            ' Java C# Php PHP Java PhP 3 C# 3 1 5 C#'])
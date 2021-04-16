function solve(num) {
let str = num.toString();
let sum = '';
let sum1 = 0;
for(let i=0; i<str.length; i++){
  sum = Number(str[i]); 
  sum1+= sum


}
console.log(sum1);
}
solve([245678])
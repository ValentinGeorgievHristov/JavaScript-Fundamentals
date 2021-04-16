function factorial(num1,num2) {
 let res1 = 1;
 let res2 = 1;

 for(let i=num1; i>=1; i--){
res1 *=i;
 }
for(let j=num2; j>=1; j--){
  res2 *=j;
 }
 
//  console.log(res1);
//  console.log(res2);
  console.log((res1/res2).toFixed(2));
}
factorial(5,2);
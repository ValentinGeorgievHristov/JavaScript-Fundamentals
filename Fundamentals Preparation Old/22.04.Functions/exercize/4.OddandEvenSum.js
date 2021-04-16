 function solve(num) {
     all = num % 10;
     let evenSum = 0;
     let oddSum = 0;
     i = 0;
     while (all !== 0)
     i++;

     if (all % 2 == 0) {
         evenSum += all;
     }
     if (all % 2 !== 0) {
         oddSum += all;
     }
     console.log(evenSum);
     console.log(oddSum);
     // console.log(all);


 }
 solve(1000435)
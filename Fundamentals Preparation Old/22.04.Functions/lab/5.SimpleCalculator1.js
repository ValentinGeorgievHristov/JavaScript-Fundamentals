 function solve(num1, num2, action) {

     switch (action) {
         case 'multiply':
             result = num1 * num2;
             //return result;
             break;
         case 'divide':
             result = num1 / num2;
             //return result;
             break;
         case 'add':
             result = num1 + num2;
             //return result;
             break;
         case 'subtract':
             result = num1 - num2;
             //return result;
             break;
     }
return result
 }
 console.log(solve(
    40,
    8,
    'divide',
    
 ))
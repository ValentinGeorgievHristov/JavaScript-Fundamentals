 function solve(num1, num2, action) {

     function calc(act) {
         let result = " ";
         switch (act) {
             case 'multiply':
                 result = "*";
                 break;
             case 'divide':
                 result = "/";
                 break;
             case 'add':
                 result = "+";
                 break;
             case 'subtract':
                 result = "-";
                 break;
                 
         }
         return result;
        }
         console.log(calc(action))
         let end = num1 + calc() + num2
return end;
     }
     console.log(solve(5, 5, 'multiply'))
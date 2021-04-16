function name(num1, num2, num3) {

    let result = num1+num2+num3;
    result % 1 === 0 ? result += " - Integer" : result += " - Float" ;
    console.log(result);
    
   
    

   
}
name(9, 100, 1.1);
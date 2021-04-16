function smallest(num1, num2, num3) {
   //let minNum;// = Number.MAX_SAFE_INTEGER;
//let result = 0;
    //for (let i = 1; i <=3 ; i++) {
   
        
        //if (num1 < minNum) {
            //minNum = num1;
           // result =  num1;

        //}
         if (num2 < num1) {
            num1 = num2;
            //result =  num2;

        } 
        if (num3 < num1) {
            num1 = num3;
            //result =  num3;
        }
    return num1;
}
console.log(smallest(25,    21,    4
    ));
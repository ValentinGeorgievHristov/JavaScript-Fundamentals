function solve(num1, num2, num3) {
    let bigger1=0;
    let bigger2=0;
    let bigger3=0;

    // console.log(num1);
    // console.log(num2);
    // console.log(num3);
    
    if(num3>num1 && num3>num2){ //num3>num1 && num3>num2
        bigger1=num1;
        console.log(bigger3)
    }
       
     if(num2>num3 && num2>num1){
        bigger2=num2;
       console.log(bigger2)
    }
    if(num1>num2 && num1>num3){  //num1>num2 && num1>num3)
        bigger1=num1;
        console.log(bigger1)
    }
    //console.log(bigger1);
    // console.log(bigger2);
    // console.log(bigger3);
}
solve(2, 1, 3);
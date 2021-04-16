function solve(number){            //САМ Я НАГЪРМЕХ ТАЯ ;)
    let result="";

for(let row=1; row<=10; row++){
           
    result =(`${number} X ${row} = ${number*row}`)
    console.log(result);
}

}
solve(2)
function solve(num) {

   let days = ["January","February","March" ,"April", "May","June"," July","Aufust","October","Novenber","December"]
    if(num<=0&&num>=13){
        console.log("Error!");   
    }else{
        console.log(days[num-1])
}
}
solve(-5)

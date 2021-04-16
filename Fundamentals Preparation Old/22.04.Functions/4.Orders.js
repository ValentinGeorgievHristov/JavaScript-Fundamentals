function order(drink,qty){

if(drink==="coffee"){
    return (qty*1.50).toFixed(2);
}else if(drink==="water"){
    return (qty*1).toFixed(2);
}else if(drink==="coke"){
    return (qty*1.40).toFixed(2);
}else if( drink= "snacks"){
   return (qty*2.00).toFixed(2);
}


}
console.log(order("coffee",2));
//•	coffee - 1.50
// •	water - 1.00
// •	coke - 1.40
// •	snacks - 2.00

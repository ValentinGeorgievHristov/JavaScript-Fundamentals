 function solve(goods,qty){
let order = 0
    switch(goods){
        case "coffee": order = (qty* 1.50).toFixed(2); return order
        break;
        case "water": order = (qty* 1.00).toFixed(2); return order
        break;
        case "coke": order = (qty* 1.40).toFixed(2); return order
        break;
        case "snacks": order = (qty* 2.00).toFixed(2); return order
        break;
        
    }
 }
 console.log(solve("coffee",3))
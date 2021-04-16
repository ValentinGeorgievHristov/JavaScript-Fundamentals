function solve(groupCount, type, day) {
    let price = 0;

    switch (type) {

        case "Students":
            switch (day) {
                case "Friday":
                    price = 8.45 * groupCount;
                    break;
                case "Saturday":
                    price = 9.80 * groupCount;
                    break;
                case "Sunday":
                    price = 10.46 * groupCount;
                    break;
            }
            break;
            case "Business":
                if(groupCount>=100&& groupCount>=100){
                    groupCount-=10
                }
                switch (day) {
                    case "Friday":
                        price = 10.90 * groupCount;
                        break;
                    case "Saturday":
                        price = 15.60 * groupCount; //15.60
                        break;
                    case "Sunday":
                        price = 16.00 * groupCount;
                        break;
                };
                break;
            case "Regular":
                switch (day) {
                    case "Friday":
                        price = 15.00 * groupCount;
                        break;
                    case "Saturday":
                        price = 20.00 * groupCount;
                        break;
                    case "Sunday":
                        price = 22.50 * groupCount;
                        break;
                };
                break;
    }
    if(type=="Students"&& groupCount>=30){
        console.log(`Total price: ${(price*0.85).toFixed(2)}`) ;
    }else if(type==="Regular"&& groupCount >= 10&& groupCount <= 20 ){
        console.log(`Total price: ${(price*0.95).toFixed(2)}`);
    }else{
        console.log(`Total price: ${price.toFixed(2)}`);
    
    }
}
solve(120,
    "Business",
    "Saturday"
    
);
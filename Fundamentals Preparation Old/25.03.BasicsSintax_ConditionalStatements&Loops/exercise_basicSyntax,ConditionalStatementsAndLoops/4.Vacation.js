function solve(count, kind, day) {
    let price = 0;
    switch (kind) {
        case "Students":
            switch (day) {
                case "Friday":
                    price = 8.45;
                    break;
                case "Saturday":
                    price = 9.80;
                    break;
                case "Sunday":
                    price = 10.46;   /////  nie smr tuk
                    break;
            }
            break;
            case "Business":
                switch (day) {
                    case "Friday":
                        price = 10.90;
                        break;
                    case "Saturday":
                        price = 15.60;
                        break;
                    case "Sunday":
                        price = 16.00;
                        break;
                }
                //break;
                case "Regular":
                    switch (day) {
                        case "Friday":
                            price = 15.00;
                            break;
                        case "Saturday":
                            price = 20.00;
                            break;
                        case "Sunday":
                            price = 22.50;   /////
                            break;
                    }
                    break;
    }
    let totalSum =( price * count).toFixed(2);
    if (count >= 30 && kind == "Students") {
        totalSum = totalSum * 0.85;
    } else if (count >= 100 && kind == "Business") {
        count -= 10;
    }else if (count >= 10 && count<=20 && kind == "Regular"){
        totalSum = totalSum * 0.95;
    }
    console.log(`Total price: ${totalSum}`)
}
solve(
    40,
    "Business",
    "Saturday"
    

)
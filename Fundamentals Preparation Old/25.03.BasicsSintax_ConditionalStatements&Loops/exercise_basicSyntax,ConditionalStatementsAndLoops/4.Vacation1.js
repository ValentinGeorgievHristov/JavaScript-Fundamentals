function solve(count, kind, day) {
    let price = 0;
    let totalSum = 0;
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
                    price = 10.46;
                    break;
            }
            
            if (count >= 30) {
                price = (price * 0.85);
                //console.log(`Total price: ${totalSum}`)
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
            
            if (count >= 100) {
                count -= 10;
                //console.log(`Total price: ${totalSum}`);
            } //else {
                

               // count = count;
                //console.log(`Total price: ${totalSum}`);
            ////}
            break;
        case "Regular":
            switch (day) {
                case "Friday":
                    price = 15.00;
                    break;
                case "Saturday":
                    price = 20.00;
                    break;
                case "Sunday":
                    price = 22.50; /////
                    break;
            }            
            if (count >= 10 && count <= 20) {
                price = price * 0.95;
                //console.log(`Total price: ${totalSum}`);
            }// else {
            //     totalSum = totalSum;
            //     //console.log(`Total price: ${totalSum}`);
            // }
            break;
    }
    totalSum = (price * count).toFixed(2);
    console.log(`Total price: ${totalSum}`);
}
solve(

    30,
    "Business",
    "Sunday"
    
)
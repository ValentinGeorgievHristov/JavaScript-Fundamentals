function solve(day, age) {
    let priceTicket = 0;
    switch (day) {
        case "Weekday":
            if (age < 0) {

            } else if (age <= 18) {
                priceTicket = 12;
            } else if (age <= 64) {
                priceTicket = 18;
            } else if (age <= 122) {
                priceTicket = 12;
            } else {
                console.log("Error!");
            }
            break;
        case "Weekend":
            if (age < 0) {
                console.log("Error!");
            } else if (age <= 18) {
                priceTicket = 15;
            } else if (age <= 64) {
                priceTicket = 20;
            } else if (age <= 122) {
                priceTicket = 15;
            } else {
                console.log("Error!");
            }
            break;
        case "Holiday":
            if (age < 0) {
                console.log("Error!");
            } else if (age <= 18) {
                priceTicket = 5;
            } else if (age <= 64) {
                priceTicket = 12;
            } else if (age <= 122) {
                priceTicket = 10;
            } else {
                console.log("Error!");
            }
            break;
    }
    if (priceTicket !== 0) {
        console.log(`${priceTicket}$`);
    }
}
solve('Holiday', 15)
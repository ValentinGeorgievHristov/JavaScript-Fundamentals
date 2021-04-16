function solve(cauntry) {
    switch (cauntry) {
        case "USA":
        case "England":
            console.log("English")
            break;
        case "Spain":
        case "Arjentina":
        case "Mexico":
            console.log("Spanish")
            break;
        default: console.log("unknown")
            break;
    }

}
solve("Bulgaria");
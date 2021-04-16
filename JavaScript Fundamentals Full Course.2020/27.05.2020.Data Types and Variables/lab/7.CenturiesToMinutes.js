function name(centuries) {

    //     let year =  100;
    //     let days = 365.2422;

    //         console.log(`${centuries} centuries = ${centuries *year} years = ${Math.round(centuries * days*year)} days = ${(Math.round(centuries * days*year))*24} hours = ${((Math.round(centuries * days*year))*24)*60} minutes`)
    // }
    let years = centuries * 100;
    let days = Math.trunc(years * 365.2422);
    let hours = 24 * days;
    let minutes = 60 * hours;

    console.log(`${centuries} centuries = ${years} `
    + `years = ${days} days = ${hours} hours`
    + ` = ${minutes} minutes`);
}
    name(5);
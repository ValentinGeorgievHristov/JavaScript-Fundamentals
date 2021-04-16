function solve(input) {

    let obj = {};

    for (let line of input) {
        let [country, town, money] = line.split(' > ');

        if (!obj[country]) {
            obj[country] = {};
            obj[country][town] = money;
        } else {
            if (obj[country][town] && obj[country][town] > money) {
                obj[country][town] = money
            }
            if (!obj[country][town]) {
                obj[country][town] = money;
            }
        }
    }
    
    let entriesCountries = Object.entries(obj).sort((a, b) => a[0].localeCompare(b[0]));

    entriesCountries.forEach(key => {
        let entriesCities = Object.entries(key[1]).sort((a, b) => Number(a[1]) - Number(b[1]))
        let result = '';
        result += `${key[0]} -> `

        entriesCities.forEach(towns => {

            result += `${towns.join(' -> ')} `;
        })
        console.log(result);
    })
    
}
solve([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"
]);
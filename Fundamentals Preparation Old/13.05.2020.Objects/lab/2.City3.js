function solve(name, area, population, country, postCode) {
    let object = {
        name,
        area,
        population,
        country,
        postCode
    };

    // object.name = city;
    // object.area = area;
    // object.population = population;
    // object.country = country;
    // object.postCode = postCode;
    let entries = Object.entries(object);
    //console.log(entries)
    for (const [key, value] of entries) {
        console.log(`${key} -> ${value}`);
    }
}
solve("Sofia", " 492", "1238438", "Bulgaria", "1000")
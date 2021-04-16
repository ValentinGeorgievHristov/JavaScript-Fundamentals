function solve(city, area, population, country, postCode) {
    let object = {};

    object.name = city;
    object.area = area;
    object.population = population;
    object.country = country;
    object.postCode = postCode;
    let entries = Object.entries(object);
    for (const [key, value] of entries) {
        console.log(`${key} -> ${value}`);
    }
}
solve("Sofia", " 492", "1238438", "Bulgaria", "1000")
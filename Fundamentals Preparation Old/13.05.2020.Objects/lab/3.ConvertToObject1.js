function solve(stringJson) {    
    let data = stringJson

    const obj = JSON.parse(data)

    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            const element = obj[key];
            console.log(`${key}: ${element}`);

        }
    }
}
solve('{"name": "George", "age": 40, "town": "Sofia"}');
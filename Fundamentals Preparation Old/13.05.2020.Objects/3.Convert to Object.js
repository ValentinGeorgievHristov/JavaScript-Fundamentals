function solve(string) {
    let conv = JSON.parse(string);
    //console.log(conv);
    entries = Object.entries(conv);
    for (const [key, value] of entries) {
        console.log(`${key}: ${value}`);

    }
}
solve('{"name": "George", "age": 40, "town": "Sofia"}');
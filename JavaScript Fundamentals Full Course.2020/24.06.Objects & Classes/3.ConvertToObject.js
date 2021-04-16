function obj(json) {          // първо решение с entries, второ решение с for in loop

    let object = json
    object = JSON.parse(json)
   

    // let entries = Object.entries(object);

    // for (const [key, value] of entries) {
    //     console.log(`${key}: ${value}`);
        
    // }
    for(let key in object){
        console.log(`${key}: ${object[key]}`);
        
    }


}
obj(`{
    "name": "George",
    "age": 40,
    "town": "Sofia"
}`)
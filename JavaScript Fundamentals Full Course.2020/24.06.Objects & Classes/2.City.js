function obj(name, area, population, country, postCode) {

    let townObj = {
        name,
        area,
        population,
        country,
        postCode
    }
    
    for(let key in townObj){
console.log(`${key} -> ${townObj[key]}`)

    }

}
obj("Sofia", " 492", "1238438", "Bulgaria", "1000")

//вариант 2 с entries 
// function obj(name, area, population, country, postCode) {

//     let townObj = {
//         name,
//         area,
//         population,
//         country,
//         postCode
//     }
//     let entries = Object.entries(townObj)
    

//     for (const [key,value] of entries) {

//                console.log(`${key} -> ${value}`)
//     }
//     obj("Sofia", " 492", "1238438", "Bulgaria", "1000")
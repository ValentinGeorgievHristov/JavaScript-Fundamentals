function towns(arr) {
    let arr1 = [];
    let townObject = {};
    for (const row of arr) {
        const [town, latitude, longitude] = row.split(' | ');

        //console.log(town,latitude ,longitude)

        const obj = {
            townN: town,
            latitudeE: latitude,
            longitudeE: longitude
        }
        arr1.push(obj);
        for (const object1 of arr1) {
console.log(`${object1.town}  ${object1.latitude}  ${object1.longitude}`)
        }
    }

}
towns(
    ['Sofia | 42.696552 | 23.32601',
        'Beijing | 39.913818 | 116.363625'
    ]
)
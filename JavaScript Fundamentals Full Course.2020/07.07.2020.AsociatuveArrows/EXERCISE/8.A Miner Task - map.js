function solve(arr) {
    let map = new Map;

    for (let i = 0; i < arr.length; i += 2) {
        let resourses = arr[i];
        let qty = Number(arr[i + 1]);

        if (!map.has(resourses)) {
           map.set(resourses,qty);
        } else {
            map.set.add(qty);
        }

    }
    console.log(map);
    //let entries = Object.entries(obj)//.sort((a, b) => a[0].localeCompare(b[0]))
   //console.log(entries);
    // for (const key of entries) {
    //    console.log(`${key[0]} -> ${key[1]}`);
    // }
}
solve(
    [
        'gold',
        '155',
        'silver',
        '10',
        'copper',
        '17',
        'gold',
        '15'
    ]
    // [
    //     'Gold',
    //     '155',
    //     'Silver',
    //     '10',
    //     'Copper',
    //     '17'
    //     ]
        
    )
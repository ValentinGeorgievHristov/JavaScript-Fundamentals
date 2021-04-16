function solve(input) {
    let result = '';
    let obj = {};
    input.forEach(line => {
        [company, id] = line.split(' -> ');

        if (!obj[company]) {
            obj[company] = []
            obj[company] = [id];
        } else {
            if (obj[company].indexOf(id)<0) {                 
                obj[company].push(id);
            }                                                          //???????
        }

    });

    let objEntries = Object.entries(obj).sort((a, b) => a[0].localeCompare(b[0]));
    //console.log(objEntries);
    objEntries.forEach(key => {
        console.log(`${key[0]}\n-- ${key[1].join('\n-- ')}`);
    });

}
solve(
    // [
    //     'SoftUni -> AA12345',
    //     'SoftUni -> BB12345',
    //     'Microsoft -> CC12345',
    //     'HP -> BB12345'
    // ]
    [
        'SoftUni -> AA12345',
        'SoftUni -> CC12344',
        'Lenovo -> XX23456',
        'SoftUni -> AA12345',
        'Movement -> DD11111'
    ]

);
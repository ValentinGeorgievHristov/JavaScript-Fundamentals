// function solve(input) {
//     let parking = [];
//     let object = {};

//     input.forEach(element => {
//         let [command, carNumber] = element.split(', ')
//         let index = parking.indexOf(carNumber)

//         if (command == 'IN') {
//             parking.push(carNumber);
//         } else if (command == 'OUT') {
//             parking.splice(index, 1)
//         }

//         if (parking.length < 1) {
//             console.log('Parking Lot is Empty');
//         }
//     });

//     parking.forEach(element => {
//         let num = Number(element.slice(2, 6))
//         object[element] = num;
//     });

//     let entries = Object.entries(object).sort((a, b) => a[1] - b[1]);

//     for (const kvp of entries) {

//         console.log(kvp[0]);
//     }
// }
piccolo = (input = []) => {   //Ангел
    const parkingLog = [
        ...input.reduce((cars, line) => {
            let [direction, car] = line.split(', ');
            cars[direction === 'IN' ? 'add' : 'delete'](car);
            return cars;
        }, new Set()),
    ].sort();

    return parkingLog.length ? parkingLog.join('\n') : 'Parking Lot is Empty';
};
solve(
    ['IN, CA2844AA',
        'IN, CA1234TA',
        'OUT, CA2844AA',
        'IN, CA9999TT',
        'IN, CA2866HI',
        'OUT, CA1234TA',
        'IN, CA2844AA',
        'OUT, CA2866HI',
        'IN, CA9876HH',
        'IN, CA2822UU'
    ]

);
function train(arr) {       //РЕШЕНИЕ НА МИРО !!!
  
    let wagons = arr[0].split(' ').map(Number); //ВАГОНИ; 
    let maxCapacity = arr[1];   // КАПАЦИТЕТ ЗА ВАГОН;
    let commands = arr.slice(2);  // КАЧВАНИЯ НА ПАСАЖЕРИ ПО ВАГОНИ


    for (let cmd of commands) {

        let tokens = cmd.split(' ');

        if (tokens.length === 2) {
            wagons.push(Number(tokens[1]))
        } else {

            let passengersToFit = Number(tokens[0])  // брой пасажери които трябва да фитнем
            for (let index in wagons) {

                let availableCapacity = maxCapacity - wagons[index];

                if (availableCapacity >= passengersToFit) {

                    wagons[index] += passengersToFit;
                    break;
                }
            }
        }
    }

console.log(wagons.join(' '));

}

train(['32 54 21 12 4 0 23', //пътници по вагони
    '75', // капацитет вагон;
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75'
])
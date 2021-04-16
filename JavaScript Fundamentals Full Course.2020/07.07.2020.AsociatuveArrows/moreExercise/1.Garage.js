function solve(arr1) {
    let num = arr1.shift();
    let cars = {};
    let arr = arr1.splice(0, num)
    //console.log(arr);

    for (let i = 0; i < arr.length; i++) {
        let [car, mileage, fuel] = arr[i].split('|');
        //console.log(car);
        if (!cars[car]) {
            cars[car] = {};
            cars[car].mileage = Number(mileage);
            cars[car].fuel = Number(fuel);
        }
    } // finito napalnen obekt cars//


    arr1.forEach(line => {
        let command = line.split(' : ')[0]
        let car = line.split(' : ')[1]
        //console.log(car);
        let fuel = 0;
        let mileage = 0;
        switch (command) {
            case 'Drive':
                mileage = Number(line.split(' : ')[2])
                fuel = Number(line.split(' : ')[3])
                if (fuel > cars[car].fuel) {
                    console.log("Not enough fuel to make that ride")
                } else {
                    cars[car].fuel -= fuel;
                    cars[car].mileage += mileage;
                    console.log(`${car} driven for ${mileage} kilometers. ${fuel} liters of fuel consumed.`);
                }
                if (cars[car].mileage >= 100000) {
                    console.log(`Time to sell the ${car}!`);

                }
                break;
            case 'Refuel':
                fuel = Number(line.split(' : ')[2])
                if (fuel + cars[car].fuel >= 75) {
                    cars[car].fuel = 75;
                } else {
                    cars[car].fuel += fuel;
                }
                console.log(`${car} refueled with ${fuel} liters`);
                break;
            case 'Revert':
                mileage = Number(line.split(' : ')[2]);
                cars[car].mileage -= mileage;
                if (cars[car].mileage >= 10000) {
                    console.log(`${car} mileage decreased by ${mileage} kilometers`);
                }
                break;
            case 'Stop':
                let entries = Object.entries(cars).sort(compare).forEach(element => {

                    console.log(`${element[0]} -> Mileage: ${element[1].mileage} kms, Fuel in the tank: ${element[1].fuel} lt.`)
                });
                break;
        }
        
    });

    function compare(a, b) {
        //console.log(a)
        if (b[1].mileage < a[1].mileage) {
            return -1;
        } else if (b[1].mileage > a[1].mileage) {
            return 1;
        } else {
            return b[0].localeCompare(a[0])
        }


    }
}
solve(
    [
        '3', //
        'Audi A6|38000|62', //
        'Mercedes CLS|11000|35', //
        'Volkswagen Passat CC|45678|5', //
        'Drive : Audi A6 : 543 : 47',
        'Drive : Mercedes CLS : 94 : 11',
        'Drive : Volkswagen Passat CC : 69 : 8',
        'Refuel : Audi A6 : 50',
        'Revert : Mercedes CLS : 500',
        'Revert : Audi A6 : 30000',
        'Stop'

    ])
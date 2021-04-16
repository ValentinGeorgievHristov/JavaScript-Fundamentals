function solve(arr) {
    let obj = {};
    let count = arr.shift();
    let cars = arr.splice(0, count).forEach(car => {
        let [vehicle, mileageText, fuelText] = car.split('|')
        let mileage = Number(mileageText);
        let fuel = Number(fuelText);

        if (!vehicle[mileage]) {
            obj[vehicle] = {};
            obj[vehicle][mileage] = fuel;
        }
    });
   console.log(arr)

}
solve(
    [
        '3',          // ВЗЕХ ДАННИТЕ
        'Audi A6|38000|62',       // ВЗЕХ ДАННИТЕ
        'Mercedes CLS|11000|35',    // ВЗЕХ ДАННИТЕ     
        'Volkswagen Passat CC|45678|5',  // ВЗЕХ ДАННИТЕ
        'Drive : Audi A6 : 543 : 47',
        'Drive : Mercedes CLS : 94 : 11',
        'Drive : Volkswagen Passat CC : 69 : 8',
        'Refuel : Audi A6 : 50',
        'Revert : Mercedes CLS : 500',
        'Revert : Audi A6 : 30000',
        'Stop'
    ]
    //     [
    //     '4',
    //     'Lamborghini Veneno|11111|74',
    //     'Bugatti Veyron|12345|67',
    //     'Koenigsegg CCXR|67890|12',
    //     'Aston Martin Valkryie|99900|50',
    //     'Drive : Koenigsegg CCXR : 382 : 82',
    //     'Drive : Aston Martin Valkryie : 99 : 23',
    //     'Drive : Aston Martin Valkryie : 2 : 1',
    //     'Refuel : Lamborghini Veneno : 40',
    //     'Revert : Bugatti Veyron : 2000',
    //     'Stop'
    //   ]
  

)
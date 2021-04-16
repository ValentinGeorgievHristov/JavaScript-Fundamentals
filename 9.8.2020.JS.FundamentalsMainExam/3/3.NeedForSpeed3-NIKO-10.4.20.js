function solve(arr) {
    let N = Number(arr.shift());
    //let arrCommand = arr.splice(0, N);
    //console.log(arrCommand);
    //arrCommand.forEach(element1 => console.log(element1));
 
    let carArray = []; 
    let i = 1;  
    let row;
    let Flag = true;
 
    do{
        row = arr.shift();
 
        //let[car, distance, fuel] = arr[i].split("|");
 
        if (i <= N ){
            let[car, distance, fuel] = row.split("|");
            i++;
            if(!carArray[car]) {
                let carObject = {};
                carObject.distance = Number(distance);
                carObject.fuel = Number(fuel);
                carArray[car] = carObject;  
 
                //let newArr = carArray.splice(car, 1);
                //carArray.removeFromObjectByKey(car);
 
                //console.log(carArray);
            }
        }
        else{
            let[command, car, mileage, fuel] = row.split(" : ");
            switch (command) {
                case 'Drive':
                    if( carArray[car].fuel > Number(fuel) ){
                        carArray[car].fuel -= Number(fuel);
                        carArray[car].distance += Number(mileage);
                        console.log(`${car} driven for ${mileage} kilometers. ${fuel} liters of fuel consumed.`);
                        if (carArray[car].distance> 100000) {
                            console.log(`Time to sell the ${car}!`);
                            delete carArray[car]; 
                        }
                    }  
                    else
                        console.log("Not enough fuel to make that ride");
 
                    break;
                case 'Refuel':
                    fuel = mileage;
 
                    if (carArray[car].fuel + Number(fuel) > 75) {
                        fuel = 75 - carArray[car].fuel;
                        carArray[car].fuel = 75;                        
                    } 
                    else carArray[car].fuel += Number(fuel);
                    console.log(`${car} refueled with ${fuel} liters`);
                    break;
                case 'Revert': 
                carArray[car].distance -= Number(mileage);
                if (carArray[car].distance >= 10000) {
                    console.log(`${car} mileage decreased by ${mileage} kilometers`);
                }
                else
                carArray[car].distance = 10000;
                    break;
                case 'Stop':
 
                //for (el in carArray){         console.log(carArray[el]);     }       
 
                    let entries = Object.entries(carArray).sort(compare).forEach(element => {
 
                        console.log(`${element[0]} -> Mileage: ${element[1].distance} kms, Fuel in the tank: ${element[1].fuel} lt.`)
                    });
                    Flag = false;   
                    break;
            }//switch                                
        }
        //       console.log(car);       console.log(distance);        console.log(fuel);
 
    }while(Flag);
 
 
 
 
 
    //carArray.forEach(element1 => console.log(element1));
    //for (const element of carArray) {        console.log(element);      }
    //for (el in carArray){         console.log(carArray[el]);     }
 
 
    function compare(a, b) {
 
        if (b[1].distance < a[1].distance) 
            return -1;
        if (b[1].distance === a[1].distance) 
         return a[0].localeCompare(b[0])
 
    }
 
}
 
solve(
// [    '4', //
//     'Audi A6|38000|62', //
//     'Aaaa|38000|62',
//     'Mercedes CLS|11000|35', //
//     'Volkswagen Passat CC|45678|5', //
//     'Drive : Audi A6 : 543 : 47',
//     'Drive : Aaaa : 543 : 47',
//     'Drive : Mercedes CLS : 94 : 11',
//     'Drive : Volkswagen Passat CC : 69 : 8',
//     'Refuel : Audi A6 : 50',
//     'Refuel : Aaaa : 50',
//     'Revert : Mercedes CLS : 500',
//     'Revert : Audi A6 : 30000',
//     'Revert : Aaaa : 30000',
//     'Stop' ]
 
['4',
'Lamborghini Veneno|11111|74',
'Bugatti Veyron|12345|67',
'Koenigsegg CCXR|67890|12',
'Aston Martin Valkryie|99900|50',
'Drive : Koenigsegg CCXR : 382 : 82',
'Drive : Aston Martin Valkryie : 99 : 23',
'Drive : Aston Martin Valkryie : 2 : 1',
'Refuel : Lamborghini Veneno : 40',
'Revert : Bugatti Veyron : 2000',
'Stop']
 
)

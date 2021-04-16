function solve(input) {
    let towns = input.shift();
    let mapIcelands = {};
    //let counter = 0;

    while (towns !== 'Sail') {
        let [town, populationText, goldText] = towns.split('||')
        let populationObject = Number(populationText);
        let goldObject = Number(goldText);
        //counter++;
        // mapIcelands[town] = {
        //     populationObject,
        //     goldObject
        // };
        if (!mapIcelands[town]) {
            mapIcelands[town] = {};
            mapIcelands[town].populationObject = populationObject;
            mapIcelands[town].goldObject = goldObject;
        } else {
            mapIcelands[town].populationObject += populationObject;
            mapIcelands[town].goldObject += goldObject;
        }

        //console.log(town);
        towns = input.shift();
    }
    // console.log(mapIcelands);
    let partTwo = input.shift();

    while (partTwo !== 'End') {     //  OTNOVO ZAMESTVAME STOINOSTTA NA [TOWN] V OBJECT S [NEWTOWN]
        let [command, newTown, one, two] = partTwo.split('=>')
        one = Number(one);
        two = Number(two);

        switch (command) {
            case 'Plunder':

                if (mapIcelands[newTown].populationObject - one > 0 || mapIcelands[newTown].goldObject - two > 0) {

                    mapIcelands[newTown].populationObject -= one;
                    mapIcelands[newTown].goldObject -= two;
                    console.log(`${newTown} plundered! ${two} gold stolen, ${one} citizens killed.`);
                }
                if (mapIcelands[newTown].populationObject <= 0 || mapIcelands[newTown].goldObject <= 0) {
                    console.log(`${newTown} has been wiped off the map!`);
                    delete mapIcelands[newTown];
                };
                break
            case 'Prosper':
                if (one < 0) {
                    console.log('Gold added cannot be a negative number!');
                } else {
                    mapIcelands[newTown].goldObject += one;
                    console.log(`${one} gold added to the city treasury. ${newTown} now has ${mapIcelands[newTown].goldObject} gold.`);
                }
                break

        }

        partTwo = input.shift();
    }
    let counter = 0;


    let entries = Object.entries(mapIcelands).sort(compare);
    let len = Object.keys(mapIcelands).length;
    console.log(`Ahoy, Captain! There are ${len} wealthy settlements to go to:`);

    for (const key of entries) {
        counter++;
        console.log(`${key[0]} -> Population: ${key[1].populationObject} citizens, Gold: ${key[1].goldObject} kg`);
    }


    //console.log(`${town1} -> Population: ${people} citizens, Gold: ${gold} kg`);


    function compare(a, b) {

        if (b[1].goldObject < a[1].goldObject)
            return -1;
        if (b[1].goldObject === a[1].goldObject)
            return a[0].localeCompare(b[0])

    }
}
solve(
    //[
    //     'Tortuga||345000||1250',
    //     'Santo Domingo||240000||630',
    //     'Havana||410000||1100',
    //     'Sail',
    //     'Plunder=>Tortuga=>75000=>380',
    //     'Prosper=>Santo Domingo=>180',
    //     'End'
    // ]
    [
        'Nassau||95000||1000',
        'San Juan||930000||1250',
        'Campeche||270000||690',
        'Port Royal||320000||1000',
        'Port Royal||100000||2000',
        'Sail',
        'Prosper=>Port Royal=>-200',
        'Plunder=>Nassau=>94000=>750',
        'Plunder=>Nassau=>1000=>150',
        'Plunder=>Campeche=>150000=>690',
        'End'
    ]

)
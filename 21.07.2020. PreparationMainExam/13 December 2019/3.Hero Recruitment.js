function solve(input) {

    let commands = input.shift();
    let hero = {};

    while (commands !== 'End') {
        let [command, name, word] = commands.split(' ')

        switch (command) {
            case 'Enroll':
                if (!hero[name]) {
                    hero[name] = [];
                } else {
                    console.log(`${name} is already enrolled.`); //ОТКОМЕНТИРАЙ СЛЕД ЗА РЕЗУЛТАТА
                }
                break;
            case 'Learn':
                if (hero[name].indexOf(word) >= 0) {
                    console.log(`${name} has already learnt ${word}.`);
                } else if (hero[name]) {
                    hero[name].push(word);
                } else {
                    console.log(`${name} doesn't exist.`);
                };
                break;
            case 'Unlearn':
                let index = hero[name].indexOf(word);
                if (index >=0) {                    
                    hero[name].splice(index, 1);
                } else if (index < 0) {  //
                    console.log(`${name} doesn't know ${word}.`);
                } else if (!hero[name]) {
                    console.log(`${name} doesn't exist.`);
                };
                break;
        }
        commands = input.shift();
    }
    console.log('Heroes:');

    let entries = Object.entries(hero).sort(compare);

    //console.log(entries);
    for (let kvp of entries) {

        console.log(`== ${kvp[0]}: ${kvp[1]}`);

    }

    function compare(a, b) {
        
        if (a[1].length > b[1].length) {
            return -1;
        } else {
            return a[0].localeCompare(b[0])
        }

    }

}
solve(
    // [
    //     'Enroll Stefan',
    //     'Enroll Pesho',
    //     'Enroll Stefan',
    //     'Learn Stefan ItShouldWork',
    //     'Learn Stamat ItShouldNotWork',
    //     'Unlearn Gosho Dispel',
    //     'Unlearn Stefan ItShouldWork', //
    //     'End'
    // ]
    [
        'Enroll Stefan',
        'Learn Stefan ItShouldWork',
        'Learn Stefan ItShouldWork',
        'Unlearn Stefan NotFound',
        'End'
    ]

    //   [
    //     'Enroll Stefan',
    //     'Enroll Nikolai',
    //     'Enroll Oladimir',
    //     'Enroll Valentin',
    //     'Learn Nikolai Salsa',
    //     'Learn Oladimir Malsa',
    //     //'Learn Nikolai ChaCha',
    //     'Learn Valentin Java',
    //     'Learn Stefan ItShouldWork',
    //     'Unlearn Stefan NotFound',
    //     'End'
    //   ]
)